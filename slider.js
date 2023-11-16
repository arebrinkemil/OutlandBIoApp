function handleSlider(sliderId, nextId, prevId) {
  const slider = document.getElementById(sliderId);
  if (!slider) {
    return;
  }
  let defaultTransform = 0;
  const next = document.getElementById(nextId);
  const prev = document.getElementById(prevId);
  const card = slider.querySelector(".flex-shrink-0");
  const gapSize = 32; // gap mellan korten
  let cardWidth = card.offsetWidth + gapSize;

  function updateCardWidth() {
    cardWidth = card.offsetWidth + gapSize;
  }

  window.addEventListener("resize", updateCardWidth);

  function goNext() {
    defaultTransform -= cardWidth;
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7)
      defaultTransform = 0;
    slider.style.transform = `translateX(${defaultTransform}px)`;
  }

  function goPrev() {
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform += cardWidth;
    slider.style.transform = `translateX(${defaultTransform}px)`;
  }

  next.addEventListener("click", goNext);
  prev.addEventListener("click", goPrev);
}

handleSlider("slider1", "next1", "prev1");
handleSlider("slider2", "next2", "prev2");
