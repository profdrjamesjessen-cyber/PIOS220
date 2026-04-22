/* ======================================
   PI220OS MODULE SYSTEM (STABLE v1.1)
   SAFE PLUGIN REGISTRY + UI LOADER + INLINE SUPPORT
====================================== */

const ModuleSystem = {
  registry: {},
  active: null
};

// =============================
// INTERNAL SAFE DEBUG
// =============================
function debug(msg){
  console.log("[PI220 MODULE]", msg);
}

// =============================
// REGISTER MODULE (STATIC SYSTEM)
// =============================
function registerModule(name, renderFn){

  if(!name){
    console.error("[PI220] Module missing name");
    return;
  }

  if(typeof renderFn !== "function"){
    console.error("[PI220] Module invalid render function:", name);
    return;
  }

  const key = name.toUpperCase();

  if(ModuleSystem.registry[key]){
    console.warn("[PI220] Module already exists:", key);
  }

  ModuleSystem.registry[key] = renderFn;

  debug("Registered module: " + key);
}

// =============================
// LOAD MODULE (STATIC + INLINE SUPPORT)
// =============================
function loadModule(name){

  const top = document.getElementById("topPanel");

  if(!top){
    console.error("[PI220] topPanel not found in DOM");
    return;
  }

  if(!name){
    console.warn("[PI220] loadModule called without name");
    return;
  }

  // =============================
  // INLINE FUNCTION MODE (NEW FEATURE)
  // =============================
  if(typeof name === "function"){
    try {
      top.innerHTML = "";
      name(top);

      ModuleSystem.active = "INLINE_MODULE";
      debug("Inline module executed");

    } catch(err){
      console.error("[PI220] Inline module crash:", err);
    }
    return;
  }

  const key = name.toUpperCase();
  const module = ModuleSystem.registry[key];

  debug("Loading module: " + key);

  if(!module){
    top.innerHTML = `
      <div class="module">
        <h2>MODULE NOT FOUND</h2>
        <p>${key}</p>
      </div>
    `;
    console.warn("[PI220] Missing module:", key);
    return;
  }

  try {
    top.innerHTML = "";
    module(top);
    ModuleSystem.active = key;
    debug("Module active: " + key);

  } catch(err){
    console.error("[PI220] Module crash:", err);

    top.innerHTML = `
      <div class="module">
        <h2>MODULE ERROR</h2>
        <p>${key}</p>
      </div>
    `;
  }
}

// =============================
// LIST MODULES (DEBUG TOOL)
// =============================
function listModules(){
  console.log("[PI220] Registered Modules:", ModuleSystem.registry);
  return ModuleSystem.registry;
}

// =============================
// BOOT HOOK
// =============================
function bootModules(){
  debug("Module system initialized");
  debug("Modules loaded: " + Object.keys(ModuleSystem.registry).length);
}

// =============================
// GLOBAL EXPORT (CRITICAL)
// =============================
window.PI220_ModuleSystem = ModuleSystem;
window.registerModule = registerModule;
window.loadModule = loadModule;
window.bootModules = bootModules;
window.listModules = listModules;

console.log("[PI220] Module system loaded successfully");
