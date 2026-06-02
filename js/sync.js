// ═══════════════════════════════════════════════════════════
// CRECIENDO EN EL PACTO — Sincronización con la nube (cliente)  v2
//
// Regla de oro: LA NUBE MANDA.
//   • Al ABRIR la app  → se BAJA lo último de la nube y se muestra
//     (si hay algo nuevo, la página se refresca una vez para verlo).
//   • Al EDITAR/guardar → se SUBE el cambio a la nube.
//   • Un dispositivo con datos viejos YA NO pisa lo nuevo de la nube
//     (antes sí pasaba: por eso un cambio "desaparecía").
//
// Si la nube no está disponible, la app sigue con el almacenamiento
// local y no se rompe nada.
// ═══════════════════════════════════════════════════════════

(function () {
  var EP = "/api/state";
  var MAP = { logs: "cp_logs", prog: "cp_prog", port: "cp_port", rn: "cp_rn" };
  var SEEN = "cp_sync_seen";    // updated_at de la nube ya adoptado en este dispositivo
  var DIRTY = "cp_sync_dirty";  // hay ediciones locales sin subir

  var rawSet = localStorage.setItem.bind(localStorage);
  var pushTimer = null, busy = false, everOK = false;

  // ── lectura/escritura local ──
  function readLocal() {
    var d = {};
    Object.keys(MAP).forEach(function (k) {
      try { var v = localStorage.getItem(MAP[k]); if (v != null) d[k] = JSON.parse(v); } catch (e) {}
    });
    return d;
  }
  function writeLocal(d) {
    var changed = false;
    Object.keys(MAP).forEach(function (k) {
      if (d[k] === undefined) return;
      var s = JSON.stringify(d[k]);
      if (localStorage.getItem(MAP[k]) !== s) { rawSet(MAP[k], s); changed = true; }
    });
    return changed;
  }

  // Fusión con PRIORIDAD DE LA NUBE: el valor del servidor gana en conflicto;
  // lo local solo rellena huecos que la nube no tiene (no se pierde nada propio).
  function pick(localV, serverV) {
    if (Array.isArray(serverV)) {
      return (Array.isArray(localV) && localV.length > serverV.length) ? localV : serverV;
    }
    if (serverV && typeof serverV === "object") {
      var out = Object.assign({}, (localV && typeof localV === "object") ? localV : {});
      for (var k in serverV) out[k] = pick(out[k], serverV[k]);
      return out;
    }
    if (serverV === undefined || serverV === null || serverV === "") {
      return (localV !== undefined) ? localV : serverV;
    }
    return serverV;
  }
  function serverWins(local, server) { return pick(local || {}, server || {}); }

  function toast(msg) {
    try {
      var t = document.getElementById("toast");
      if (!t) return;
      t.textContent = msg; t.classList.add("show");
      setTimeout(function () { t.classList.remove("show"); }, 2600);
    } catch (e) {}
  }
  function notTyping() {
    var el = document.activeElement;
    return !el || (el.tagName !== "TEXTAREA" && el.tagName !== "INPUT");
  }
  function maybeReload(changed, reloadIfChanged) {
    // El bucle se evita solo: tras adoptar fijamos SEEN, así el próximo
    // GET ve el mismo updated_at y ya no recarga.
    if (changed && reloadIfChanged && notTyping()) location.reload();
  }

  // ── BAJAR (la nube manda) ──
  function pull(opts) {
    opts = opts || {};
    return fetch(EP, { method: "GET", headers: { "Accept": "application/json" } })
      .then(function (r) { if (!r.ok) throw 0; return r.json(); })
      .then(function (j) {
        if (!everOK) { everOK = true; toast("☁️ Conectado a la nube"); }
        var ua = j && j.updated_at ? String(j.updated_at) : "";
        var seen = localStorage.getItem(SEEN) || "";
        if (!j || !j.data) return;
        if (ua && ua === seen) return;           // la nube no cambió desde la última vez
        var merged = serverWins(readLocal(), j.data);
        var changed = writeLocal(merged);
        if (ua) rawSet(SEEN, ua);
        // Si lo local tenía algo que la nube no tenía, súbelo (sin pisar nada de la nube).
        if (JSON.stringify(merged) !== JSON.stringify(j.data)) quietPush(merged);
        maybeReload(changed, opts.reloadIfChanged);
      })
      .catch(function () {});
  }

  // ── SUBIR ──
  function postState(data) {
    return fetch(EP, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: data })
    }).then(function (r) { if (!r.ok) throw 0; return r.json(); });
  }
  function push(opts) {
    opts = opts || {};
    if (busy) return;
    busy = true;
    postState(readLocal())
      .then(function (j) {
        busy = false;
        if (!everOK) { everOK = true; toast("☁️ Conectado a la nube"); }
        var changed = false;
        if (j && j.data) changed = writeLocal(serverWins(readLocal(), j.data));
        if (j && j.updated_at) rawSet(SEEN, String(j.updated_at));
        localStorage.removeItem(DIRTY);
        maybeReload(changed, opts.reloadIfChanged);
      })
      .catch(function () { busy = false; });   // queda DIRTY: reintenta luego
  }
  // empuje "silencioso" para rellenar huecos en la nube (no toca SEEN/DIRTY)
  function quietPush(data) { postState(data).catch(function () {}); }

  function schedulePush() {
    rawSet(DIRTY, "1");
    if (pushTimer) clearTimeout(pushTimer);
    pushTimer = setTimeout(function () { pushTimer = null; push({}); }, 1200);
  }

  // Interceptar SOLO las escrituras de datos de la app (no la cortina de acceso).
  localStorage.setItem = function (k, v) {
    rawSet(k, v);
    if (typeof k === "string" && /^cp_(logs|prog|port|rn)$/.test(k)) schedulePush();
  };

  // Al ABRIR: si hay ediciones locales sin subir, súbelas; si no, baja la nube.
  function start() {
    if (localStorage.getItem(DIRTY)) push({ reloadIfChanged: true });
    else pull({ reloadIfChanged: true });
  }
  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(start, 400);
  } else {
    document.addEventListener("DOMContentLoaded", function () { setTimeout(start, 400); });
  }

  // Al VOLVER a la pestaña: subir lo pendiente o bajar novedades.
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
      if (localStorage.getItem(DIRTY)) push({});
      else pull({ reloadIfChanged: true });
    }
  });
  // Al cerrar/ocultar con cambios sin subir: envío confiable de respaldo.
  window.addEventListener("pagehide", function () {
    try {
      if (!localStorage.getItem(DIRTY) || !navigator.sendBeacon) return;
      var blob = new Blob([JSON.stringify({ data: readLocal() })], { type: "application/json" });
      navigator.sendBeacon(EP, blob);
    } catch (e) {}
  });

  // Forzar manualmente desde consola si hiciera falta.
  window.cpSync = function () { pull({ reloadIfChanged: true }); };
})();
