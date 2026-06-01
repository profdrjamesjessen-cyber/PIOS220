/* ======================================
   PI220OS BOOTSTRAP (FINAL STABLE)
====================================== */

import "./plugin.js";

import { initLogEngine, logSystem } from "../ui/logEngine.js";
import { bootSystem } from "./system.js";

// =============================
function wait(ms){
  return new Promise(r => setTimeout(r, ms));
}

// =============================
// AUTHOR VERIFICATION
// =============================
async function verifyAuthor(){

  const AUTHOR = Object.freeze({
    name: "PROF DR JESSE JESSEN",
    organization: "PARALLEL INDUSTRIES 220",
    year: "2026"
  });

  try {

    const today = new Date().toISOString().slice(0, 10);

    const source =
      `${AUTHOR.name}|${AUTHOR.organization}|${AUTHOR.year}|${today}`;

    const encoder = new TextEncoder();

    const hashBuffer = await crypto.subtle.digest(
      "SHA-256",
      encoder.encode(source)
    );

    const dailyHash = Array.from(
      new Uint8Array(hashBuffer)
    )
    .map(b => b.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();

    console.log(`
======================================
 PI220 AUTHOR VERIFICATION
======================================
 AUTHOR      : ${AUTHOR.name}
 ORGANIZATION: ${AUTHOR.organization}
 YEAR        : ${AUTHOR.year}
 DATE        : ${today}
 STATUS      : VERIFIED

 DAILY HASH
 --------------------------------------
 ${dailyHash}
======================================
`);

    logSystem(`AUTHOR SIGNATURE VERIFIED : ${AUTHOR.name}`);
    logSystem(`PI220 DAILY HASH : ${dailyHash.substring(0, 32)}...`);

    window.PI220_AUTHOR = AUTHOR;
    window.PI220_DAILY_HASH = dailyHash;

  } catch(error) {

    console.error("[PI220] Author verification failed", error);

    logSystem("AUTHOR VERIFICATION FAILED");

  }
}

// =============================
async function runBootSequence(){

  logSystem("WELCOME TO PARALLEL INDUSTRIES 220. CORPORATION. ALL RIGHTS RESERVED.");
  await wait(600);

  logSystem("WEBSITE DESIGNED AND UNDER CONSTRUCTION BY PROF DR JESSE JESSEN. 2026.");
  await wait(600);

  logSystem("391 SERVERS NODE : ACTIVE | STATUS = ONLINE");
  await wait(800);

  logSystem("ALIEN SYNTAX : MATRIX INSTALLED | STATUS = ACTIVE");
  await wait(600);

  logSystem("SYSTEM SCAN COMPLETED | SYSTEM SECURE");
  await wait(900);

  logSystem("SUBSIDIARY NODE TEST : ONLINE");
  await wait(500);

  logSystem("DOWNLOADING DEPENDENCIES AND PACKAGES | STATUS = INSTALLED");
  await wait(2400);

  logSystem("LOADING KERNEL...", "system");
  await wait(700);

  logSystem("INITIALIZING UI...", "system");
  await wait(600);

  logSystem("SYSTEM READY", "system");
  await wait(400);

  logSystem("HANDING CONTROL TO PI220 OPERATIVE BOOT SYSTEM", "system");
}

// =============================
async function loadModules(){

  try {

    if(!window.registerModule) return;

    await import("../modules/home.js");
    await import("../modules/projects.js");
    await import("../modules/about.js");
    await import("../modules/contact.js");
    await import("../modules/auth.js");

    // =============================
    // SERVICES (CRITICAL FIX)
    // =============================
    await import("../services/carrousel.js");

    console.log("[PI220] Modules loaded");

  } catch (e) {

    console.error("[PI220] Module loading failed", e);

  }
}

// =============================
async function loadPlugins(){

  try {

    if(!window.registerPlugin) return;

    await import("../plugins/pctm500.js");
    await import("../plugins/pctm5000.js");
    await import("../plugins/pctm10000x.js");
    await import("../plugins/pceep.js");

    console.log("[PI220] Plugins loaded");

  } catch (e) {

    console.error("[PI220] Plugin loading failed", e);

  }
}

// =============================
window.addEventListener("DOMContentLoaded", async () => {

  console.log("[PI220] Bootloader started");

  initLogEngine();

  // =============================
  // AUTHOR VERIFICATION
  // =============================
  await verifyAuthor();

  // =============================
  // SYSTEM BOOT
  // =============================
  await runBootSequence();

  // =============================
  // MODULES
  // =============================
  await loadModules();

  // =============================
  // CORE SYSTEM
  // =============================
  bootSystem();

  // =============================
  // PLUGINS
  // =============================
  await loadPlugins();

  // =============================
  // RUNTIME
  // =============================
  window.PI220_runtime?.start?.();
  window.PI220_runtime?.heartbeat?.();

  console.log("[PI220] System online");

});
