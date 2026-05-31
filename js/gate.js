// ═══════════════════════════════════════════
// CRECIENDO EN EL PACTO — Cortina de acceso
// Pide correo + clave antes de mostrar la app.
// NOTA: es una "cortina", no una bóveda. Detiene a curiosos,
// pero alguien muy técnico podría ver el código. Para protección
// real del lado del servidor, ver INFORME (Vercel add-on o Cloudflare Access).
// ═══════════════════════════════════════════

(function () {
  // ───────────────────────────────────────────
  // 👉 CAMBIA AQUÍ EL CORREO Y LA CLAVE
  // ───────────────────────────────────────────
  var CONFIG = {
    clave: "pacto2026",                         // <-- cambia esta clave
    correos: [                                   // correos permitidos (déjalo [] para aceptar cualquier correo con la clave)
      "andres.espinoza@iglesiaraah.org",
      "carolina_romo@hotmail.com"                // Carolina (mamá / educadora)
    ],
    recordarDias: 30                             // cuántos días recuerda la sesión en ese dispositivo
  };
  // ───────────────────────────────────────────

  var KEY = "cp_gate_ok";

  // ¿Ya desbloqueó este dispositivo y sigue vigente?
  try {
    var saved = JSON.parse(localStorage.getItem(KEY) || "null");
    if (saved && saved.exp && Date.now() < saved.exp) return; // ya entró, no mostrar cortina
  } catch (e) {}

  // Inyectar estilos de la cortina
  var css = document.createElement("style");
  css.textContent = [
    "#cp-gate{position:fixed;inset:0;z-index:99999;background:linear-gradient(135deg,#1C1008,#2A1810);",
    "display:flex;align-items:center;justify-content:center;padding:20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif}",
    "#cp-gate .box{background:#FAF6F0;border-radius:20px;max-width:380px;width:100%;padding:32px 28px;box-shadow:0 12px 48px rgba(0,0,0,.4);text-align:center}",
    "#cp-gate h1{font-family:Georgia,serif;font-size:1.4rem;color:#1C0F06;margin:0 0 4px}",
    "#cp-gate p.sub{font-size:.85rem;color:#7A6355;margin:0 0 20px}",
    "#cp-gate label{display:block;text-align:left;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#7A6355;margin:12px 0 4px}",
    "#cp-gate input{width:100%;box-sizing:border-box;border:1.5px solid rgba(0,0,0,.15);border-radius:8px;padding:11px 12px;font-size:1rem;background:#fff;color:#1C0F06;font-family:inherit}",
    "#cp-gate input:focus{outline:none;border-color:#D4641A}",
    "#cp-gate button{width:100%;margin-top:20px;background:#D4641A;color:#fff;border:none;border-radius:8px;padding:13px;font-size:1rem;font-weight:700;cursor:pointer;font-family:inherit}",
    "#cp-gate button:hover{background:#be5616}",
    "#cp-gate .err{color:#B02020;font-size:.84rem;margin-top:12px;min-height:18px}",
    "#cp-gate .verse{font-size:.78rem;color:#7A6355;font-style:italic;margin-top:18px;border-top:1px solid rgba(0,0,0,.08);padding-top:14px}"
  ].join("");
  document.head.appendChild(css);

  // Construir la cortina
  function build() {
    var g = document.createElement("div");
    g.id = "cp-gate";
    g.innerHTML =
      '<div class="box">' +
      '<h1>Creciendo en el Pacto</h1>' +
      '<p class="sub">Familia Espinoza · acceso privado</p>' +
      '<label for="cp-mail">Correo</label>' +
      '<input id="cp-mail" type="email" autocomplete="username" placeholder="tu correo">' +
      '<label for="cp-pass">Clave</label>' +
      '<input id="cp-pass" type="password" autocomplete="current-password" placeholder="tu clave">' +
      '<button id="cp-enter">Entrar</button>' +
      '<div class="err" id="cp-err"></div>' +
      '<div class="verse">"Y las repetirás a tus hijos…" — Deut. 6:7</div>' +
      '</div>';
    document.body.appendChild(g);

    var mail = g.querySelector("#cp-mail");
    var pass = g.querySelector("#cp-pass");
    var err = g.querySelector("#cp-err");
    var btn = g.querySelector("#cp-enter");

    function tryEnter() {
      var m = (mail.value || "").trim().toLowerCase();
      var p = pass.value || "";
      var mailOk = CONFIG.correos.length === 0 ||
        CONFIG.correos.map(function (x) { return x.toLowerCase(); }).indexOf(m) !== -1;
      var passOk = p === CONFIG.clave;
      if (mailOk && passOk) {
        try {
          localStorage.setItem(KEY, JSON.stringify({ exp: Date.now() + CONFIG.recordarDias * 864e5 }));
        } catch (e) {}
        g.parentNode && g.parentNode.removeChild(g);
      } else if (!mailOk) {
        err.textContent = "Ese correo no tiene acceso.";
      } else {
        err.textContent = "Clave incorrecta.";
      }
    }
    btn.addEventListener("click", tryEnter);
    pass.addEventListener("keydown", function (e) { if (e.key === "Enter") tryEnter(); });
    mail.addEventListener("keydown", function (e) { if (e.key === "Enter") pass.focus(); });
    setTimeout(function () { mail.focus(); }, 100);
  }

  if (document.body) build();
  else document.addEventListener("DOMContentLoaded", build);
})();
