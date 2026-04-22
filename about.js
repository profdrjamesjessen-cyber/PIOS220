/* ======================================
   PI220OS ABOUT MODULE
   MISSION · VISION · VALUES
====================================== */

registerModule("ABOUT", (top) => {

  if (!top) {
    console.error("[ABOUT] topPanel missing");
    return;
  }

  top.innerHTML = `
    <div class="module about-module">

      <hr>

      <h2>🚀 MISSION</h2>
      <p>
        Parallel Industries 220 exists to engineer unified industrial systems across
        energy, computation, mobility and spatial architecture.
      </p>

      <hr>

      <h2>🌌 VISION</h2>
      <p>
        To establish a fully integrated civilization framework extending beyond Earth limitations.
      </p>

      <hr>

      <h2>⚙️ VALUES</h2>

      <ol>
        <li>Systemic Integration</li>
        <li>Scalable Architecture</li>
        <li>Cross-Domain Engineering</li>
        <li>Intelligence-Driven Design</li>
        <li>Spatial Extension Principle</li>
        <li>Long-Term Civilization Engineering</li>
      </ol>

      <hr>

      <h3>✍🏼 SIGNATURE</h3>

      <div class="about-signature">
        PROF DR JESSE JESSEN<br>
        FOUNDER · DIRECTOR · MASTER ARCHITECT<br>
        ALL RIGHTS RESERVED. 2026.
      </div>

      <br><br>

      <div class="about-image">
        <img 
          src="https://i.ibb.co/Sw6KrsXF/ALPHA-NATION-PARALLEL-INDUSTRIES-220.jpg"
          alt="Parallel Industries 220 Logo"
        />
      </div>

    </div>
  `;
});