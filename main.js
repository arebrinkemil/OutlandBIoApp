const aside = document.querySelector("#aside");
const asideInner = document.querySelector("#aside-inner");
const menuBtns = document.querySelectorAll("#menu-btn");

const ticketLink = document.querySelector("#ticket-link");
const ticketsContainer = document.querySelector(`#tickets`);

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
