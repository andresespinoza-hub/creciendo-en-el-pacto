// ═══════════════════════════════════════════════════════════
// CRECIENDO EN EL PACTO — Sincronización en la nube
// Función serverless (Vercel + Neon Postgres).
//
// Guarda UN solo registro compartido por la familia ('family').
// GET  /api/state  → devuelve el estado guardado
// POST /api/state  → fusiona lo recibido con lo guardado y devuelve el resultado
//
// Requiere la variable de entorno DATABASE_URL (la pone Neon
// automáticamente al conectar el almacenamiento en Vercel).
// Si no está configurada, responde 503 y el cliente sigue
// funcionando con localStorage (no se rompe nada).
// ═══════════════════════════════════════════════════════════

const { neon } = require("@neondatabase/serverless");

// Fusiona en profundidad el estado entrante con el guardado, para que
// dos dispositivos editando cosas distintas NUNCA se pisen los datos.
// - Objetos (logs, prog, rn): se combinan recursivamente (semana por
//   semana, campo por campo).
// - Arreglos (port = portafolio): se queda el más largo (no se pierden
//   evidencias).
// - Texto vacío NO sobre-escribe texto existente (evita borrados accidentales
//   desde un dispositivo con datos viejos).
function deepMerge(a, b) {
  if (Array.isArray(b)) {
    return (Array.isArray(a) && a.length > b.length) ? a : b;
  }
  if (b && typeof b === "object") {
    const out = Object.assign({}, (a && typeof a === "object") ? a : {});
    for (const k of Object.keys(b)) {
      out[k] = deepMerge(out[k], b[k]);
    }
    return out;
  }
  if (b === undefined) return a;
  if (b === "" && a !== undefined && a !== "") return a;
  return b;
}

module.exports = async (req, res) => {
  // Mismo origen, pero dejamos CORS abierto por si acaso.
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-cp-key");
  if (req.method === "OPTIONS") return res.status(204).end();

  const url = process.env.DATABASE_URL;
  if (!url) {
    // Aún no se ha conectado la base de datos: el cliente usa localStorage.
    return res.status(503).json({ error: "sync_not_configured" });
  }

  // Llave compartida opcional (protección extra). Solo se exige si
  // existe la variable SYNC_KEY en el servidor.
  const need = process.env.SYNC_KEY;
  if (need && req.headers["x-cp-key"] !== need) {
    return res.status(401).json({ error: "unauthorized" });
  }

  try {
    const sql = neon(url);
    await sql`CREATE TABLE IF NOT EXISTS cp_state (
      id text PRIMARY KEY,
      data jsonb NOT NULL DEFAULT '{}'::jsonb,
      updated_at timestamptz NOT NULL DEFAULT now()
    )`;

    if (req.method === "GET") {
      const rows = await sql`SELECT data, updated_at FROM cp_state WHERE id = 'family'`;
      return res.status(200).json(rows[0] || { data: {}, updated_at: null });
    }

    if (req.method === "POST") {
      let body = req.body;
      if (typeof body === "string") {
        try { body = JSON.parse(body); } catch (e) { body = {}; }
      }
      const incoming = (body && body.data) || {};

      const rows = await sql`SELECT data FROM cp_state WHERE id = 'family'`;
      const current = rows[0] ? rows[0].data : {};
      const merged = deepMerge(current, incoming);

      const w = await sql`
        INSERT INTO cp_state (id, data, updated_at)
        VALUES ('family', ${JSON.stringify(merged)}::jsonb, now())
        ON CONFLICT (id) DO UPDATE
          SET data = EXCLUDED.data, updated_at = now()
        RETURNING updated_at`;

      return res.status(200).json({ ok: true, data: merged, updated_at: w[0] && w[0].updated_at });
    }

    return res.status(405).json({ error: "method_not_allowed" });
  } catch (e) {
    return res.status(500).json({ error: "server_error", detail: String(e && e.message || e) });
  }
};
