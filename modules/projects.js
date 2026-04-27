/* ======================================
   PI220OS PROJECTS MODULE
   FULL SYSTEM DATABASE VIEWER (STABLE)
====================================== */

const projects = [

{name:"PARALLEL INDUSTRIES 220 CORE",serial:"PI220-391-CORE-2026",architecture:"Unified orchestration architecture controlling all systems and subsystems.",principles:"System recursion, synchronization, autonomous governance.",subsystems:"Core Kernel, Decision Engine, Sync Layer, Monitoring Grid",flow:"Global input → orchestration → execution",io:"INPUT: all system signals | OUTPUT: unified control logic",integration:"Root controller of all PI220 architecture",value:"Civilization-level operating core"},

{name:"ALIEN SYNTAX MATRIX",serial:"PI220-391-ALN-2026",architecture:"Symbolic intelligence advanced processing architecture framework.",principles:"Recursive grammar-based parallel quantum computation.",subsystems:"Parser Engine, Semantic Core, Logic Resolver",flow:"Symbolic architecture → Transformation and mutation → resolved status",io:"INPUT: Raw data | OUTPUT: intelligence synthesis",integration:"Linked directly to CORE",value:"Advanced cognitive layer"},

{name:"391 PARALLEL SERVERS",serial:"PI220-391-SRV-2026",architecture:"Distributed planetary-scale compute infrastructure.",principles:"Parallel execution, redundancy, scalability.",subsystems:"Node clusters, Load balancing system, Sync protocol",flow:"Task distribution → parallel processing → result aggregation",io:"INPUT: computational workloads | OUTPUT: processed results",integration:"System backbone infrastructure",value:"Compute backbone"},

{name:"NEO TURBINE 1.0",serial:"PI220-NEO-1.0-2026",architecture:"Single-layer thermal energy recovery propulsion module integrated into aerospace systems.",principles:"Waste heat conversion, thermal efficiency extraction, baseline propulsion augmentation.",subsystems:"Thermal Capture Core, Energy Conversion Unit, Basic Thrust Channel",flow:"Waste heat → thermal capture → electrical conversion → auxiliary thrust output",io:"INPUT: Exhaust heat energy | OUTPUT: Electrical power + low-level thrust",integration:"Linked as foundational propulsion module within PI220 energy systems",value:"Baseline energy recovery propulsion architecture"},

{name:"NEO TURBINE FULL SYSTEM",serial:"PI220-NEO-FULL-2026",architecture:"Tri-layer hybrid propulsion and energy ecosystem integrating thermal, aerodynamic, and hydraulic systems.",principles:"Multi-domain energy fusion, recursive energy recycling, structural stabilization through fluid dynamics.",subsystems:"Thermal Recovery Core, Air Compression Vector Layer, Hydraulic Stabilization Ring",flow:"Thermal energy → electrical conversion → airflow vector thrust → hydraulic stabilization feedback loop",io:"INPUT: Thermal + kinetic + aerodynamic energy | OUTPUT: Propulsion thrust + electrical energy + structural stabilization",integration:"Fully embedded flagship propulsion architecture within PI220 aerospace systems",value:"Advanced multi-energy propulsion ecosystem and flagship system"},

{name:"PCTM-10000-X",serial:"PI220-391-PCTM10000X-2026",architecture:"Experimental photonic–hydrogen confinement reactor with hybrid spectral conversion layers.",principles:"Photon recycling, multi-layer energy conversion, thermal-electrical coupling, hydrogen-plasma interaction.",subsystems:"Photonic Confinement Chamber, HMT Spectral Stack, Hydrogen Injection Module, TPV Conversion Layer, Graphene Transport Grid, Diamond Thermal Layer",flow:"Photon input → confinement → spectral conversion → thermal generation → TPV/PV conversion → electrical output",io:"INPUT: confined radiation + hydrogen energy | OUTPUT: high-density electrical + thermal energy",integration:"Linked to PCTM-5000, PCEEP, X2M Engine, PI220 Experimental Systems",value:"Research-grade energy system targeting maximum energy utilization through hybrid photonic and thermal conversion"},

{name:"PCTM-5000",serial:"PI220-391-PCTM5000-2026",architecture:"Closed-loop,photonic–chemical–thermodynamic energy megastructure.",principles:"Full-spectrum light capture, hydrogen energy cycling, thermal recirculation, photonic confinement.",subsystems:"Light Spectrum Field Generator, Hydrogen Energy Loop, Photonic Chamber, Thermal Recycling Core, X2M Integration Node",flow:"Solar/IR input → photonic confinement → hydrogen amplification → thermal recycling → electrical output",io:"INPUT: solar radiation + hydrogen + ambient IR | OUTPUT: electrical + thermal + kinetic energy",integration:"Linked to PCEEP, X2M Engine, PI220 Energy Grid",value:"Primary energy backbone system enabling continuous high-efficiency generation"},

{name:"PCTM-500",serial:"PI220-391-PCTM500-2026",architecture:"Photonic chemical thermodynamic dual energy conversion plant.",principles:"Photon-energy conversion cycles.",subsystems:"Photon Chamber, Reactor Core, Thermal Amplifier",flow:"Photon input → energy conversion → dual output",io:"INPUT: photonic energy | OUTPUT: power generation",integration:"Feeds all systems",value:"Primary energy generator"},

{name:"PCEEP",serial:"PI220-391-PCEEP-2026",architecture:"Energy conversion and hydrogen refinery system.",principles:"Energy storage and redistribution.",subsystems:"Hydrogen Cells, Storage Grid",flow:"Energy → stabilization → redistribution",io:"INPUT: raw energy | OUTPUT: dual stable output",integration:"Supports PCTM-500",value:"Dual energy system"},

{name:"HFAT-X10",serial:"PI220-391-HFATX10-2026",architecture:"High-frequency cross domain funneling energy hull amplification system.",principles:"Energy stabilization via frequency control.",subsystems:"Thermal field emitters",flow:"Energy → modulation → amplification",io:"INPUT: Energy load | OUTPUT: aerodynamic energy amplification",integration:"Cross domain systems",value:"Transportation system"},

{name:"AFAT-X10",serial:"PI220-391-AFATX10-2026",architecture:"Advanced aerodynamic propulsion field generator system.",principles:"Energy thrust conversion.",subsystems:"Field core propulsion matrix",flow:"Energy → thrust + amplification",io:"INPUT: energy | OUTPUT: propulsion force",integration:"Engine core",value:"Propulsion system"},

{name:"TPSHS / LUNAR NETWORK",serial:"PI220-391-TPSHS-LN-2026",architecture:"Lunar habitat + communication grid.",principles:"Modular extraterrestrial habitation.",subsystems:"Habitat modules, network grid",flow:"Resources → habitation",io:"INPUT: resources | OUTPUT: livable system",integration:"NASAF interface",value:"Lunar colonization system"},

{name:"X2M",serial:"PI220-391-X2M-2026",architecture:"Multi-dimensional kinetic amplification engine.",principles:"Predictive energy modeling systems.",subsystems:"Simulation core",flow:"Input variables → projection",io:"INPUT: Energy | OUTPUT: Predictive amplified model",integration:"Cross domain",value:"Kinetic prediction engine"},

{name:"EXERTUM X",serial:"PI220-391-EXTX-2026",architecture:"Experimental validation environment.",principles:"Controlled system testing.",subsystems:"Test engine",flow:"Input → test → results",io:"INPUT: experiment | OUTPUT: validation",integration:"PI220 system",value:"Validation layer"},

{name:"STARFORCE GRID",serial:"PI220-391-SF-2026",architecture:"Planetary defense energy grid.",principles:"Protection and response systems.",subsystems:"Shield grid",flow:"Threat → defense response",io:"INPUT: threat | OUTPUT: defense activation",integration:"PCTM powered",value:"Security layer"},

{name:"NASAF INTERFACE",serial:"PI220-391-NASAF-2026",architecture:"Aerospace command interface.",principles:"Human-system control layer.",subsystems:"Command console",flow:"Command → execution",io:"INPUT: instructions | OUTPUT: system control",integration:"STARSHIP",value:"Command system"},

{name:"IRAS X",serial:"PI220-391-IRASX-2026",architecture:"Infrared detection system.",principles:"Thermal scanning and analysis.",subsystems:"Sensors",flow:"Scan → interpretation",io:"INPUT: infrared data | OUTPUT: analysis",integration:"CORE",value:"Detection system"},

{name:"XO-SERIES",serial:"PI220-391-XO-2026",architecture:"System experimentation framework.",principles:"Universal scientific interoperability.",subsystems:"Protocol engine",flow:"Data → unified experimentation",io:"INPUT: system data | OUTPUT: unified system",integration:"ALL SYSTEMS",value:"Experimental backbone"},

{name:"PHOTONIC ENGINE SYSTEM",serial:"PI220-391-PHEN-2026",architecture:"High-density photonic energy manipulation and conversion engine.",principles:"Light-field compression, photon amplification, energy structuring.",subsystems:"Photon core chamber, wave guide matrix, energy condenser, output regulator",flow:"Photon input → compression → amplification → output",io:"INPUT: photonic streams | OUTPUT: structured energy fields",integration:"Linked to PCTM-500 and PCEEP",value:"Next-gen energy engine"}

];

