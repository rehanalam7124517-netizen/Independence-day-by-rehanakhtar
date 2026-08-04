const certificateBtn = document.getElementById("downloadCertificate");
const nameInput = document.getElementById("userName");

if (certificateBtn) {
  certificateBtn.addEventListener("click", downloadCertificate);
}

function downloadCertificate() {
  if (!nameInput) return;
  const name = nameInput.value.trim();
  if (!name) {
    if (window.showToast) {
      window.showToast("Please enter your name first");
    }
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.width = 1800;
  canvas.height = 1200;
  const ctx = canvas.getContext("2d");

  const bg = ctx.createLinearGradient(0, 0, 1800, 1200);
  bg.addColorStop(0, "#ff9933");
  bg.addColorStop(0.45, "#fff8ef");
  bg.addColorStop(1, "#138808");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 1800, 1200);

  ctx.strokeStyle = "#0b1d35";
  ctx.lineWidth = 20;
  ctx.strokeRect(42, 42, 1716, 1116);

  ctx.fillStyle = "#0b1d35";
  ctx.textAlign = "center";
  ctx.font = "700 70px 'Playfair Display', serif";
  ctx.fillText("Certificate of Achievement", 900, 220);

  ctx.font = "600 34px 'Inter', sans-serif";
  ctx.fillText("Presented to", 900, 320);

  ctx.fillStyle = "#b22222";
  ctx.font = "700 74px 'Playfair Display', serif";
  ctx.fillText(name, 900, 440);

  ctx.fillStyle = "#111";
  ctx.font = "32px 'Inter', sans-serif";
  ctx.fillText("for successfully completing the Independence Day 2026 Quiz", 900, 560);
  ctx.fillText("and showing a deep appreciation for India’s history and freedom", 900, 620);

  const today = new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  ctx.font = "30px 'Inter', sans-serif";
  ctx.fillText(`Date: ${today}`, 900, 760);
  ctx.fillText("Happy Independence Day 🇮🇳", 900, 840);
  ctx.font = "28px 'Inter', sans-serif";
  ctx.fillText("Designed with care for the Republic of India", 900, 940);

  ctx.beginPath();
  ctx.arc(900, 1020, 60, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(11, 29, 53, 0.35)";
  ctx.lineWidth = 8;
  ctx.stroke();
  ctx.font = "700 28px 'Inter', sans-serif";
  ctx.fillText("India", 900, 1028);

  const link = document.createElement("a");
  link.download = "independence-day-certificate.png";
  link.href = canvas.toDataURL("image/png");
  document.body.appendChild(link);
  link.click();
  link.remove();
  if (window.showToast) {
    window.showToast("Certificate downloaded");
  }
}
