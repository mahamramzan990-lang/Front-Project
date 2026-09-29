const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll("#navbar a");

// =========================================
// Mobile Menu Open / Close
// =========================================

menuToggle.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("show");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "×" : "☰";
});


// =========================================
// Active Navbar Button
// =========================================

navLinks.forEach((link) => {
  link.addEventListener("click", () => {

    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    link.classList.add("active");

    // Close mobile menu
    navbar.classList.remove("show");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});


// =========================================
// Welcome to My Portfolio Animation
// =========================================
// "Welcome to" permanent rahega.
// "my Portfolio" type hoga, rukega,
// phir erase hoga aur dobara type hoga.
// =========================================

document.addEventListener("DOMContentLoaded", () => {

  const typedText = document.querySelector(".typed-word");

  if (typedText && typeof Typed !== "undefined") {

    new Typed(".typed-word", {
      strings: ["my Portfolio"],

      typeSpeed: 90,
      backSpeed: 55,

      backDelay: 1200,
      startDelay: 300,

      loop: true,

      showCursor: true,
      cursorChar: "|"
    });

  }

});


// =========================================
// About Section Reveal
// =========================================
// About section scroll par smoothly appear hoga.
// =========================================

document.addEventListener("DOMContentLoaded", () => {

  const aboutContent = document.querySelector(".about-content");

  if (aboutContent && "IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      (entries, obs) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("about-visible");

            obs.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.15
      }
    );

    observer.observe(aboutContent);

  } else if (aboutContent) {

    // Older browsers ke liye
    aboutContent.classList.add("about-visible");

  }

});
/* =====================================================
   SERVICES SECTION JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const serviceCards =
        document.querySelectorAll(".service-card");


    serviceCards.forEach((card) => {

        card.setAttribute("tabindex", "0");


        card.addEventListener("keydown", (event) => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                card.classList.toggle(
                    "service-card-active"
                );

            }

        });

    });

});
/* =====================================================
   CONTACT FORM
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const form =
        document.getElementById("contactForm");

    const success =
        document.getElementById("formSuccess");

    const button =
        form.querySelector(".send-button");

    const buttonText =
        form.querySelector(".button-text");


    form.addEventListener("submit", (event) => {

        event.preventDefault();


        buttonText.textContent =
            "Preparing message...";

        button.style.pointerEvents =
            "none";


        setTimeout(() => {

            buttonText.textContent =
                "Message Ready ✓";

            success.classList.add("show");

            button.style.pointerEvents =
                "auto";


        }, 900);

    });


    /* Input animation */

    const inputs =
        form.querySelectorAll(
            "input, select, textarea"
        );


    inputs.forEach((input) => {

        input.addEventListener("focus", () => {

            input.parentElement.classList.add(
                "active-input"
            );

        });


        input.addEventListener("blur", () => {

            input.parentElement.classList.remove(
                "active-input"
            );

        });

    });

});