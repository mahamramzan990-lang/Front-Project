/* ================= MOBILE NAV ================= */

const mobileMenu = document.getElementById("mobileMenu");
const mobileNav = document.getElementById("mobileNav");

mobileMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});


document.querySelectorAll(".mobile-nav a").forEach(link => {

  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
  });

});


/* ================= FAQ ================= */

const faqQuestions =
  document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

  question.addEventListener("click", () => {

    const item = question.closest(".faq-item");

    document.querySelectorAll(".faq-item").forEach(other => {

      if (other !== item) {
        other.classList.remove("active");
      }

    });

    item.classList.toggle("active");

  });

});


/* ================= CONTACT FORM ================= */

const contactForm =
  document.getElementById("contactForm");

const formMessage =
  document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const name =
    contactForm.querySelector('[name="name"]').value;

  formMessage.textContent =
    `Thanks ${name}! Your consultation request has been received.`;

  contactForm.reset();

});


/* ================= HEADER SHADOW ================= */

window.addEventListener("scroll", () => {

  const header =
    document.querySelector(".header");

  if (window.scrollY > 20) {
    header.style.boxShadow =
      "0 5px 25px rgba(25,52,47,.07)";
  } else {
    header.style.boxShadow = "none";
  }

});


/* ================= STATS COUNTER ANIMATION ================= */

const statsSection = document.querySelector(".stats");
const statNumbers = document.querySelectorAll(".stats strong");

// HTML se number aur suffix (+ ya %) nikaal lete hain
statNumbers.forEach(el => {

  const text = el.textContent.trim();
  const match = text.match(/^([\d,]+)(.*)$/);

  if (match) {
    el.dataset.target = match[1].replace(/,/g, "");
    el.dataset.suffix = match[2];
  }

});


function animateCount(el) {

  if (!el.dataset.target) return;

  const target = Number(el.dataset.target);
  const suffix = el.dataset.suffix;
  const duration = 2000;
  const startTime = performance.now();

  cancelAnimationFrame(el.rafId);

  function update(now) {

    const progress = Math.min((now - startTime) / duration, 1);

    // smooth slow-down at the end
    const eased = 1 - Math.pow(1 - progress, 3);

    const value = Math.round(target * eased);

    el.textContent = value.toLocaleString("en-US") + suffix;

    if (progress < 1) {
      el.rafId = requestAnimationFrame(update);
    }

  }

  el.rafId = requestAnimationFrame(update);

}


function resetCount(el) {

  if (!el.dataset.target) return;

  cancelAnimationFrame(el.rafId);
  el.textContent = "0" + el.dataset.suffix;

}


if (statsSection && "IntersectionObserver" in window) {

  const statsObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        statNumbers.forEach(animateCount);
      } else {
        statNumbers.forEach(resetCount);
      }

    });

  }, { threshold: 0.4 });

  statsObserver.observe(statsSection);

}