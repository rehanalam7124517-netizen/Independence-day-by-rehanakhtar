const certificateBtn = document.getElementById("downloadCertificate");
const nameInput = document.getElementById("userName");

certificateBtn.addEventListener("click", downloadCertificate);

function downloadCertificate() {
  const name = nameInput.value.trim();
  if (!name) {
    window.showToast("Please enter your name first");
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.width = 1800;
  canvas.height = 1200;
  const ctx = canvas.getContext("2d");

  const bg = ctx.createLinearGradient(0, 0, 1800, 1200);
  bg.addColorStop(0, "#ff9933");
  bg.addColorStop(0.5, "#ffffff");
  bg.addColorStop(1, "#138808");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 1800, 1200);

  ctx.strokeStyle = "#0b1d35";
  ctx.lineWidth = 20;
  ctx.strokeRect(42, 42, 1716, 1116);

  ctx.fillStyle = "#0b1d35";
  ctx.textAlign = "center";
  ctx.font = "700 66px 'Playfair Display', serif";
  ctx.fillText("Certificate of Achievement", 900, 220);

  ctx.font = "500 40px 'Inter', sans-serif";
  ctx.fillText("Presented to", 900, 320);

  ctx.fillStyle = "#b22222";
  ctx.font = "700 72px 'Playfair Display', serif";
  ctx.fillText(name, 900, 430);

  ctx.fillStyle = "#111";
  ctx.font = "36px 'Inter', sans-serif";
  ctx.fillText("for successfully completing the Independence Day 2026 Quiz", 900, 540);
  ctx.fillText("and showing a deep appreciation for India’s history and freedom", 900, 600);

  const today = new Date().toLocaleDateString();
  ctx.font = "32px 'Inter', sans-serif";
  ctx.fillText(`Date: ${today}`, 900, 760);
  ctx.fillText("Happy Independence Day 🇮🇳", 900, 840);
  ctx.font = "28px 'Inter', sans-serif";
  ctx.fillText("Designed with care for the Republic of India", 900, 940);

  const link = document.createElement("a");
  link.download = "independence-day-certificate.png";
  link.href = canvas.toDataURL("image/png");
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.showToast("Certificate downloaded");
}
