(function initTitleTyping() {
  const title = document.querySelector(".typed-title");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!title || prefersReducedMotion) return;

  const letters = Array.from(title.textContent);
  let index = 0;

  title.textContent = "";
  title.classList.add("is-typing");

  function typeNextLetter() {
    title.textContent += letters[index];
    index += 1;

    if (index < letters.length) {
      window.setTimeout(typeNextLetter, 115);
      return;
    }

    window.setTimeout(() => title.classList.remove("is-typing"), 350);
  }

  window.setTimeout(typeNextLetter, 180);
})();
