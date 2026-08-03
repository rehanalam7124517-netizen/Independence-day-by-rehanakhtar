const revealElements = document.querySelectorAll(".reveal, .fighter-card, .timeline-card, .india-card");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach((item) => observer.observe(item));

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function (event) {
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    const size = Math.max(this.clientWidth, this.clientHeight);
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${event.offsetX - size / 2}px`;
    ripple.style.top = `${event.offsetY - size / 2}px`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  });
});
