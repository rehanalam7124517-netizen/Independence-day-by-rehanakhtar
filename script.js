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
const certificateButton = document.getElementById("downloadCertificate");
const fighterModal = document.getElementById("fighterModal");
const closeModal = document.getElementById("closeModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalBio = document.getElementById("modalBio");
const visitorCount = document.getElementById("visitorCount");

window.addEventListener("load", () => {
  if (loader) {
    loader.classList.add("hidden");
    setTimeout(() => loader.remove(), 700);
  }
});

const updateVisitorCount = () => {
  const key = "independence-day-visitor-count";
  const count = Number(localStorage.getItem(key) || 0) + 1;
  localStorage.setItem(key, count);
  if (visitorCount) visitorCount.textContent = count;
};

updateVisitorCount();

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

if (bgMusic) {
  bgMusic.volume = 0.55;
  bgMusic.preload = "auto";
  bgMusic.loop = true;
}

let isMusicEnabled = false;
let musicPromptShown = false;

const setMusicButtonState = (playing) => {
  if (!musicToggle) return;
  if (playing) {
    musicToggle.textContent = "🔊";
    musicToggle.classList.remove("music-blocked");
    musicToggle.setAttribute("aria-label", "Pause background music");
  } else {
    musicToggle.textContent = "Tap to Enable Music";
    musicToggle.classList.add("music-blocked");
    musicToggle.setAttribute("aria-label", "Enable background music");
  }
};

const stopMusic = () => {
  if (!bgMusic) return;
  bgMusic.pause();
  bgMusic.currentTime = 0;
  isMusicEnabled = false;
  setMusicButtonState(false);
};

const tryStartMusic = async () => {
  if (!bgMusic || isMusicEnabled) return;
  try {
    await bgMusic.play();
    isMusicEnabled = true;
    setMusicButtonState(true);
  } catch (error) {
    if (!musicPromptShown) {
      musicPromptShown = true;
      setMusicButtonState(false);
    }
  }
};

if (musicToggle && bgMusic) {
  musicToggle.addEventListener("click", async () => {
    if (isMusicEnabled) {
      stopMusic();
      return;
    }
    await tryStartMusic();
  });
}

if (bgMusic) {
  bgMusic.addEventListener("play", () => {
    isMusicEnabled = true;
    setMusicButtonState(true);
  });

  bgMusic.addEventListener("pause", () => {
    if (!bgMusic.ended) {
      setMusicButtonState(false);
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  tryStartMusic();
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopMusic();
  }
});
window.addEventListener("pagehide", stopMusic);
window.addEventListener("beforeunload", stopMusic);

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
    birth: "2 October 1869",
    death: "30 January 1948",
    place: "Porbandar, Gujarat",
    contributions: "Satyagraha, non-violence, the Salt March, civil disobedience, and moral leadership",
    bio: [
      "Mahatma Gandhi was born in Porbandar and became the moral compass of India’s freedom movement.",
      "He championed truth, non-violence, and self-discipline as tools to challenge imperial rule.",
      "His philosophy of satyagraha inspired millions to resist injustice with dignity and courage.",
      "The Salt March of 1930 became one of the most powerful acts of civil disobedience in history.",
      "He led the Quit India Movement and urged Indians to pursue freedom with peaceful determination.",
      "Gandhiji’s simple lifestyle and spiritual discipline made him a symbol of humility and strength.",
      "He believed that moral courage could overcome fear and oppression.",
      "His teachings continue to influence social justice, peace, and democratic resistance worldwide.",
      "He united people across regions, languages, and classes under a shared national purpose.",
      "His legacy remains central to India’s understanding of freedom, equality, and human dignity."
    ]
  },
  bhagat: {
    title: "Bhagat Singh",
    image: "images/bhagat.jpg",
    birth: "28 September 1907",
    death: "23 March 1931",
    place: "Banga, Punjab",
    contributions: "Revolutionary activism, martyrdom, youth mobilisation, and anti-colonial courage",
    bio: [
      "Bhagat Singh was one of India’s bravest revolutionary thinkers and activists.",
      "He joined the freedom struggle at a very young age and inspired countless students and youth.",
      "He believed that sacrifice and courage were essential to end British oppression.",
      "His fearless speeches and writings made him a symbol of passionate patriotism.",
      "Bhagat Singh challenged the colonial order through direct action and unwavering conviction.",
      "He became a lasting icon of courage for young Indians across generations.",
      "His martyrdom at the age of 23 strengthened the resolve of the independence movement.",
      "He stood for justice, dignity, and the right of people to live as free citizens.",
      "His legacy continues to inspire modern ideals of selfless service and national pride.",
      "He remains one of the most respected revolutionary heroes in India’s history."
    ]
  },
  bose: {
    title: "Subhas Chandra Bose",
    image: "images/bose.jpg",
    birth: "23 January 1897",
    death: "18 August 1945",
    place: "Cuttack, Odisha",
    contributions: "Indian National Army, Azad Hind Fauj, and mass mobilisation for independence",
    bio: [
      "Netaji Subhas Chandra Bose was one of the most dynamic leaders of the freedom struggle.",
      "He believed that India needed both political action and armed resistance against colonial rule.",
      "He founded the Indian National Army to fight for the nation’s liberation.",
      "His leadership gave hope to thousands of Indians who wanted immediate action.",
      "He inspired the nation with speeches that urged people to rise for freedom.",
      "Netaji’s courage and organisational skill made him a towering figure in Indian history.",
      "He gave the slogan Jai Hind, which became a powerful expression of patriotism.",
      "His struggle proved that selfless leadership could renew the spirit of a nation.",
      "He remains admired for his bold strategy and unwavering commitment to India.",
      "His legacy continues to shine as a symbol of courage, sacrifice, and national resolve."
    ]
  },
  azad: {
    title: "Chandrashekhar Azad",
    image: "images/azad.jpg",
    birth: "1 July 1906",
    death: "27 February 1931",
    place: "Alirajpur, Madhya Pradesh",
    contributions: "Revolutionary leadership, Hindustan Socialist Republican Association, and fearless resistance",
    bio: [
      "Chandrashekhar Azad was a fearless revolutionary who chose courage over compromise.",
      "He became known for his fierce commitment to India’s freedom and his refusal to surrender.",
      "Azad joined the ranks of young revolutionaries who wanted to challenge British rule directly.",
      "He was deeply inspired by the ideals of sacrifice and justice.",
      "His leadership helped strengthen the revolutionary movement in the 1920s and 1930s.",
      "He is remembered for his immortal words that he would never be captured alive.",
      "His martyrdom became a source of strength for future generations of freedom fighters.",
      "He embodied the spirit of courage, discipline, and selfless patriotism.",
      "His courage made him a shining example of revolutionary dedication to the nation.",
      "Azad remains a symbol of valour and fearless resistance in Indian history."
    ]
  },
  lakshmibai: {
    title: "Rani Lakshmibai",
    image: "images/lakshmibai.jpg",
    birth: "19 November 1828",
    death: "18 June 1858",
    place: "Varanasi, Uttar Pradesh",
    contributions: "Resistance during the First War of Independence and leadership of Jhansi",
    bio: [
      "Rani Lakshmibai of Jhansi became one of the most iconic women of the freedom struggle.",
      "She rose in defence of her kingdom and the honour of her people.",
      "Her courage during the First War of Independence inspired countless others to resist colonial rule.",
      "She fought bravely on horseback and led her troops with extraordinary resolve.",
      "Lakshmibai was not only a warrior but also a visionary leader.",
      "She stood up for sovereignty, dignity, and the rights of her people.",
      "Her leadership made her a lasting symbol of strength and sacrifice.",
      "She remains an inspiration for women, soldiers, and patriots alike.",
      "Her story continues to remind India of the cost of freedom and the power of courage.",
      "She is remembered as one of the earliest and fiercest voices of resistance."
    ]
  },
  ambedkar: {
    title: "Dr. B. R. Ambedkar",
    image: "images/ambedkar.jpg",
    birth: "14 April 1891",
    death: "6 December 1956",
    place: "Mhow, Madhya Pradesh",
    contributions: "Constitutional drafting, social justice, education reform, and legal equality",
    bio: [
      "Dr. B. R. Ambedkar was the chief architect of the Constitution of India.",
      "He worked tirelessly to build a society based on justice, liberty, and equality.",
      "His scholarship and legal insight shaped the modern democratic framework of India.",
      "He fought against caste discrimination and worked for the dignity of every citizen.",
      "Ambedkar believed that education and constitutional rights could transform society.",
      "He gave voice to the marginalised and demanded social and political equality.",
      "His leadership helped create a strong foundation for India’s republic.",
      "He remains a guiding figure for those who seek justice and inclusion.",
      "His life shows how knowledge, ethics, and courage can reshape a nation.",
      "He is remembered as one of India’s greatest thinkers, reformers, and builders."
    ]
  }
};

document.querySelectorAll(".fighter-card button").forEach((button) => {
  button.addEventListener("click", () => {
    const fighter = fighters[button.dataset.fighter];
    if (!fighter) return;
    if (modalImage) modalImage.src = fighter.image;
    if (modalTitle) modalTitle.textContent = fighter.title;
    if (modalMeta) {
      modalMeta.innerHTML = `
        <div><span>Birth</span><strong>${fighter.birth}</strong></div>
        <div><span>Death</span><strong>${fighter.death}</strong></div>
        <div><span>Place</span><strong>${fighter.place}</strong></div>
        <div><span>Major Contributions</span><strong>${fighter.contributions}</strong></div>
      `;
    }
    if (modalBio) {
      modalBio.innerHTML = fighter.bio.map((line) => `<p>${line}</p>`).join("");
    }
    if (fighterModal) {
      fighterModal.style.display = "flex";
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
    setTimeout(() => {
      fighterModal.style.display = "none";
    }, 220);
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
