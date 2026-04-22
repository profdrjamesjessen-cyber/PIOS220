/* ======================================
   PI220OS CONTACT MODULE
   SECURE COMMUNICATION CHANNEL
====================================== */

registerModule("CONTACT", (top) => {

  if (!top) {
    console.error("[CONTACT] topPanel missing");
    return;
  }

  top.innerHTML = `
    <div class="module contact-module">

      <h2>CONTACT PARALLEL INDUSTRIES 220</h2>

      <p>
        Securely send us a message using the form below. 
        Your email is never exposed.
      </p>

      <form id="contactForm"
            action="https://formspree.io/f/mlgaddzq"
            method="POST"
            class="contact-form">

        <label>Name</label>
        <input type="text" name="name" required />

        <label>Email</label>
        <input type="email" name="_replyto" required />

        <label>Message</label>
        <textarea name="message" rows="6" required></textarea>

        <button type="submit">Send Message</button>

        <p id="formStatus"></p>

        <p class="contact-privacy">
          Your data and information is securely processed and stored in compliance with
          international privacy standards and native corporation data protection laws
          (GDPR, CCPA). ― Parallel Industries 220 guarantees your personal information
          will never be shared without your explicit consent and authorization.
          All Rights Reserved. 2026.
        </p>

      </form>

    </div>
  `;

  // =============================
  // FORM HANDLER
  // =============================

  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (!form) {
    console.error("[CONTACT] form not found");
    return;
  }

  function logWithGlyphs(msg) {
    console.log("[CONTACT LOG]", msg);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("_replyto");
    const message = data.get("message");

    status.textContent = "Sending...";

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {

        status.textContent = "✅ Message sent successfully!";
        form.reset();

        logWithGlyphs(`CONTACT FORM → Name: ${name}, Email: ${email}`);
        logWithGlyphs(`Message Preview: ${message?.slice(0, 50)}...`);

      } else {

        status.textContent = "⚠ Error sending message. Try again.";
        logWithGlyphs(`⚠ CONTACT FORM ERROR → ${name} | ${email}`);

      }

    } catch (err) {

      status.textContent = "⚠ Network error. Try again.";
      logWithGlyphs(`⚠ CONTACT FORM NETWORK ERROR → ${name} | ${email}`);
    }
  });

});