/* ================================
   MODULE RENDERER (ACCORDION STYLE)
================================ */
registerModule("PROJECTS", (top) => {

  if (!top) return;

  top.innerHTML = `
    <div class="module projects-module">
      <h1>PROJECTS DATABASE</h1>
      <p style="opacity:0.7;">PI220 Unified Systems Registry</p>
      <hr>

      <div id="projectsContainer"></div>
    </div>
  `;

  const container = document.getElementById("projectsContainer");

  projects.forEach((p, i) => {

    const div = document.createElement("div");
    div.className = "project";

    div.innerHTML = `
      <div class="project-header">
        <strong>${p.name}</strong>
        <span style="opacity:0.6;"> [${p.serial}]</span>
      </div>

      <div class="project-body" style="display:none; margin-top:10px;">
        <p><strong>Architecture:</strong> ${p.architecture}</p>
        <p><strong>Principles:</strong> ${p.principles}</p>
        <p><strong>Subsystems:</strong> ${p.subsystems}</p>
        <p><strong>Flow:</strong> ${p.flow}</p>
        <p><strong>IO:</strong> ${p.io}</p>
        <p><strong>Integration:</strong> ${p.integration}</p>
        <p><strong>Value:</strong> ${p.value}</p>
      </div>
    `;

    div.addEventListener("click", () => {
      const body = div.querySelector(".project-body");
      body.style.display = body.style.display === "none" ? "block" : "none";
    });

    container.appendChild(div);
  });

});
