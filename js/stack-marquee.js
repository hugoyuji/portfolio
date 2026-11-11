(function initStackMarquee() {
  const stackSection = document.querySelector(".stack-section");
  const stackTrack = stackSection?.querySelector(".stack-track");
  const stackGroup = stackTrack?.querySelector(".stack-group");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!stackSection || !stackTrack || !stackGroup || prefersReducedMotion) return;

  for (let copy = 1; copy < 4; copy += 1) {
    const duplicate = stackGroup.cloneNode(true);
    duplicate.setAttribute("aria-hidden", "true");
    stackTrack.append(duplicate);
  }

  stackSection.classList.add("is-animated");
})();
