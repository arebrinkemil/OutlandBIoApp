const trailer = document.querySelector("#trailer");
const audioToggle = document.querySelector("#audio-toggle");

audioToggle.addEventListener("click", () => {
  trailer.muted = !trailer.muted;
  if (audioToggle.classList.contains("fa-volume-xmark")) {
    audioToggle.classList.replace("fa-volume-xmark", "fa-volume-high");
  } else {
    audioToggle.classList.replace("fa-volume-high", "fa-volume-xmark");
  }
});
