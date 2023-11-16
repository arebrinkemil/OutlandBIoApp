import anime from "animejs";

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

const ticketDropdowns = document.querySelectorAll("#ticket-dropdown");
const cinemaCheck = document.querySelectorAll("#cinema-check");

if (ticketLink) {
  ticketLink.addEventListener("click", () => {
    ticketsContainer.scrollIntoView({ behavior: "smooth" });
  });
}

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    if (aside.classList.contains("hidden")) {
      // Open aside
      aside.classList.replace("hidden", "fixed");
      setTimeout(() => {
        asideInner.classList.replace("translate-x-full", "translate-x-0");
      }, 10);
    } else {
      // Close aside
      asideInner.classList.replace("translate-x-0", "translate-x-full");
      setTimeout(() => {
        aside.classList.replace("fixed", "hidden");
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
    anime({
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

ticketDropdowns.forEach((dropdown) => {
  const dropdownContent = dropdown.querySelector("#dropdown-content");

  dropdownContent.addEventListener("click", (ev) => {
    ev.stopPropagation();
  });

  dropdown.addEventListener("click", () => {
    dropdownContent.style.height =
      dropdownContent.clientHeight === 0
        ? `${dropdownContent.scrollHeight}px`
        : 0;
  });
});

cinemaCheck.forEach((checkBox) => {
  const checkPath = checkBox.querySelector("#check-path");

  checkBox.addEventListener("click", () => {
    // Directions normal, revers, alternate.
    const svgAnimation = (direction = "normal") => {
      anime({
        targets: checkPath,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 300,
        direction,
      });
    };

    if (checkBox.classList.contains("border-outland-black")) {
      checkPath.classList.toggle("opacity-0");
      checkBox.classList.add("bg-outland-red-900");
      checkBox.classList.replace(
        "border-outland-black",
        "border-outland-red-800"
      );
      setTimeout(() => {
        checkPath.classList.toggle("opacity-0");
        svgAnimation();
      }, 200);
    } else {
      svgAnimation("reverse");
      setTimeout(() => {
        checkBox.classList.remove("bg-outland-red-900");
        checkBox.classList.replace(
          "border-outland-red-800",
          "border-outland-black"
        );
      }, 200);
    }
  });
});
