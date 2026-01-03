/* =========================
   WAIT FOR DOM TO LOAD
========================= */
document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SMOOTH SCROLL
  ========================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      if (targetId.length > 1) {
        e.preventDefault();
        document.querySelector(targetId)?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  /* =========================
     CONTACT FORM HANDLING
  ========================= */
  const form = document.querySelector("form");
  if (form) {
    const button = form.querySelector("button");

    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      button.disabled = true;
      button.innerText = "Sending...";

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          form.reset();
          showMessage("✅ Message sent successfully!");
        } else {
          showMessage("❌ Failed to send message. Try again.");
        }
      } catch (error) {
        showMessage("❌ Network error. Please try later.");
      }

      button.disabled = false;
      button.innerText = "Send Message";
    });
  }

  /* =========================
     PROJECT IMAGE AUTO SLIDER
  ========================= */
  document.querySelectorAll('.slider').forEach(slider => {
    const images = slider.querySelectorAll('img');
    let index = 0;

    if (images.length <= 1) return;

    setInterval(() => {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }, 3000); // 3 seconds
  });

});

/* =========================
   SUCCESS / ERROR MESSAGE
========================= */
function showMessage(text) {
  const form = document.querySelector("form");
  if (!form) return;

  let msg = document.querySelector(".form-message");

  if (!msg) {
    msg = document.createElement("p");
    msg.className = "form-message";
    msg.style.textAlign = "center";
    msg.style.marginTop = "10px";
    msg.style.fontWeight = "500";
    form.appendChild(msg);
  }

  msg.innerText = text;
}
