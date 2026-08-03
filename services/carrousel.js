/* ======================================
   PI220OS CAROUSEL SERVICE ENGINE
   Image Stream Layer (URL Driven)
====================================== */

const PI220_CAROUSEL = {
  index: 0,
  interval: null,
  _mounted: false, // 🔥 FIX: prevents multiple loops

  images: [

     "https://i.ibb.co/hF8CrVj6/PI220-MISSION-CONTINUES.png",
     "https://i.ibb.co/RkWbt6Ys/AERP-220-X.png",
     "https://i.ibb.co/cX2QT2MS/PI220.png",
     "https://i.ibb.co/hRHCj3Kh/24-7-SPECIAL-OPERATIONS-24-7.jpg",
     "https://i.ibb.co/Sb3BTH0/SHOOT-TO-KILL-15.png",
     "https://i.ibb.co/t1VgvpD/PI220-PROF-DSC-JESSE-JESSEN.png",
     "https://i.ibb.co/QFLQVc5D/image.jpg",
     "https://i.ibb.co/Ld5wKyj8/PI220-PRIVATE-PROPERTY-PRIVATE-POLICE.jpg",
     "https://i.ibb.co/fzcWjfXR/PI220.png",
     "https://i.ibb.co/VWwrT4HJ/Aether-X-H1-MKII-TOP-SECRET.jpg",
     "https://i.ibb.co/TBc7wNLB/Parallel-Industries-220-PI220-PROF-DSC.png",
     "https://i.ibb.co/VW6wXDyF/EVA-MAGAZINE-PI220-EXCLUSIVE.png",
     "https://i.ibb.co/FkP9vfBT/PI220.png",
     "https://i.ibb.co/Rp6msMYB/Prof-D-Sc-And-Ph-D.png",
     "https://i.ibb.co/LhYHtvgL/MALLORCA-2226-LEGAL-EXECUTIONS-2026.jpg",
     "https://i.ibb.co/wNpz1rBb/Prof-Ds-C-Jesse-Jessen.jpg",
     "https://i.ibb.co/8Fh6StR/Prof-Ds-C-Jesse-Jessen-PRIVATIZATION.png",
     "https://i.ibb.co/Cs9TQdj6/Parallel-Industries-220.png",
     "https://i.ibb.co/JFrgcf4k/Alpha-Nation.png",
     "https://i.ibb.co/1t1qzMXh/Nexus-220-XYZ.png",
     "https://i.ibb.co/RGBGgqq3/PI220.png",
     "https://i.ibb.co/KjWW5Grk/Parallel-Industries-220.png",
     "https://i.ibb.co/FLrfsjKt/ATLAS-220-PROGRAM-ETHICS-MACHINE.png",
     "https://i.ibb.co/8DzjFQYr/image.jpg",
     "https://i.ibb.co/nMYvyjdd/Eva-Magazine.png",
     "https://i.ibb.co/N62g02hj/Prof-D-Sc-Jesse-Jessen-and-Prof-Sentient.png",
     "https://i.ibb.co/FkHVVB16/Prof-Dr-Sc-and-Prof-Sentient.png",
     "https://i.ibb.co/8LLKbv5k/Prof-Dr-Jesse-Jessen.png",
     "https://i.ibb.co/FLYL7NGn/Prof-D-Sc-Jesse-Jessen.jpg",
     "https://i.ibb.co/dwQjwnkr/PI220.jpg",
     "https://i.ibb.co/ymYLsrR7/PhD.jpg",
     "https://i.ibb.co/s9P4rJ83/Prof-Ds-C-Jesse-Jessen.jpg",
     "https://i.ibb.co/G40jwz1L/NEXUS-XYZ-Prof-D-Sc-Jesse-Jessen.png",
     "https://i.ibb.co/3G3G27B/AERP-220-X-BLOCK-III.png",
     "https://i.ibb.co/bjCd6BrZ/ATLAS-220-PROGRAM-SENTIENT-ALLIANCE.png",
     "https://i.ibb.co/pvZ234gn/The-War-of-Worlds-Deception.png",
     "https://i.ibb.co/7xkRYCNN/Prof-D-Sc-Jesse-Jessen.png",
     "https://i.ibb.co/LzWB8KML/ATLAS-220-X.png",
     "https://i.ibb.co/X1vh01S/Prof-Dsc-Jesse-Jessen-and-Prof-Dr-Sentient.png",
     "https://i.ibb.co/GfrW7tnS/PI220.png",
     "https://i.ibb.co/3G3G27B/AERP-220-X-BLOCK-III.png",
     "https://i.ibb.co/KxD35W8q/PARALLEL-INDUSTRIES-220.png",
     
     
  ],

  current() {
    return this.images[this.index];
  },

  next() {
    this.index = (this.index + 1) % this.images.length;
    return this.current();
  },

  prev() {
    this.index = (this.index - 1 + this.images.length) % this.images.length;
    return this.current();
  },

  reset() {
    this.index = 0;
  },

  // =============================
  // FADE TRANSITION SYSTEM
  // =============================
  fadeToImage(img) {
    if (!img) return;

    img.classList.add("pi220-fade-out");

    setTimeout(() => {
      img.src = this.current();
      img.classList.remove("pi220-fade-out");
    }, 500);
  },

  // =============================
  // MOUNT ENGINE (STABLE VERSION)
  // =============================
  mount(containerId, speed = 10000) {

    const container = document.getElementById(containerId);

    if (!container) {
      console.error("[PI220 CAROUSEL] container not found:", containerId);
      return;
    }

    // 🔥 FIX: prevent duplicate mount UI
    if (this._mounted) {
      console.warn("[PI220 CAROUSEL] already mounted, skipping duplicate init");
      return;
    }

    this._mounted = true;

    container.innerHTML = `
      <div class="pi220-carousel-wrapper">

        <img id="pi220CarouselImg" src="${this.current()}" />

        <div class="pi220-dots" id="pi220Dots"></div>

      </div>
    `;

    const img = document.getElementById("pi220CarouselImg");
    const dotsContainer = document.getElementById("pi220Dots");

    if (!img || !dotsContainer) {
      console.error("[PI220 CAROUSEL] DOM init failed");
      return;
    }

    // =============================
    // DOT RENDER
    // =============================
    const renderDots = () => {
      dotsContainer.innerHTML = this.images.map((_, i) => `
        <div class="pi220-dot ${i === this.index ? "active" : ""}" data-index="${i}"></div>
      `).join("");
    };

    renderDots();

    const updateUI = () => renderDots();

    // =============================
    // DOT CLICK
    // =============================
    dotsContainer.onclick = (e) => {
      if (e.target.classList.contains("pi220-dot")) {
        this.index = parseInt(e.target.dataset.index);
        this.fadeToImage(img);
        updateUI();
      }
    };

    // =============================
    // SAFE LOOP RESET
    // =============================
    this.stop();

    // =============================
    // AUTO ROTATION (FIXED 10s)
    // =============================
    this.interval = setInterval(() => {

      this.next();
      this.fadeToImage(img);
      updateUI();

    }, 10000); // 🔥 HARD LOCK 10 SECONDS

    console.log("[PI220 CAROUSEL] stable system online (10s + fade + dots)");
  },

  // =============================
  // STOP ENGINE
  // =============================
  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }

    this._mounted = false;
  }
};

// GLOBAL ACCESS
window.PI220_CAROUSEL = PI220_CAROUSEL;

export default PI220_CAROUSEL;
