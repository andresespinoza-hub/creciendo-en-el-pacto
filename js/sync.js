// ═══════════════════════════════════════════════════════════
// CRECIENDO EN EL PACTO — Sincronización con la nube (cliente)
//
// Hace que lo que escriba cualquiera (mamá o papá, en cualquier
// dispositivo) quede guardado "para todos":
//   • Al abrir la app  → sube lo local y baja lo de la nube.
//   • Al guardar datos → empuja los cambios a la nube (con freno).
//   • Al volver a la pestaña → empuja por si quedó algo.
//
// Si la nube no está configurada o no hay internet, NO pasa nada:
// la app sigue funcionando con el almacenamiento del dispositivo.
// ═══════════════════════════════════════════════════════════

(function () {
  var EP = "/api/state";
  // claves de datos que se sincronizan (NO el acceso/cortina)
  var MAP = { logs: "cp_logs", prog: "cp_prog", port: "cp_port", rn: "cp_rn" };

  var rawSet = localStorage.setItem.bind(localStorage);
  var pushTimer = null, syncing = false, everOK = false;

  function readLocal() {
    var d = {};
    Object.keys(MAP).forEach(function (k) {
      try {
        var v = localStorage.getItem(MAP[k]);
        if (v != null) d[k] = JSON.parse(v);
      } catch (e) {}
    });
    return d;
  }

  function writeLocal(d) {
    var changed = false;
    Object.keys(MAP).forEach(function (k) {
      if (d[k] === undefined) return;
      var s = JSON.stringify(d[k]);
      if (localStorage.getItem(MAP[k]) !== s) {
        rawSet(MAP[k], s);          // escritura "cruda": no vuelve a disparar push
        changed = true;
      }
    });
    return changed;
  }

  function toast(msg) {
    try {
      var t = document.getElementById("toast");
      if (!t) return;
      t.textContent = msg;
      t.classList.add("show");
      setTimeout(function () { t.classList.remove("show"); }, 2600);
    } catch (e) {}
  }

  // Recarga una sola vez por sesión, para reflejar datos nuevos sin bucles.
  function refreshOnce() {
    try {
      if (sessionStorage.getItem("cp_sync_reloaded")) return;
      sessionStorage.setItem("cp_sync_reloaded", "1");
      location.reload();
    } catch (e) {}
  }

  // Sube lo local + baja lo fusionado de la nube (en una sola llamada).
  function sync(opts) {
    opts = opts || {};
    if (syncing) return;
    syncing = true;
    var data = readLocal();
    fetch(EP, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: data })
    })
      .then(function (r) {
        if (!r.ok) throw new Error("status " + r.status);
        return r.json();
      })
      .then(function (j) {
        syncing = false;
        var changed = writeLocal(j && j.data ? j.data : {});
        if (!everOK) { everOK = true; toast("☁️ Conectado a la nube — datos compartidos"); }
        if (changed && opts.reloadIfChanged) refreshOnce();
      })
      .catch(function () {
        syncing = false;   // silencioso: seguimos con localStorage
      });
  }

  function schedulePush() {
    if (pushTimer) clearTimeout(pushTimer);
    pushTimer = setTimeout(function () { pushTimer = null; sync({}); }, 1500);
  }

  // Interceptar las escrituras de la app a localStorage (solo claves de datos).
  localStorage.setItem = function (k, v) {
    rawSet(k, v);
    if (typeof k === "string" && /^cp_(logs|prog|port|rn)$/.test(k)) schedulePush();
  };

  // Al abrir: sincronizar (y recargar una vez si la nube traía algo nuevo).
  function start() { sync({ reloadIfChanged: true }); }
  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(start, 400);
  } else {
    document.addEventListener("DOMContentLoaded", function () { setTimeout(start, 400); });
  }

  // Al volver a la pestaña: empujar lo pendiente (sin recargar, para no
  // interrumpir si está escribiendo el informe).
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") schedulePush();
  });

  // Por si se quiere forzar manualmente desde la consola.
  window.cpSync = function () { sync({}); };
})();
