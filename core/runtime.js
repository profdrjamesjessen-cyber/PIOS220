/* ======================================
   PI220OS RUNTIME ENGINE (SAFE ROLLBACK)
   PASSIVE DIAGNOSTIC ONLY
====================================== */

const Runtime = {
  checks: [],
  ready: false
};

// =============================
// SAFE PRINT
// =============================
function print(msg){
  if(window.PI220_console?.print){
    window.PI220_console.print("[RUNTIME] " + msg);
  } else {
    console.log("[RUNTIME]", msg);
  }
}

// =============================
// BASIC CHECK FUNCTION (NO SIDE EFFECTS)
// =============================
function check(name, condition){
  const status = condition ? "OK" : "WARN";
  Runtime.checks.push({ name, status });
  print(`${status} - ${name}`);
  return condition;
}

// =============================
// MANUAL DIAGNOSTIC ONLY (NO AUTO RUN)
// =============================
function runDiagnostics(){

  print("=== RUNTIME DIAGNOSTIC MANUAL RUN ===");

  check("Console Service", !!window.PI220_console);
  check("Command Engine", typeof window.executeCommand === "function");
  check("Debugger", !!window.PI220_debugger);

  check("Console Input", !!document.getElementById("consoleInput"));
  check("Bottom Panel", !!document.getElementById("bottomPanel"));
  check("Desktop", !!document.getElementById("desktop"));

  Runtime.ready = true;

  print("DIAGNOSTIC COMPLETE");
}

// =============================
// HEARTBEAT (OPTIONAL SAFE MONITOR)
// =============================
function heartbeat(){

  setInterval(() => {

    if(!Runtime.ready) return;

    const coreOk =
      !!window.PI220_console &&
      typeof window.executeCommand === "function";

    if(!coreOk){
      print("WARNING: CORE SYSTEM DEGRADATION");
    }

  }, 5000);
}

// =============================
// SAFE EXPORT (NO AUTO EXECUTION)
// =============================
window.PI220_runtime = {
  runDiagnostics,
  heartbeat,
  report: () => Runtime.checks
};

console.log("[PI220] Runtime loaded (SAFE MODE)");
