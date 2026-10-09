const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

// Mobile navigation menu
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

// Automatically update copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Send contact enquiry through WhatsApp
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    const guestName = document.getElementById("guestName").value.trim();
    const guestPhone = document.getElementById("guestPhone").value.trim();
    const guestMessage = document.getElementById("guestMessage").value.trim();

    const hotelPhone = "917906732767";

    const message = [
      "Hello Hotel Pacify Hills!",
      "",
      `Name: ${guestName}`,
      `Phone: ${guestPhone}`,
      `Enquiry: ${guestMessage}`,
      "",
      "Please share the details. Thank you!"
    ].join("\n");

    const whatsappURL =
      `https://wa.me/${hotelPhone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  });
}