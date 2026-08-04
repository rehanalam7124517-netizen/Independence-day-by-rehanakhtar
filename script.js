const loader = document.getElementById("loader");
const bgMusic = document.getElementById("bgMusic");
const exploreBtn = document.getElementById("exploreBtn");
const shareButton = document.getElementById("shareButton");
const progressBar = document.getElementById("scrollProgress");
const backToTop = document.getElementById("backToTop");
const toast = document.getElementById("toast");
const pledgeBtn = document.getElementById("pledgeBtn");
const startQuiz = document.getElementById("startQuiz");
const certificateButton = document.getElementById("downloadCertificate");
const fighterModal = document.getElementById("fighterModal");
const closeModal = document.getElementById("closeModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalBio = document.getElementById("modalBio");
const visitorCount = document.getElementById("visitorCount");

let musicEnabled = false;

window.addEventListener("load", () => {
  const activeLoader = document.getElementById("loader");
  if (activeLoader) {
    activeLoader.style.opacity = "0";
    setTimeout(() => activeLoader.remove(), 500);
  }
  void playMusic();
});

const updateVisitorCount = () => {
  const key = "independence-day-visitor-count";
  const count = Number(localStorage.getItem(key) || 0) + 1;
  localStorage.setItem(key, count);
  if (visitorCount) visitorCount.textContent = count;
};

updateVisitorCount();

const playMusic = async () => {
  if (!bgMusic) return false;
  bgMusic.volume = 0.55;
  bgMusic.loop = true;
  try {
    await bgMusic.play();
    musicEnabled = true;
    return true;
  } catch {
    musicEnabled = false;
    return false;
  }
};

const pauseMusic = () => {
  if (!bgMusic) return;
  bgMusic.pause();
};

const resumeMusicOnInteraction = () => {
  if (bgMusic && bgMusic.paused) {
    void playMusic();
  }
  document.removeEventListener("pointerdown", resumeMusicOnInteraction);
  document.removeEventListener("keydown", resumeMusicOnInteraction);
  document.removeEventListener("touchstart", resumeMusicOnInteraction);
};

document.addEventListener("pointerdown", resumeMusicOnInteraction);
document.addEventListener("keydown", resumeMusicOnInteraction);
document.addEventListener("touchstart", resumeMusicOnInteraction);

if (toast) {
  window.showToast = (message) => {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
  };
} else {
  window.showToast = () => {};
}

if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

if (shareButton) {
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
}

const fighters = {
  gandhi: {
    title: "Mahatma Gandhi",
    image: "images/gandhi.jpg",
    meta: {
      fullName: "Mohandas Karamchand Gandhi",
      birth: "2 October 1869",
      death: "30 January 1948",
      birthplace: "Porbandar, Gujarat",
      contributions: "Non-violent resistance, civil disobedience, and the movement for swaraj",
      awards: "Time Magazine's Person of the Year (1930)",
    },
    bio: [
      "Mahatma Gandhi led India’s freedom struggle with the principles of truth, sacrifice, and non-violence.",
      "He believed that real strength came from moral courage and disciplined self-rule.",
      "His campaigns against colonial laws inspired millions of ordinary citizens to stand with dignity.",
      "The Salt March became a turning point that showed the power of peaceful resistance.",
      "He also worked for communal harmony and social reform across the country.",
      "Gandhiji’s simple lifestyle and deep discipline made him a symbol of humility and purpose.",
      "He urged Indians to value self-reliance, spinning, and village industries.",
      "His leadership shaped the emotional and spiritual direction of the independence movement.",
      "Even today, his ideas continue to influence leaders, educators, and ordinary citizens.",
      "His life remains a reminder that freedom is strongest when it is rooted in compassion.",
    ],
  },
  bhagat: {
    title: "Bhagat Singh",
    image: "images/bhagat.jpg",
    meta: {
      fullName: "Bhagat Singh",
      birth: "28 September 1907",
      death: "23 March 1931",
      birthplace: "Banga, Punjab",
      contributions: "Revolutionary resistance, public awakening, and fearless anti-colonial action",
      awards: "No formal awards; remembered as a martyr and icon",
    },
    bio: [
      "Bhagat Singh became one of the most inspiring youth icons of the Indian freedom movement.",
      "He chose courage over fear and devoted himself to the idea of a free nation.",
      "His writings showed a sharp mind and a deep commitment to justice.",
      "He challenged colonial authority with bold political action and fearless clarity.",
      "His sacrifice at a young age transformed him into a lasting symbol of conviction.",
      "He believed that freedom had to be earned through sacrifice and discipline.",
      "His ideals continue to inspire students and young dreamers across India.",
      "He remains a beacon of revolutionary spirit and national pride.",
      "His life teaches that courage can emerge from the youngest hearts.",
      "Bhagat Singh’s legacy still echoes in every celebration of bravery and patriotism.",
    ],
  },
  bose: {
    title: "Subhas Chandra Bose",
    image: "images/bose.jpg",
    meta: {
      fullName: "Subhas Chandra Bose",
      birth: "23 January 1897",
      death: "18 August 1945",
      birthplace: "Cuttack, Odisha",
      contributions: "Formation of the Indian National Army and mobilisation of youth for freedom",
      awards: "No formal awards; honoured as Netaji",
    },
    bio: [
      "Netaji Subhas Chandra Bose gave the freedom movement a sharper edge of resolve and action.",
      "He believed that India had to fight for independence with full commitment and discipline.",
      "He founded the Indian National Army to confront colonial rule on the battlefield.",
      "His leadership inspired thousands of young Indians to join the struggle.",
      "He was a powerful orator whose words awakened national confidence.",
      "His dream of a free India was built on courage, unity, and sacrifice.",
      "He challenged the limits of passive resistance and pushed the movement forward.",
      "His legacy lives on in the pride of the armed forces and the spirit of national service.",
      "Even today, he is remembered as a fearless figure who refused to surrender hope.",
      "Netaji’s story remains a vital chapter in India’s journey to freedom.",
    ],
  },
  azad: {
    title: "Chandrashekhar Azad",
    image: "images/azad.jpg",
    meta: {
      fullName: "Chandrashekhar Azad",
      birth: "23 July 1906",
      death: "27 February 1931",
      birthplace: "Alirajpur, Madhya Pradesh",
      contributions: "Revolutionary activism and resistance against British rule",
      awards: "No formal awards; remembered as a martyr",
    },
    bio: [
      "Chandrashekhar Azad was a fearless revolutionary whose spirit became a symbol of resistance.",
      "He chose to remain unyielding even when the pressure of colonial rule intensified.",
      "His commitment to liberty made him one of the most admired figures of the movement.",
      "He worked with young revolutionaries to challenge the empire at every turn.",
      "His famous resolve to never be captured alive became a legend in itself.",
      "He was deeply inspired by the ideals of sacrifice and justice.",
      "His courage helped keep the flame of rebellion alive during difficult times.",
      "He became a source of inspiration for generations of patriots and students.",
      "His life proves that bravery can emerge from even the harshest circumstances.",
      "Azad’s memory remains a powerful reminder of the cost of freedom.",
    ],
  },
  lakshmibai: {
    title: "Rani Lakshmibai",
    image: "images/lakshmibai.jpg",
    meta: {
      fullName: "Rani Lakshmibai of Jhansi",
      birth: "19 November 1835",
      death: "18 June 1858",
      birthplace: "Varanasi, Uttar Pradesh",
      contributions: "Leadership during the First War of Independence and resistance against British expansion",
      awards: "Honoured as a national icon and legendary warrior",
    },
    bio: [
      "Rani Lakshmibai of Jhansi became an enduring symbol of courage and resistance.",
      "She led her people with extraordinary determination during the First War of Independence.",
      "Her bravery in battle inspired countless Indians to defend their homeland.",
      "She stood as a queen who chose duty over comfort and fear.",
      "Her leadership showed that courage can be both political and personal.",
      "She remains a central figure in the history of India’s resistance.",
      "Her story reminds us that freedom often begins with the strength of a single person.",
      "She is admired for her tactical skill, resolve, and fierce love for her kingdom.",
      "Her memory continues to inspire women, warriors, and leaders alike.",
      "Rani Lakshmibai is a timeless emblem of valor and dignity.",
    ],
  },
  ambedkar: {
    title: "Dr. B. R. Ambedkar",
    image: "images/ambedkar.jpg",
    meta: {
      fullName: "Dr. Bhimrao Ramji Ambedkar",
      birth: "14 April 1891",
      death: "6 December 1956",
      birthplace: "Mhow, Madhya Pradesh",
      contributions: "Architect of the Indian Constitution and champion of social justice",
      awards: "Bharat Ratna (1990)",
    },
    bio: [
      "Dr. B. R. Ambedkar helped shape the constitutional and moral foundations of modern India.",
      "He fought for equality, dignity, and the removal of caste-based injustice.",
      "His scholarship and discipline made him one of the greatest thinkers of the nation.",
      "He served as the chief architect of the Indian Constitution.",
      "His work continues to influence law, education, and social reform.",
      "He believed that justice had to be written into the very structure of society.",
      "He gave voice to the aspirations of millions who had long been denied rights.",
      "His life is a reminder that freedom also means equal opportunity and human dignity.",
      "He remains an inspiration to those who seek fairness and inclusion.",
      "Ambedkar’s legacy is essential to India’s democratic story.",
    ],
  },
  patel: {
    title: "Sardar Vallabhbhai Patel",
    image: "images/patel.jpg",
    meta: {
      fullName: "Vallabhbhai Jhaverbhai Patel",
      birth: "31 October 1875",
      death: "15 December 1950",
      birthplace: "Nadiad, Gujarat",
      contributions: "Political integration of princely states and a strong, united India",
      awards: "Bharat Ratna (1991)",
    },
    bio: [
      "Sardar Vallabhbhai Patel was one of the most important architects of modern India.",
      "He played a decisive role in integrating the princely states into the Indian Union.",
      "His leadership helped preserve national unity in the early years after independence.",
      "He was known for his calm resolve and practical wisdom.",
      "He earned the trust of people through discipline, clarity, and unwavering service.",
      "Patel’s efforts strengthened the political fabric of the new nation.",
      "He stood for order, strength, and the idea of a united country.",
      "His legacy is deeply connected with the idea of one India.",
      "His statesmanship continues to inspire leaders who value cohesion and responsibility.",
      "Sardar Patel remains a symbol of strength, unity, and service.",
    ],
  },
  shastri: {
    title: "Lal Bahadur Shastri",
    image: "images/shastri.jpg",
    meta: {
      fullName: "Lal Bahadur Shastri",
      birth: "2 October 1904",
      death: "11 January 1966",
      birthplace: "Mughalsarai, Uttar Pradesh",
      contributions: "Leadership during the post-independence period and the slogan of Jai Jawan Jai Kisan",
      awards: "Bharat Ratna (1966)",
    },
    bio: [
      "Lal Bahadur Shastri became a respected leader known for humility and dedication.",
      "He carried forward the values of simplicity, honesty, and public service.",
      "His leadership reflected calmness under pressure and deep national responsibility.",
      "He gave India the motto of Jai Jawan Jai Kisan, linking soldiers and farmers.",
      "His words encouraged citizens to work with discipline and courage.",
      "Shastri ji remains remembered for his moral strength and quiet resolve.",
      "He helped shape the ethical tone of India’s political life.",
      "His leadership during critical moments earned him great admiration.",
      "He continues to inspire people who believe in simple living and strong values.",
      "His legacy is a reminder that leadership can be humble and still powerful.",
    ],
  },
};

document.querySelectorAll(".fighter-card button").forEach((button) => {
  button.addEventListener("click", () => {
    const fighter = fighters[button.dataset.fighter];
    if (!fighter) return;
    if (modalImage) {
      modalImage.src = fighter.image;
      modalImage.alt = fighter.title;
      modalImage.onerror = () => {
        modalImage.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%2307111c'/%3E%3Ccircle cx='300' cy='300' r='220' fill='none' stroke='%23ff9933' stroke-width='24'/%3E%3Cpath d='M240 220h120l80 160h-120l-80-160z' fill='%23ff9933'/%3E%3Cpath d='M258 270h84' stroke='%23ffffff' stroke-width='16' stroke-linecap='round'/%3E%3C/svg%3E";
        modalImage.onerror = null;
      };
    }
    if (modalTitle) modalTitle.textContent = fighter.title;
    if (modalMeta) {
      modalMeta.innerHTML = Object.entries(fighter.meta)
        .map(([label, value]) => `<div><strong>${label.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase())}</strong>${value}</div>`)
        .join("");
    }
    if (modalBio) {
      modalBio.innerHTML = fighter.bio.map((paragraph) => `<p>${paragraph}</p>`).join("");
    }
    if (fighterModal) {
      fighterModal.classList.add("show");
      fighterModal.setAttribute("aria-hidden", "false");
    }
    document.body.classList.add("modal-open");
  });
});

const closeModalHandler = () => {
  if (fighterModal) {
    fighterModal.classList.remove("show");
    fighterModal.setAttribute("aria-hidden", "true");
  }
  document.body.classList.remove("modal-open");
};

if (closeModal) {
  closeModal.addEventListener("click", closeModalHandler);
}
window.addEventListener("click", (event) => {
  if (event.target === fighterModal) closeModalHandler();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModalHandler();
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    pauseMusic();
  } else if (musicEnabled) {
    void playMusic();
  }
});

window.addEventListener("pagehide", pauseMusic);
window.addEventListener("beforeunload", pauseMusic);

const updateScrollProgress = () => {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = height > 0 ? scrollTop / height : 0;
  if (progressBar) progressBar.style.transform = `scaleX(${Math.min(progress, 1)})`;
  if (backToTop) backToTop.classList.toggle("show", scrollTop > 600);
};

window.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const applyFallbackImages = () => {
  document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      if (image.dataset.fallbackApplied === "true") return;
      image.dataset.fallbackApplied = "true";
      if (image.id === "modalImage") {
        image.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%2307111c'/%3E%3Ccircle cx='300' cy='300' r='220' fill='none' stroke='%23ff9933' stroke-width='24'/%3E%3Cpath d='M240 220h120l80 160h-120l-80-160z' fill='%23ff9933'/%3E%3Cpath d='M258 270h84' stroke='%23ffffff' stroke-width='16' stroke-linecap='round'/%3E%3C/svg%3E";
      } else {
        image.src = "images/indianlogo.png";
      }
    }, { once: true });
  });
};

applyFallbackImages();

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

if (pledgeBtn) {
  pledgeBtn.addEventListener("click", () => {
    window.showToast("Thank you for the pledge");
    triggerCelebration();
  });
}
