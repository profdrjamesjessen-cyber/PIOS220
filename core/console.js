/* ======================================
   PI220OS CONSOLE SERVICE (STABLE)
   UI INPUT + OUTPUT + COMMAND BRIDGE
====================================== */

export function initConsole(){

  const input = document.getElementById("consoleInput");
  const terminal = document.getElementById("bottomPanel");

  // =============================
  // SAFETY CHECK
  // =============================
  if(!input || !terminal){
    console.error("[PI220] Console DOM missing");
    return;
  }

  // =============================
  // OUTPUT ENGINE
  // =============================
  function print(msg){
    const line = document.createElement("div");
    line.textContent = msg;
    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
  }

  // =============================
  // EXPOSE GLOBAL CONSOLE API
  // =============================
  window.PI220_console = {
    print
  };

  // =============================
  // INPUT HANDLER
  // =============================
  input.addEventListener("keydown", (e) => {

    if(e.key === "Enter"){

      const cmd = input.value.trim();
      input.value = "";

      if(!cmd) return;

      // echo command
      print("> " + cmd);

      // =============================
      // COMMAND BRIDGE
      // =============================
      if(typeof window.executeCommand === "function"){
        try {
          window.executeCommand(cmd);
        } catch(err){
          console.error("[PI220] Command execution error", err);
          print("[ERROR] Command execution failed");
        }
      } else {
        print("[ERROR] Command engine not loaded");
        console.warn("[PI220] executeCommand not found");
      }
    }
  });

  console.log("[PI220] Console initialized");
}
