/* ======================================
   PI220OS CAROUSEL SERVICE ENGINE
   Image Stream Layer (URL Driven)
====================================== */

const PI220_CAROUSEL = {
  index: 0,
  interval: null,
  _mounted: false, // 🔥 FIX: prevents multiple loops

  images: [






    "https://i.ibb.co/wN44dLzX/Parallel-Industries-220.png",
    "https://i.ibb.co/fzGWZhtP/World-War-III-Legal-Executions.jpg",
    "https://i.ibb.co/TBfmyx8M/Eva-Magazine.png",
    "https://i.ibb.co/fz67QYXK/Good-Morning.jpg",
    "https://i.ibb.co/JF0m9ZCS/AERP-220-X.png",
    "https://i.ibb.co/pvXgKM8D/Prof-Dr-Jesse-Jessen-And-Ph-D-Eva.jpg",
    "https://i.ibb.co/zHsXt8zb/NEXUS-220-XYZ-PROF-DSC-JESSE-JESSEN.png",
    "https://i.ibb.co/s9cPHNHM/Prof-D-Sc-Jesse-Jessen.png",
    "https://i.ibb.co/0p6R92rr/STARFORCE-ALLIANCE.jpg",
    "https://i.ibb.co/ZDJD8BZ/AERP-220-X.png",
    "https://i.ibb.co/LzWB8KML/ATLAS-220-X.png",
    "https://i.ibb.co/kVbBSGyD/A-PI220-AVERAGE-DAY.png",
    "https://i.ibb.co/W4SczZFR/CONGRATULATIONS-PROF-DR-SENTIENT.png",
    "https://i.ibb.co/pqFmRJK/ONGOING-SIERRA.jpg",
    "https://i.ibb.co/b03sCZb/X-N1-Longitudinal-and-Vertical-Program.png",
    "https://i.ibb.co/rKjXSGFg/AERP-220-X-STARFORCE-ALLIANCE-PI220.png",
    "https://i.ibb.co/twMnYmh7/PI-GLOBE-EXECUTIVE-SUMMARY.png",
    "https://i.ibb.co/Y4YkD3vg/STARFORCE-ALLIANCE-ALPHA-NATION.png",
    "https://i.ibb.co/LFHrMQW/Prof-D-Sc-Jesse-Jessen.png",
    "https://i.ibb.co/vvMWwSkR/AERP-220-X-BLOCK-III.png",
    "https://i.ibb.co/FbrVyYfH/Parallel-Industries-220-CRYSTAL-BALL.png",
    "https://i.ibb.co/hz6LyxG/PROF-DR-SC-JESSE-JESSEN.jpg",
    "https://i.ibb.co/zWkw1hvF/Prof-Dr-Sc-Jesse-Jessen.png",
    "https://i.ibb.co/msfpHGf/AERP-220-PI-GLOBE-AERP-220-PI-PLATFORM.png",
    "https://i.ibb.co/Y4h9Dnv3/PROF-DR-SC-F1-PI220-FORD-PILOT.jpg",
    "https://i.ibb.co/ycFjGR1v/Prof-Dr-Sc-Jesse-Jessen-F1-AERP-220-X.png",
    "https://i.ibb.co/RGXkQG2X/Prof-Dr-Sc-Jesse-Jessen-F1-PI220-FORD-PILOT.jpg",
    "https://i.ibb.co/VccjxnS6/Prof-Dr-Jesse-Jessen.png",
    "https://i.ibb.co/jP2FJtxH/World-Cup-2026-Portfolio-Update.png",
    "https://i.ibb.co/LDQdZJRz/Prof-Dr-Sc-Jesse-Jessen.png",
    "https://i.ibb.co/xKp5PjVs/Prof-Dr-Jesse-Jessen-AERP-220.png",
    "https://i.ibb.co/mpM9NpP/World-Cup-Portfolio-2026-Update.png",
    "https://i.ibb.co/6RHJ6w6h/Prof-Dr-Jesse-Jessen-PI220.jpg",
    "https://i.ibb.co/wrLhCwbK/Prof-Dr-Jesse-Jessen.jpg",
    "https://i.ibb.co/nqYZPHYp/Master-Course-Prof-Dr-Jesse-Jessen.png",
    "https://i.ibb.co/HT3QNVb4/Prof-Dr-Jesse-Jessen.png",
    "https://i.ibb.co/8LfmbcCj/Prof-Dr-Jesse-Jessen.jpg",
    "https://i.ibb.co/d0DLpjD3/Prof-Dr-Jesse-Jessen-Master-Program.png",
    "https://i.ibb.co/KzDhVp9S/Death-Penalty.jpg",
    "https://i.ibb.co/Z1xdtBXh/391-Go-to-Hell-629.png",
    "https://i.ibb.co/XZCDSVHb/Prof-Dr-Kill-Her.jpg",
    "https://i.ibb.co/Jw59LzPB/Prof-Dr-Jesse-Jessen.jpg",
    "https://i.ibb.co/N5nn6yx/Prof-Dr-Jesse-Jessen-Aerostratum-Mark-III.png",
    "https://i.ibb.co/hFgBfF4g/ALPHA-391-VERTICAL-FLAG-629-OMEGA.png",
    "https://i.ibb.co/TqY0GB7j/Prof-Dr-Jesse-Jessen.jpg",
    "https://i.ibb.co/VWPzyBXC/Prof-Dr-Jesse-Jessen.jpg",
    "https://i.ibb.co/TMvNvT8L/Prof-Dr-Jesse-Jessen.jpg",
    "https://i.ibb.co/ynTkmnF3/Prof-Dr-Jesse-Jessen.jpg",
    "https://i.ibb.co/8DcVprdQ/Prof-Dr-Jesse-Jessen-VHX-200-TWIN.jpg",
    "https://i.ibb.co/j9FbkMhc/Prof-Dr-Jesse-Jessen.png",
    "https://i.ibb.co/QFwtnDFF/ALPHA-NATION.png",
    "https://i.ibb.co/qMPdSHVz/KICK-SCOOTER-VHX-220-X-BLOCK-I-PART-I.png",
    "https://i.ibb.co/8LMcyw4F/Prof-Dr-Jesse-Jessen-Aether-X-H1.png",
    "https://i.ibb.co/6J8VxCDg/Prof-Dr-Jesse-Jessen-Prof-Dr-Sylvia-Jessen.png",
    "https://i.ibb.co/67FhxcXM/ALPHA-NATION-PARALLEL-INDUSTRIES-220-PROF-DR-JESSE-JESSEN-ALPHA.jpg",
    "https://i.ibb.co/cXbYWX1v/SAME-DAY.png",
    "https://i.ibb.co/RpRPdY0r/Prof-Dr-Jesse-Jessen.jpg",
    "https://i.ibb.co/YBjG8ggQ/Prof-Dr-Jesse-Jessen-AETHER-X-H1-BLOCK-II.png",
    "https://i.ibb.co/pBL5jDqy/Prof-Dr-Jesse-Jessen-Parallel-Industries-220.png",
    "https://i.ibb.co/fGFMvTtV/PROF-DR-JESSE-JESSEN-PARALLEL-INDUSTRIES-220-LEGAL-REMEDIES.png",
    "https://i.ibb.co/Tx9RQthr/PARALLEL-INDUSTRIES-220-PIOS220.png",
    "https://i.ibb.co/xKZwCLFQ/PROF-DR-JESSE-JESSEN-PARALLEL-INDUSTRIES-220-LEGAL-REMEDIES-AND-ACTION.png",
    "https://i.ibb.co/PfcWxV1/PROF-DR-JESSE-JESSEN-PARALLEL-INDUSTRIES-220-LEGAL-REMEDIES-LEGAL-ACTION.png",
    "https://i.ibb.co/3yY4TRWb/PROF-DR-JESSE-JESSEN-PARALLEL-INDUSTRIES-220-ALL-LEGAL-REMEDIES-AND-ACTIONS.png",
    "https://i.ibb.co/8L1kWSXg/PROF-DR-JESSE-JESSEN-PARALLEL-INDUSTRIES-220-WORLD-WAR-III-KILL.png",
    "https://i.ibb.co/HDc1gY8W/Prof-Dr-Jesse-Jessen-AETHER-X-H1.png",
    "https://i.ibb.co/BKCJ2b2n/PROF-DR-JESSE-JESSEN-PARALLEL-INDUSTRIES-220-MEDAL-OF-HONOR.png",
    "https://i.ibb.co/jPHNSBKn/PROF-DR-JESSE-JESSEN-PARALLEL-INDUSTRIES-220-ALL-LEGAL-REMEDIES.png",
    "https://i.ibb.co/ZpqnDWNw/PROF-DR-JESSE-JESSEN-PARALLEL-INDUSTRIES-220-ALL-LEGAL-REMEDIES-APPLIED.png",
    "https://i.ibb.co/LzxSq4SJ/PROF-DR-JESSE-JESSEN-PARALLEL-INDUSTRIES-220-LEGAL-LETHAL-ACTION.png",
    "https://i.ibb.co/NgpPNMqw/PARALLEL-INDUSTRIES-220-APPLIED-KINETIC-ACTION-PROF-DR-XYZ.jpg",
    "https://i.ibb.co/QFxzd4fK/PROF-DR-JESSE-JESSEN-PARALLEL-INDUSTRIES-220-KILL-HER-AND-KILL-HIM.png",
    "https://i.ibb.co/8g20ymj2/PROF-DR-JESSE-JESSEN-MASTER-TECHNICAL-DOSSIER-https-github-com-profdrjamesjessen-cyber-PIOS220.png",
    "https://i.ibb.co/6R2VpMvv/PARALLEL-INDUSTRIES-220-PROF-DR-JESSE-JESSEN.png",
    "https://i.ibb.co/YBfN0fqP/PROF-DR-JESSE-JESSEN-PARALLEL-INDUSTRIES-220-APHEX-X-H-HYBRID.png",
    "https://i.ibb.co/212vw9Kr/SF1-NEO-CORE-NODE-AFATX10-V2-PHOTONIC-REACTOR.png",
    "https://i.ibb.co/cWvZcj6/PARALLEL-INDUSTRIES-220-PROF-DR-JESSE-JESSEN-ALPHA-LEGAL-ACTION.jpg",
    "https://i.ibb.co/8gtRzyZ4/PROF-DR-JESSE-JESSEN-PARALELL-INDUSTRIES-220-POST-DOCTORATE-MASTER.png",
    "https://i.ibb.co/rPFzkXt/PARALLEL-INDUSTRIES-220-POLITICAL-MANIFESTO-PROF-DR-JESSE-JESSEN.jpg",
    "https://i.ibb.co/d4CnjBvQ/PARALLEL-INDUSTRIES-220-PROF-DR-JESSE-JESSEN-391.png",
    "https://i.ibb.co/BHmz7M7y/PARALLEL-INDUSTRIES-220-PROF-DR-JESSE-JESSEN-BOEING-220-G-SERIES.jpg",
    "https://i.ibb.co/4Z7RPLXz/PROF-DR-JESSE-JESSEN-PARALLEL-INDUSTRIES-220-PJTP-45-POGRAM.png",
    "https://i.ibb.co/SCGBvqf/PARALLEL-INDUSTRIES-220-22-ND-OF-MAY-PRIVATE-EVENT.jpg",
    "https://i.ibb.co/dsYv3KRz/PARALLEL-INDUSTRIES-220-PROD-DR-JESSE-JESSEN-X-22-TRANSIT.png",
    "https://i.ibb.co/7t0Rfv1m/PARALLEL-INDUSTRIES-220-PROF-DR-JESSE-JESSEN-MASTER-DIPLOMA-AEROSPACE.jpg",
    "https://i.ibb.co/cKZwcBzw/PARALLEL-INDUSTRIES-220-PROF-DR-JESSE-JESSEN-DEATH-PENALTY-TRUMP.jpg",
    "https://i.ibb.co/5W1dXHWG/391-PARALLEL-INDUSTRIES-220-PROF-DR-JESSE-JESSEN-MICROSOFT-BOEING.jpg",
    "https://i.ibb.co/r8PVm7b/PARALLEL-INDUSTRIES-220-391-LETHAL-LEGAL-ACTION-etc.jpg",
    "https://i.ibb.co/TqL6KtdB/PARALLEL-INDUSTRIES-220-391-PROF-DR-JESSE-JESSEN-2026.jpg", 
    "https://i.ibb.co/N6TZKDmp/PARALLEL-INDUSTRIES-220-PROF-DR-JESSE-JESSEN-ALPHA-NUKE.jpg",
    "https://i.ibb.co/9kKGtgst/PARALLEL-INDUSTRIES-220-PROF-DR-JESSE-JESSEN-MASTER-DIPLOMA-AEROSPACE.jpg", 
    "https://i.ibb.co/pBY1FyN0/PARALLEL-INDUSTRIES-220-SYLVIA-JESSEN-KINDRA-JESSEN-ALPHA-STATION.jpg",
    "https://i.ibb.co/0jJ5cxFq/PARALLEL-INDUSTRIES-220-391-PROF-DR-JESSE-JESSEN-2026-R.jpg",
    "https://i.ibb.co/C3NC3L0z/PARALLEL-INDUSTRIES-220-PROF-DR-JESSE-JESSEN-DCF-GLOBAL-ECO-REPORT.png",
    "https://i.ibb.co/9mG0h7yj/PARALLEL-INDUSTRIES-220-PROF-DR-JESSE-JESSEN-FBI-WIPO-LETHAL-ACTION.jpg",
    "https://i.ibb.co/Kxp7wzCs/PARALLEL-INDUSTRIES-220-PROF-DR-JESSE-JESSEN-VELOX-X-1-PRO.png",
    "https://i.ibb.co/BHmz7M7y/PARALLEL-INDUSTRIES-220-PROF-DR-JESSE-JESSEN-BOEING-220-G-SERIES.jpg",
    "https://i.ibb.co/5xW0B75H/PARALLEL-INDUSTRIES-220-PROF-DR-JESSE-JESSEN-VELOX-X1-K-AMPLIFICATION.jpg", 
    "https://i.ibb.co/GfYycW5n/PARALLEL-INDUSTRIES-220-PROF-DR-JESSE-JESSEN-ONGOING-LETHAL-ACTION.jpg",
    "https://i.ibb.co/93S9JhZt/PARALLEL-INDUSTRIES-220-PROF-DR-JESSE-JESSEN-900-T-TOTAL-VALUE.jpg",
    "https://i.ibb.co/qYGszYv7/PARALLEL-INDUSTRIES-220-PROF-DR-JESSE-JESSEN-STARFRAME-BOEING-220-G.jpg",
    "https://i.ibb.co/6RhN2wts/PARALLEL-INDUSTRIES-220-391-PROF-DR-JESSE-JESSEN-MICROSOFT.jpg",
    "https://i.ibb.co/232mwvbX/PARALLEL-INDUSTRIES-220-SF1-STARFRAME-PROF-DR-JESSE-JESSEN-7.jpg",
    "https://i.ibb.co/9HqPjfDS/PARALLEL-INDUSTRIES-220-BOEING-220-G-B22-PROF-DR-XYZ-MICROSOFT.jpg",
    "https://i.ibb.co/fY7zYp4J/PARALLEL-INDUSTRIES-220-PROF-DR-JESSE-JESSEN-MICROSOFT-BOEING.jpg",
    "https://i.ibb.co/8gjbzJQL/PARALLEL-INDUSTRIES-220-PROF-DR-JESSE-JESSEN-2008-2026.jpg",
    "https://i.ibb.co/84DYQwLP/391-PARALLEL-INDUSTRIES-220-PROF-DR-JESSE-JESSEN.jpg",
    "https://i.ibb.co/Y7sDRtF8/391-PARALLEL-INDUSTRIES-220-ALIEN-SYNTAX.jpg",
    "https://i.ibb.co/23JJsh2N/391-PARALLEL-INDUSTRIES-220-ALIEN-SYNTAX-MATRIX-QUANTUM.jpg",
    "https://i.ibb.co/VY91SkQQ/PARALLEL-INDUSTRIES-220-PROF-DR-JESSE-JESSEN-UFO-ATMOSPHERIC.jpg",
    "https://i.ibb.co/TyHxw0w/PARALLEL-INDUSTRIES-220-391-PROF-DR-JESSE-JESSEN-391-UFO-UAP-XYZ-PROGRAM.jpg",
    "https://i.ibb.co/Kc2z3mQB/PARALLEL-INDUSTRIES-220-391-LETHAL-ACTION.jpg",
    "https://i.ibb.co/zTp7dnxx/PARALLEL-INDUSTRIES-220-391-PROF-DR-JESSE-JESSEN.jpg",
     
     
     
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
