/* ======================================
   PI220OS PLUGIN KERNEL (CLEAN REBUILD)
====================================== */

const PluginRegistry = new Map();

// =============================
// REGISTER PLUGIN (USED BY /plugins/*)
// =============================
function registerPlugin(id, mountFn){

  if(!id || typeof mountFn !== "function"){
    console.error("[PI220 PLUGIN] Invalid registration:", id);
    return;
  }

  if(PluginRegistry.has(id)){
    console.warn("[PI220 PLUGIN] Overwriting plugin:", id);
  }

  PluginRegistry.set(id, mountFn);

  console.log("[PI220 PLUGIN] Registered:", id);
}

// =============================
// LOAD PLUGIN INTO TOP PANEL
// =============================
function loadPlugin(id){

  const plugin = PluginRegistry.get(id);

  if(!plugin){
    console.warn("[PI220 PLUGIN] Not found:", id);
    return;
  }

  const top = document.getElementById("topPanel");

  if(!top){
    console.error("[PI220 PLUGIN] topPanel missing in DOM");
    return;
  }

  try {
    plugin(top);
    console.log("[PI220 PLUGIN] Loaded:", id);
  } catch (err){
    console.error("[PI220 PLUGIN] Runtime error:", id, err);
  }
}

// =============================
// CLEAR PLUGIN VIEW (FOR /exit LATER)
// =============================
function clearPluginView(){
  const top = document.getElementById("topPanel");

  if(top){
    top.innerHTML = "";
    console.log("[PI220 PLUGIN] View cleared");
  }
}

// =============================
// DEBUG HELPERS
// =============================
function listPlugins(){
  console.log("[PI220 PLUGIN] Registered plugins:");
  console.log([...PluginRegistry.keys()]);
}

// =============================
// GLOBAL EXPORT (CRITICAL FOR PLUGINS)
// =============================
window.registerPlugin = registerPlugin;
window.loadPlugin = loadPlugin;
window.clearPluginView = clearPluginView;

window.PI220_Plugins = {
  list: listPlugins,
  registry: PluginRegistry
};

console.log("[PI220] Plugin kernel initialized");
