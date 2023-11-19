import anime from "animejs";
import { tickets } from "./movieArray";

const trailer = document.querySelector("#trailer");
const audioToggle = document.querySelector("#audio-toggle");

const ticketDropdowns = document.querySelectorAll("#ticket-dropdown");
const dropdownContents = document.querySelectorAll("#dropdown-content");

const cinemaCalendar = document.querySelector("#cinema-calendar");

let selectedDay = "";
let selectedCinemas = [];

const checkBoxToggle = (checkPath, checkBox) => {
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
    checkPath.classList.add("opacity-0");
    checkBox.classList.add("bg-outland-red-900");
    checkBox.classList.replace(
      "border-outland-black",
      "border-outland-red-800"
    );
    setTimeout(() => {
      checkPath.classList.remove("opacity-0");
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
};

const createTickets = () => {
  const filtersCinemas =
    selectedCinemas.length === tickets.length
      ? tickets
      : tickets.filter((cinema) => selectedCinemas.includes(cinema.cinema));

  cinemaCalendar.innerHTML = "";
  filtersCinemas.forEach((cinema) => {
    const dayTickets = cinema.week[selectedDay.toLowerCase()];

    const cinemaContainer = document.createElement("div");
    cinemaContainer.classList.add("flex", "flex-col", "gap-[10px]", "my-4");

    const cinemaName = document.createElement("h3");
    cinemaName.classList.add("text-xl", "font-medium");
    cinemaName.textContent = cinema.cinema;

    cinemaContainer.appendChild(cinemaName);

    dayTickets.forEach((ticket) => {
      const ticketContainer = document.createElement("div");
      ticketContainer.classList.add(
        "p-[10px]",
        "rounded-[10px]",
        "flex",
        "justify-between",
        "items-center",
        "bg-outland-red-900"
      );

      const room = document.createElement("h3");
      room.classList.add("text-xl", "font-medium");
      room.textContent = ticket.room;

      const time = document.createElement("span");
      time.textContent = ticket.time;

      const language = document.createElement("span");
      language.textContent = `Lang ${ticket.language}`;

      const text = document.createElement("span");
      text.textContent = `Text ${ticket.text}`;

      const infoContainer = document.createElement("div");
      infoContainer.classList.add("flex", "justify-between", "flex-col");

      infoContainer.append(language, text);
      ticketContainer.append(room, time, infoContainer);
      cinemaContainer.appendChild(ticketContainer);
    });
    cinemaCalendar.appendChild(cinemaContainer);
  });
};

const createDayList = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayCount = new Date().getDay();
  let week = [];

  selectedDay = days[dayCount];

  for (let i = 0; i < 7; i++) {
    week.push(days[dayCount]);
    dayCount++;
    if (dayCount > 6) dayCount = 0;
  }

  week.forEach((day, index) => {
    const div = document.createElement("div");
    div.classList.add(
      "cursor-pointer",
      "hover:text-outland-gray",
      "transition-colors",
      "duration-300"
    );
    if (index === 0) {
      div.classList.add("mt-4");
    }
    div.textContent = day;

    div.addEventListener("click", () => {
      selectedDay = div.textContent;
      createTickets();
    });

    // Target the date dropdown in tickets
    dropdownContents[0].appendChild(div);
  });
};

const createCinemaList = () => {
  tickets.forEach((cinema) => {
    const checkBoxContainer = document.createElement("div");
    checkBoxContainer.classList.add("flex", "gap-4", "first:mt-4");

    const checkBoxBtn = document.createElement("button");
    checkBoxBtn.setAttribute("id", "cinema-check");
    checkBoxBtn.classList.add(
      "w-6",
      "h-6",
      "bg-outland-red-900",
      "border-2",
      "border-outland-red-800",
      "rounded-md",
      "flex",
      "justify-center",
      "items-center",
      "text-white",
      "transition-colors",
      "duration-300"
    );
    checkBoxBtn.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="2.2"
    stroke="currentColor"
    class="w-4 h-4"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
      id="check-path"
    />
  </svg>`;

    const cinemaName = document.createElement("span");
    cinemaName.textContent = cinema.cinema;

    checkBoxContainer.append(checkBoxBtn, cinemaName);

    // Target cinema dropdown in tickets
    dropdownContents[1].appendChild(checkBoxContainer);
  });

  const cinemaCheck = document.querySelectorAll("#cinema-check");

  cinemaCheck.forEach((checkBox, index) => {
    if (index > 0) {
      selectedCinemas.push(checkBox.nextElementSibling.textContent);
    }

    const checkPath = checkBox.querySelector("#check-path");

    checkBox.addEventListener("click", () => {
      if (index === 0) {
        let checkBoxes = [];
        if (checkBox.classList.contains("border-outland-black")) {
          // check all
          checkBoxes = [...cinemaCheck].filter((checkBox) =>
            checkBox.classList.contains("border-outland-black")
          );
          cinemaCheck.forEach((cinema, index) => {
            if (index > 0) {
              selectedCinemas.push(cinema.nextElementSibling.textContent);
            }
          });
        } else {
          // Uncheck all
          checkBoxes = [...cinemaCheck].filter((checkBox) =>
            checkBox.classList.contains("border-outland-red-800")
          );
          selectedCinemas = [];
        }
        checkBoxes.forEach((box) => {
          const path = box.querySelector("#check-path");
          checkBoxToggle(path, box);
        });
      } else {
        if (cinemaCheck[0].classList.contains("bg-outland-red-900")) {
          const path = cinemaCheck[0].querySelector("#check-path");
          checkBoxToggle(path, cinemaCheck[0]);
        }

        if (selectedCinemas.includes(checkBox.nextElementSibling.textContent)) {
          selectedCinemas = selectedCinemas.filter(
            (cinema) => cinema !== checkBox.nextElementSibling.textContent
          );
        } else {
          selectedCinemas.push(checkBox.nextElementSibling.textContent);
        }

        checkBoxToggle(checkPath, checkBox);

        const cinemas = [...cinemaCheck];
        const isAllCinemasChecked = cinemas
          .splice(1)
          .some((checkBox) =>
            checkBox.classList.contains("border-outland-black")
          );

        if (!isAllCinemasChecked) {
          const path = cinemaCheck[0].querySelector("#check-path");
          checkBoxToggle(path, cinemaCheck[0]);
        }
      }

      createTickets();
    });
  });
};

audioToggle.addEventListener("click", () => {
  trailer.muted = !trailer.muted;
  if (audioToggle.classList.contains("fa-volume-xmark")) {
    audioToggle.classList.replace("fa-volume-xmark", "fa-volume-high");
  } else {
    audioToggle.classList.replace("fa-volume-high", "fa-volume-xmark");
  }
});

ticketDropdowns.forEach((dropdown, index) => {
  const dropdownContent = dropdownContents[index];

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

// On load
createDayList();
createCinemaList();
createTickets();
