/* ======================================
   PI220OS STATE ENGINE (UI CONTROL LAYER)
====================================== */

// =============================
// GLOBAL STATE OBJECT
// =============================
window.PI220_UI_STATE = {
  current: "HOME",
  activePlugin: null
};

// =============================
// UI STATE CONTROLLER
// =============================
window.setUIState = function(state, data = null){

  // update state
  window.PI220_UI_STATE.current = state;
  window.PI220_UI_STATE.activePlugin = data;

  const top = document.getElementById("topPanel");

  if(!top){
    console.warn("[PI220] topPanel missing");
    return;
  }

  // =============================
  // STATE HANDLER
  // =============================
  switch(state){

    case "HOME":
      if(window.loadModule){
        window.loadModule("HOME");
      }
      break;

    case "MODULE":
      // module system already handled externally
      break;

    case "PLUGIN":
      // plugin system handles rendering directly
      break;

    case "EMPTY":
      top.innerHTML = "";
      break;

    default:
      console.warn("[PI220 STATE] Unknown state:", state);
      break;
  }

  console.log("[PI220 STATE]", {
    state,
    activePlugin: window.PI220_UI_STATE.activePlugin
  });
};

// =============================
// SAFE RESET STATE (OPTIONAL USE)
// =============================
window.resetUIState = function(){

  window.PI220_UI_STATE.current = "HOME";
  window.PI220_UI_STATE.activePlugin = null;

  const top = document.getElementById("topPanel");

  if(top && window.loadModule){
    window.loadModule("HOME");
  }

  console.log("[PI220 STATE] Reset to HOME");
};

console.log("[PI220] State engine initialized");