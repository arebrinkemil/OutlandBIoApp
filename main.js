import anime from "animejs/lib/anime.es.js";
import movies from "./movieArray";

console.log(movies);

let defaultTransform = 0;
function goNext() {
  defaultTransform = defaultTransform - 398;
  var slider = document.getElementById("slider");
  if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7)
    defaultTransform = 0;
  slider.style.transform = "translateX(" + defaultTransform + "px)";
}
next.addEventListener("click", goNext);
function goPrev() {
  var slider = document.getElementById("slider");
  if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
  else defaultTransform = defaultTransform + 398;
  slider.style.transform = "translateX(" + defaultTransform + "px)";
}
prev.addEventListener("click", goPrev);

const aside = document.querySelector("#aside");
const asideInner = document.querySelector("#aside-inner");
const menuBtns = document.querySelectorAll("#menu-btn");

const ticketLink = document.querySelector("#ticket-link");
const ticketsContainer = document.querySelector(`#tickets`);

const imgCarouselContainers = document.querySelectorAll(
  "#img-carousel-container"
);
const carouselBtns = document.querySelectorAll("#carousel-btn");
const imgViewSection = document.querySelector("#img-view-section");

ticketLink.addEventListener("click", () => {
  ticketsContainer.scrollIntoView({ behavior: "smooth" });
});

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    if (aside.classList.contains("hidden")) {
      // Open aside
      aside.classList.replace("hidden", "absolute");
      setTimeout(() => {
        asideInner.classList.replace("translate-x-full", "translate-x-0");
      }, 10);
    } else {
      // Close aside
      asideInner.classList.replace("translate-x-0", "translate-x-full");
      setTimeout(() => {
        aside.classList.replace("absolute", "hidden");
      }, 300);
    }
  });
});

imgCarouselContainers.forEach((carouselContainer) => {
  const prevBtn = carouselContainer.querySelector("#prev-slide");
  const nextBtn = carouselContainer.querySelector("#next-slide");
  const carousel = carouselContainer.querySelector("#carousel");
  const width = carouselContainer.querySelector("#carousel-size");

  let index = 0;

  const carouselAnimation = () => {
    return anime({
      targets: carousel,
      translateX: -(width.getBoundingClientRect().width * index),
      duration: 300,
      easing: "spring(2, 100, 20, 3)", // mass, stiffness, damping, velocity max values 100
    });
  };

  const prevSlide = () => {
    index--;
    carouselAnimation();
  };

  const nextSlide = () => {
    index++;
    carouselAnimation();
  };

  prevBtn.addEventListener("click", () => {
    if (index === 0) return;
    prevSlide();
  });

  nextBtn.addEventListener("click", () => {
    if (index === carousel.childElementCount - 1) return;
    nextSlide();
  });

  carouselContainer.addEventListener("click", (ev) => {
    ev.stopPropagation();
  });
});

carouselBtns.forEach((carouselBtn) => {
  carouselBtn.addEventListener("click", () => {
    if (imgViewSection.classList.contains("hidden")) {
      imgViewSection.classList.replace("hidden", "fixed");
      setTimeout(() => {
        imgViewSection.children[0].classList.toggle("opacity-0");
      }, 10);
    } else {
      imgViewSection.children[0].classList.toggle("opacity-0");
      setTimeout(() => {
        imgViewSection.classList.replace("fixed", "hidden");
      }, 300);
    }
  });
});
