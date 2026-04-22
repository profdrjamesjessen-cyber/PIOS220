/* ======================================
   PI220OS COMMAND ENGINE (CORE v2)
====================================== */

function print(msg){
  if(window.PI220_console?.print){
    window.PI220_console.print(msg);
  } else {
    console.warn("[PI220] Console not ready:", msg);
  }
}

// =============================
// COMMAND HELP DISPLAY (UPGRADED)
// =============================
function showHelp(){

  print("================================");
  print("PI220OS COMMAND SYSTEM");
  print("================================");

  print("");
  print("SYSTEM:");
  print("/help /clear /reset /debugger /runtime /exit");

  print("");
  print("NAVIGATION:");
  print("/home /projects /contact /about");

  print("");
  print("AUTH:");
  print("/login /logout");

  print("");
  print("PLUGINS:");
  print("/pctm500 /pctm5000 /pctm10000x /pceep");

  print("");
  print("DEBUG:");
  print("/debugger /runtime");

  print("================================");
}

// =============================
// COMMAND REGISTRY
// =============================
const CommandRegistry = {

  // ================= SYSTEM =================
  "/help": showHelp,

  "/clear": () => {
    const terminal = document.getElementById("bottomPanel");
    if(terminal) terminal.innerHTML = "";
  },

  "/reset": () => {
    print("SYSTEM RESET INITIATED...");
    location.reload();
  },

  // ================= NAVIGATION =================
  "/home": () => {
    print("Loading HOME...");
    if(window.loadModule) window.loadModule("HOME");
    else print("[WARN] Module system not loaded");
  },

  "/projects": () => {
    print("Loading PROJECTS...");
    if(window.loadModule) window.loadModule("PROJECTS");
    else print("[WARN] Module system not loaded");
  },

  "/contact": () => {
    print("Loading CONTACT...");
    if(window.loadModule) window.loadModule("CONTACT");
    else print("[WARN] Module system not loaded");
  },

  "/about": () => {
    print("Loading ABOUT...");
    if(window.loadModule) window.loadModule("ABOUT");
    else print("[WARN] Module system not loaded");
  },

  // ================= AUTH (NEW) =================
  "/login": () => {
    print("Opening AUTH...");
    if(window.loadModule) window.loadModule("AUTH");
    else print("[WARN] Module system not loaded");
  },

  "/logout": () => {
    print("Logging out...");

    if(window.PI220_AUTH?.logout){
      window.PI220_AUTH.logout();
    } else {
      print("[WARN] Auth system not ready");
    }

    if(window.setUIState){
      window.setUIState("HOME");
    }
  },

  // ================= DEBUG =================
  "/debugger": () => {
    print("Launching SYSTEM DEBUGGER...");

    if(window.PI220_debugger){
      window.PI220_debugger.run();
    } else {
      print("[WARN] Debugger not loaded");
    }
  },

  // ================= PLUGINS =================
  "/pctm500": () => {
    print("Opening PCTM 500...");
    if(window.loadPlugin) window.loadPlugin("PCTM500");
    else print("[WARN] Plugin system not ready");
  },

  "/pctm5000": () => {
    print("Opening PCTM 5000...");
    if(window.loadPlugin) window.loadPlugin("PCTM5000");
    else print("[WARN] Plugin system not ready");
  },

  "/pctm10000x": () => {
    print("Opening PCTM 10000-X...");
    if(window.loadPlugin) window.loadPlugin("PCTM10000-X");
    else print("[WARN] Plugin system not ready");
  },

  "/pceep": () => {
    print("Opening PCEEP...");
    if(window.loadPlugin) window.loadPlugin("PCEEP");
    else print("[WARN] Plugin system not ready");
  },

  // ================= RUNTIME =================
  "/runtime": () => {
    print("Running SAFE runtime diagnostics...");

    if(window.PI220_runtime){
      window.PI220_runtime.runDiagnostics();
    } else {
      print("[WARN] Runtime not loaded");
    }
  },

  // ================= EXIT =================
  "/exit": () => {
    print("Exiting current context...");

    const state = window.PI220_UI_STATE?.current;

    if(state === "PLUGIN"){

      if(window.clearPluginView){
        window.clearPluginView();
      }

      if(window.resetUIState){
        window.resetUIState();
      } else if(window.setUIState){
        window.setUIState("HOME");
      }

      print("Plugin closed → HOME restored");
      return;
    }

    if(state === "MODULE"){

      if(window.setUIState){
        window.setUIState("HOME");
      }

      print("Module closed → HOME restored");
      return;
    }

    print("Nothing to exit.");
  }

}; // ================= END REGISTRY =================


// =============================
// EXECUTION ENGINE
// =============================
function executeCommand(cmd){

  const command = cmd.trim().toLowerCase();

  if(CommandRegistry[command]){
    try {
      CommandRegistry[command]();
    } catch(err){
      console.error("[PI220] Command error:", err);
      print("[ERROR] Command failed: " + command);
    }
  } else {
    print("Unknown command: " + cmd);
  }
}

// =============================
// GLOBAL EXPORT
// =============================
window.executeCommand = executeCommand;

console.log("[PI220] Command engine v2 loaded");