/* ======================================
   PI220OS MENU SYSTEM
   /core/menu.js
   Floating OS Navigation Layer
====================================== */

const Menu = {
  el: null,
  btn: null,
  initialized: false
};

// =============================
// INIT MENU SYSTEM
// =============================
export function initMenu(){

  Menu.btn = document.getElementById("logoBtn");
  Menu.el  = document.getElementById("menuDrop");

  if(!Menu.btn || !Menu.el){
    console.error("[MENU] Missing DOM elements");
    return;
  }

  bindToggle();
  bindOutsideClick();

  Menu.initialized = true;

  console.log("[PI220 MENU] READY");
}

// =============================
// TOGGLE BEHAVIOR
// =============================
function bindToggle(){

  Menu.btn.addEventListener("click", (e) => {
    e.stopPropagation();

    const open = Menu.el.style.display === "flex";
    Menu.el.style.display = open ? "none" : "flex";
  });
}

// =============================
// CLOSE ON OUTSIDE CLICK
// =============================
function bindOutsideClick(){

  document.addEventListener("click", () => {
    Menu.el.style.display = "none";
  });

  Menu.el.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

// =============================
// FUTURE: COMMAND HOOK SYSTEM
// =============================
export function onMenuSelect(callback){

  const items = Menu.el.querySelectorAll(".menuItem");

  items.forEach(item => {
    item.addEventListener("click", () => {
      callback(item.textContent.trim());
      Menu.el.style.display = "none";
    });
  });

}
