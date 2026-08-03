const loader = document.getElementById("loader");
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const exploreBtn = document.getElementById("exploreBtn");
const shareButton = document.getElementById("shareButton");
const progressBar = document.getElementById("scrollProgress");
const backToTop = document.getElementById("backToTop");
const toast = document.getElementById("toast");
const pledgeBtn = document.getElementById("pledgeBtn");
const startQuiz = document.getElementById("startQuiz");
const downloadCertificate = document.getElementById("downloadCertificate");
const fighterModal = document.getElementById("fighterModal");
const closeModal = document.getElementById("closeModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const visitorCount = document.getElementById("visitorCount");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1800);
});

const updateVisitorCount = () => {
  const key = "independence-day-visitor-count";
  const count = Number(localStorage.getItem(key) || 0) + 1;
  localStorage.setItem(key, count);
  if (visitorCount) visitorCount.textContent = count;
};

updateVisitorCount();

bgMusic.volume = 0.55;
musicToggle.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.textContent = "🔊";
  } else {
    bgMusic.pause();
    musicToggle.textContent = "🔇";
  }
});

window.showToast = (message) => {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
};

exploreBtn.addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

shareButton.addEventListener("click", async () => {
  const shareData = {
    title: "Happy Independence Day 2026",
    text: "Celebrate India’s freedom journey with this premium tribute.",
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      window.showToast("Shared successfully");
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      window.showToast("Link copied to clipboard");
    } else {
      window.showToast("Sharing is not available here");
    }
  } catch {
    window.showToast("Sharing cancelled");
  }
});

const fighters = {
  gandhi: {
    title: "Mahatma Gandhi",
    image: "images/gandhi.jpg",
    text: "Mahatma Gandhi was the leader of India’s freedom struggle. He followed the path of satyagraha and ahimsa, inspiring millions through civil disobedience and moral courage.",
  },
  bhagat: {
    title: "Bhagat Singh",
    image: "images/bhagat.jpg",
    text: "Bhagat Singh was one of India’s bravest revolutionaries. He sacrificed his life at the age of 23 for the freedom of India and remains an icon of courage.",
  },
  bose: {
    title: "Subhas Chandra Bose",
    image: "images/bose.jpg",
    text: "Netaji Subhas Chandra Bose founded the Indian National Army and inspired countless young Indians to fight for freedom with unwavering resolve.",
  },
  azad: {
    title: "Chandrashekhar Azad",
    image: "images/azad.jpg",
    text: "Chandrashekhar Azad was a legendary revolutionary who pledged that he would never be captured alive, symbolising fearless patriotism.",
  },
  lakshmibai: {
    title: "Rani Lakshmibai",
    image: "images/lakshmibai.jpg",
    text: "Rani Lakshmibai of Jhansi became a symbol of valour and resistance during the First War of Independence and remains a timeless icon of courage.",
  },
  ambedkar: {
    title: "Dr. B. R. Ambedkar",
    image: "images/ambedkar.jpg",
    text: "Dr. B. R. Ambedkar was the chief architect of the Constitution of India and dedicated his life to equality, justice and education.",
  },
  kalam: {
    title: "Dr. A. P. J. Abdul Kalam",
    image: "images/kalam.jpg",
    text: "Dr. A. P. J. Abdul Kalam inspired millions of students to dream big and dedicate themselves to the nation’s future.",
  },
  mangal: {
    title: "Mangal Pandey",
    image: "images/indianlogo.png",
    text: "Mangal Pandey is remembered as one of the first heroes of the 1857 uprising, whose courage helped ignite the movement for India’s freedom.",
  },
};

document.querySelectorAll(".fighter-card button").forEach((button) => {
  button.addEventListener("click", () => {
    const fighter = fighters[button.dataset.fighter];
    modalImage.src = fighter.image;
    modalTitle.textContent = fighter.title;
    modalText.textContent = fighter.text;
    fighterModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

const closeModalHandler = () => {
  fighterModal.style.display = "none";
  document.body.style.overflow = "auto";
};

closeModal.addEventListener("click", closeModalHandler);
window.addEventListener("click", (event) => {
  if (event.target === fighterModal) closeModalHandler();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModalHandler();
});

const updateScrollProgress = () => {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = height > 0 ? scrollTop / height : 0;
  progressBar.style.transform = `scaleX(${Math.min(progress, 1)})`;
  backToTop.classList.toggle("show", scrollTop > 600);
};

window.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const createParticle = () => {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.top = `${Math.random() * 100}vh`;
  particle.style.animationDuration = `${6 + Math.random() * 8}s`;
  particle.style.opacity = `${0.4 + Math.random() * 0.6}`;
  document.body.appendChild(particle);
  setTimeout(() => particle.remove(), 12000);
};

for (let i = 0; i < 50; i += 1) {
  createParticle();
}

setInterval(createParticle, 280);

const triggerCelebration = () => {
  for (let i = 0; i < 18; i += 1) {
    const confetti = document.createElement("div");
    confetti.className = "particle";
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = `-10px`;
    confetti.style.width = `${6 + Math.random() * 6}px`;
    confetti.style.height = `${10 + Math.random() * 10}px`;
    confetti.style.background = `hsl(${Math.random() * 360} 100% 70%)`;
    confetti.style.animation = `floatingParticle ${3 + Math.random() * 2}s linear forwards`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
  }
};

pledgeBtn.addEventListener("click", () => {
  window.showToast("Thank you for the pledge");
  triggerCelebration();
});
