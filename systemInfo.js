/* ======================================
   PI220OS SYSTEM INFO MODULE
   Safe Environment Detection Layer
====================================== */

import { logSystem } from "../ui/logEngine.js";

// =============================
// SYSTEM INFO STATE
// =============================
export const SystemInfo = {
  userAgent: null,
  platform: null,
  language: null,
  timezone: null,
  screen: null
};

// =============================
// INIT SYSTEM INFO
// =============================
export function initSystemInfo(){

  SystemInfo.userAgent = navigator.userAgent;
  SystemInfo.platform = navigator.platform;
  SystemInfo.language = navigator.language;
  SystemInfo.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  SystemInfo.screen = {
    width: window.screen.width,
    height: window.screen.height
  };

  // HEADER
  logSystem("SYSTEM INFO COLLECTED", "system");

  // ORANGE / YELLOW CLASSIFIED OUTPUTS
  logSystem("UA: " + SystemInfo.userAgent, "system-info");
  logSystem("PLATFORM: " + SystemInfo.platform, "system-info-alt");
  logSystem("LANG: " + SystemInfo.language, "system-info");
  logSystem("TIMEZONE: " + SystemInfo.timezone, "system-info-alt");

  logSystem(
    `SCREEN: ${SystemInfo.screen.width}x${SystemInfo.screen.height}`,
    "system-info"
  );

}