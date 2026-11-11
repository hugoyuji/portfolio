(function initCursorGlow() {
  const root = document.documentElement;

  window.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;

    const horizontalProgress = event.clientX / window.innerWidth;
    const hue = 220 + horizontalProgress * 200;

    root.style.setProperty("--cursor-x", `${event.clientX}px`);
    root.style.setProperty("--cursor-y", `${event.clientY}px`);
    root.style.setProperty("--cursor-hue", hue);
    root.style.setProperty("--cursor-glow-opacity", "1");
  }, { passive: true });

  window.addEventListener("pointerleave", () => {
    root.style.setProperty("--cursor-glow-opacity", "0");
  });
})();
