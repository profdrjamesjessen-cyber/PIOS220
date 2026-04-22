/* ======================================
   PI220OS SYSTEM DEBUGGER (DIAGNOSTIC CORE v2)
====================================== */

function print(msg){
  if(window.PI220_console?.print){
    window.PI220_console.print(msg);
  } else {
    console.log("[DEBUG]", msg);
  }
}

// =============================
// SMART CHECK ENGINE
// =============================
function check(name, condition){

  // NOT IMPLEMENTED YET
  if(typeof condition === "undefined"){
    print("⏳ " + name + " : NOT LOADED");
    return 0;
  }

  // INSTALLED AND WORKING
  if(condition){
    print("✔ " + name + " : OK");
    return 1;
  }

  // INSTALLED BUT FAILING
  print("✖ " + name + " : FAIL");
  return 0;
}

// =============================
// MAIN DEBUG RUN
// =============================
function run(){

  print("=== PI220 SYSTEM DEBUGGER START ===");
  print("");

  let score = 0;
  let total = 0;

  // =============================
  // CORE SERVICES
  // =============================
  total++; score += check(
    "Console Service (PI220_console)",
    !!window.PI220_console
  );

  total++; score += check(
    "Command Engine (executeCommand)",
    typeof window.executeCommand === "function"
  );

  // =============================
  // DOM LAYER
  // =============================
  total++; score += check(
    "Console Input",
    document.getElementById("consoleInput")
  );

  total++; score += check(
    "Terminal Panel (bottomPanel)",
    document.getElementById("bottomPanel")
  );

  total++; score += check(
    "Desktop Layer",
    document.getElementById("desktop")
  );

  total++; score += check(
    "Top Panel",
    document.getElementById("topPanel")
  );

  // =============================
  // MODULE LAYER (OPTIONAL SYSTEMS)
  // =============================
  total++; score += check(
    "Menu System",
    window.initMenu
  );

  total++; score += check(
    "System Info Module",
    window.initSystemInfo
  );

  // =============================
  // FINAL REPORT
  // =============================
  print("");
  print("=== SYSTEM SCORE ===");
  print(score + " / " + total);

  if(score === total){
    print("SYSTEM STATUS: STABLE ✔");
  } 
  else if(score >= total * 0.7){
    print("SYSTEM STATUS: DEGRADED ⚠");
  } 
  else {
    print("SYSTEM STATUS: CRITICAL ❌");
  }

  print("");
  print("=== DEBUGGER END ===");
}

// =============================
// GLOBAL EXPORT
// =============================
window.PI220_debugger = { run };

console.log("[PI220] Debugger module loaded");