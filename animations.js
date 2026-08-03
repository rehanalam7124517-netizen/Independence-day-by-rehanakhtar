const revealElements = document.querySelectorAll(".reveal, .fighter-card, .timeline-card, .india-card");

if (window.IntersectionObserver) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach((item) => observer.observe(item));
} else {
  revealElements.forEach((item) => item.classList.add("visible"));
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function (event) {
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    const size = Math.max(this.clientWidth, this.clientHeight);
    const rect = this.getBoundingClientRect();
    const offsetX = event.clientX ? event.clientX - rect.left : rect.width / 2;
    const offsetY = event.clientY ? event.clientY - rect.top : rect.height / 2;
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${offsetX - size / 2}px`;
    ripple.style.top = `${offsetY - size / 2}px`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  });
});
