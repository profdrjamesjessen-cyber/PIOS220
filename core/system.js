/* ======================================
   PI220OS SYSTEM CORE (ROLLBACK SAFE)
====================================== */

import { initClock } from "./clock.js";
import { initMenu } from "./menu.js";
import { initSystemInfo } from "./systemInfo.js";
import { initConsole } from "./console.js";
import { logSystem } from "../ui/logEngine.js";

import "./command.js";
import "./debugger.js";
import "./runtime.js";
import "./plugin.js";

const PI220 = {
  initialized: false,
  booted: false,
  version: "ROLLBACK-STABLE"
};

// =============================
// MENU CLICK BINDING LAYER
// =============================
function bindMenuClicks(){

  const menu = document.getElementById("menuDrop");

  if(!menu){
    console.warn("[PI220] menuDrop not found");
    return;
  }

  menu.addEventListener("click", (e) => {

    const item = e.target;
    if(!item.classList.contains("menuItem")) return;

    const text = item.textContent.trim().toUpperCase();

    console.log("[PI220 MENU CLICK]", text);

    // =============================
    // NAVIGATION
    // =============================
    switch(text){

      case "HOME":
        window.loadModule?.("HOME");
        break;

      case "PROJECTS":
        window.loadModule?.("PROJECTS");
        break;

      case "ABOUT":
        window.loadModule?.("ABOUT");
        break;

      case "CONTACT":
        window.loadModule?.("CONTACT");
        break;

      // =============================
      // AUTH FIX (CRITICAL)
      // =============================
      case "LOG-IN":
      case "SIGN-UP":
        if(window.loadModule){
          console.log("[PI220] Loading AUTH module...");
          window.loadModule("AUTH");
        } else {
          console.warn("[PI220] Module system not ready (AUTH)");
        }
        break;

      // =============================
      // PLUGINS
      // =============================
      case "PCTM 10000-X":
        window.loadPlugin?.("PCTM10000-X");
        break;

      case "PCTM 5000":
        window.loadPlugin?.("PCTM5000");
        break;

      case "PCTM 500":
        window.loadPlugin?.("PCTM500");
        break;

      case "PCEEP":
        window.loadPlugin?.("PCEEP");
        break;

      default:
        console.warn("[PI220] No module mapped:", text);
    }

  });

  console.log("[PI220] Menu binding active");
}

// =============================
// BOOT SYSTEM
// =============================
export function bootSystem(){

  if(PI220.initialized){
    console.warn("[PI220] Already initialized");
    return;
  }

  PI220.initialized = true;

  console.log("[PI220] Kernel starting...");
  document.title = "PI220OS";

  // CORE INIT
  try { initMenu(); logSystem("MENU READY","system"); }
  catch(e){ console.error("[PI220] menu fail", e); }

  try { initConsole(); logSystem("CONSOLE READY","system"); }
  catch(e){ console.error("[PI220] console fail", e); }

  try { initSystemInfo(); logSystem("SYSTEM INFO READY","system"); }
  catch(e){ console.error("[PI220] sysinfo fail", e); }

  try { logSystem("SYSTEM ONLINE","system"); }
  catch(e){ console.error("[PI220] logSystem fail", e); }

  // MENU BIND
  try { bindMenuClicks(); }
  catch(e){ console.error("[PI220] menu bind fail", e); }

  // AUTO HOME
  try {
    window.loadModule?.("HOME");
  } catch(e){
    console.error("[PI220] HOME boot fail", e);
  }

  // PLUGINS CHECK
  try {
    console.log("[PI220] Plugin system:", !!window.PI220_Plugins);
  } catch(e){
    console.error(e);
  }

  // UI MODE
  window.setUIMode?.("NORMAL");

  // CLOCK
  try {
    initClock();
  } catch(e){
    console.error("[PI220] clock fail", e);
  }

  PI220.booted = true;

  console.log("[PI220] SYSTEM READY");
}

export default PI220;
