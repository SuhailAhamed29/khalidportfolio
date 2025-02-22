/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODAL ===============*/
// Get the modal
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

// When the user clicks on the button, open the modal
let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixer = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */
const workLinks = document.querySelectorAll(".work__item");

function activeWork(workLink) {
  workLinks.forEach((wl) => {
    wl.classList.remove("active-work");
  });
  workLink.classList.add("active-work");
}

workLinks.forEach((wl) => {
  wl.addEventListener("click", () => {
    activeWork(wl);
  });
});

/*=============== SWIPER TESTIMONIAL ===============*/

let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "40px", // Reduced distance for a more subtle effect
  duration: 1000, // Faster duration
  delay: 100, // Reduced delay for quicker start
  reset: true,
});

sr.reveal(`.nav__menu`, {
  delay: 0, // No additional delay
  scale: 0.1,
  origin: "bottom",
  distance: "100px", // Reduced distance for a snappier effect
});

sr.reveal(`.home__data`, {
  delay: 50, // Slight delay for stacking effect
});

sr.reveal(`.home__handle`, {
  delay: 50,
});

sr.reveal(`.home__social, .home__scroll`, {
  delay: 50,
  origin: "bottom",
});

sr.reveal(`.about__img`, {
  delay: 50,
  origin: "left",
  scale: 0.9,
  distance: "20px", // Reduced distance
});

sr.reveal(`.about__data, .about__description, .about__button-contact`, {
  delay: 50,
  scale: 0.9,
  origin: "right",
  distance: "20px", // Reduced distance
});

sr.reveal(`.skills__content`, {
  delay: 0, // No delay for faster reveal
  scale: 0.9,
  origin: "bottom",
  distance: "20px", // Reduced distance
});

sr.reveal(`.services__title, .services__button`, {
  delay: 50,
  scale: 0.9,
  origin: "top",
  distance: "20px", // Reduced distance
});

sr.reveal(`.work__card`, {
  delay: 50,
  scale: 0.9,
  origin: "bottom",
  distance: "20px", // Reduced distance
});

sr.reveal(`.testimonial__container`, {
  delay: 0, // No delay for faster reveal
  scale: 0.9,
  origin: "bottom",
  distance: "20px", // Reduced distance
});

sr.reveal(`.contact__info, .contact__title-info`, {
  delay: 0, // No delay for faster reveal
  scale: 0.9,
  origin: "left",
  distance: "20px", // Reduced distance
});

sr.reveal(`.contact__form, .contact__title-form`, {
  delay: 0, // No delay for faster reveal
  scale: 0.9,
  origin: "right",
  distance: "20px", // Reduced distance
});

sr.reveal(`.footer, .footer__container`, {
  delay: 0, // No delay for faster reveal
  scale: 0.9,
  origin: "bottom",
  distance: "20px", // Reduced distance
});



document.addEventListener('DOMContentLoaded', function() {
  // Japanese representation of "Suhail Ahamed"
  var japaneseName = 'スハイル アハメド ハア';
  var englishName = 'SUHAIL AHAMED';

  // Set the text content to the Japanese representation
  var title = document.querySelector('.home__name');
  title.textContent = japaneseName;

  // Apply the font family
  title.style.fontFamily = "'Django Ink'";

  // Show the title
  title.style.visibility = 'visible';

  // After a delay, change each letter one after another to English
  var delay = 200; // milliseconds

  for (let i = 0; i < englishName.length; i++) {
    setTimeout(function() {
      title.textContent = replaceAt(title.textContent, i, englishName[i]);
    }, delay * (i + 1));
  }
});

// Function to replace character at specific index in a string
function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}

// Event listener for view details buttons
document.querySelectorAll('.view-details-btn').forEach(button => {
  button.addEventListener('click', () => {
    const overlay = button.nextElementSibling;
    overlay.classList.add('show-details');
    document.body.classList.add('blur-background');
  });
});

