import anime from "animejs";

const trailer = document.querySelector("#trailer");
const audioToggle = document.querySelector("#audio-toggle");

const ticketDropdowns = document.querySelectorAll("#ticket-dropdown");
const dropdownContents = document.querySelectorAll("#dropdown-content");
const cinemaCheck = document.querySelectorAll("#cinema-check");

const cinemaCalendar = document.querySelector("#cinema-calendar");

let selectedDay = "";

const tickets = [
  {
    cinema: "AMC Theater",
    week: {
      monday: [
        {
          room: "Room 2",
          time: "12:00",
          language: "En",
          text: "En",
        },
        {
          room: "Room 3",
          time: "16:00",
          language: "En",
          text: "En",
        },
      ],
      tuesday: [
        {
          room: "Room 2",
          time: "12:00",
          language: "En",
          text: "En",
        },
      ],
      wednesday: [
        {
          room: "Room 2",
          time: "12:00",
          language: "En",
          text: "En",
        },
      ],
      thursday: [
        {
          room: "Room 2",
          time: "12:00",
          language: "En",
          text: "En",
        },
      ],
      friday: [
        {
          room: "Room 2",
          time: "12:00",
          language: "En",
          text: "En",
        },
      ],
      saturday: [
        {
          room: "Room 2",
          time: "12:00",
          language: "En",
          text: "En",
        },
        {
          room: "Room 3",
          time: "16:00",
          language: "En",
          text: "En",
        },
      ],
      sunday: [
        {
          room: "Room 2",
          time: "12:00",
          language: "En",
          text: "En",
        },
      ],
    },
  },
];

const createTickets = () => {
  cinemaCalendar.innerHTML = "";
  tickets.forEach((cinema) => {
    const dayTickets = cinema.week[selectedDay.toLocaleLowerCase()];

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

const createDateList = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let dayCount = new Date().getDay() - 1;
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

audioToggle.addEventListener("click", () => {
  trailer.muted = !trailer.muted;
  if (audioToggle.classList.contains("fa-volume-xmark")) {
    audioToggle.classList.replace("fa-volume-xmark", "fa-volume-high");
  } else {
    audioToggle.classList.replace("fa-volume-high", "fa-volume-xmark");
  }
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
createDateList();
createTickets();
