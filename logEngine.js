/* ======================================
   PI220OS LOG ENGINE
   /ui/logEngine.js
   System Output Terminal Layer
====================================== */

const LogEngine = {
  terminal: null,
  ready: false
};

// =============================
// INIT LOG ENGINE
// =============================
export function initLogEngine(){

  LogEngine.terminal = document.getElementById("bottomPanel");

  if(!LogEngine.terminal){
    console.error("[LOG ENGINE] bottomPanel missing");
    return;
  }

  LogEngine.ready = true;

  console.log("[PI220 LOG] READY");
}

// =============================
// MAIN LOG FUNCTION
// =============================
export function logSystem(msg, type = "system"){

  if(!LogEngine.ready) return;

  const line = document.createElement("div");
  line.className = "log-line " + type;

  const prefix = getPrefix(type);

  line.textContent = prefix + msg;

  LogEngine.terminal.appendChild(line);
  LogEngine.terminal.scrollTop = LogEngine.terminal.scrollHeight;
}

// =============================
// TYPE PREFIX SYSTEM
// =============================
function getPrefix(type){

  switch(type){

    case "error":
      return "[ERROR] ";

    case "warn":
      return "[WARN] ";

    case "cmd":
      return "[CMD] ";

    case "system":
    default:
      return "[SYS] ";
  }
}

// =============================
// CLEAR LOG (OPTIONAL)
// =============================
export function clearLog(){
  if(LogEngine.terminal){
    LogEngine.terminal.innerHTML = "";
  }
}