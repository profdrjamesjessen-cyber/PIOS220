/* ======================================
   PI220OS BOOTUP SEQUENCE
   /core/bootup.js
   Old PC Style Startup Simulation
====================================== */

import { logSystem } from "../ui/logEngine.js";

// =============================
// BOOT STATE
// =============================
let bootDone = false;

// =============================
// MAIN BOOT FUNCTION
// =============================
export async function runBootSequence(){

  logSystem("POWER ON", "system");
  await wait(800);

  logSystem("BIOS CHECK... OK", "system");
  await wait(800);

  logSystem("MEMORY TEST: 1024MB OK", "system");
  await wait(600);

  logSystem("DETECTING HARDWARE...", "system");
  await wait(1000);

  logSystem("CPU: PI220 CORE EMULATION", "system");
  await wait(600);

  logSystem("LOADING KERNEL MODULES...", "system");
  await wait(1000);

  logSystem("LOADING UI LAYER...", "system");
  await wait(800);

  logSystem("STARTING SYSTEM SERVICES...", "system");
  await wait(800);

  logSystem("CHECKING SECURITY LAYER...", "system");
  await wait(600);

  logSystem("ALL SYSTEMS READY", "system");

  await wait(500);

  logSystem("HANDING CONTROL TO PI220OS", "system");

  bootDone = true;

  // trigger real system boot
  window.dispatchEvent(new Event("PI220_BOOT_COMPLETE"));
}

// =============================
// UTILITY WAIT FUNCTION
// =============================
function wait(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

// =============================
// BOOT STATUS
// =============================
export function isBootComplete(){
  return bootDone;
}