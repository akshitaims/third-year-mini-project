const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  formMessage.textContent = "Sending your message...";
  formMessage.style.color = "#fff";

  setTimeout(() => {
    formMessage.textContent = "✅ Message sent successfully! We'll get back to you soon.";
    formMessage.style.color = "#00ffae";
    form.reset();
  }, 2000);
});
