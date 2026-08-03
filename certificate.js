/* ======================================
   🇮🇳 ᴄᴇʀᴛɪꜰɪᴄᴀᴛᴇ ꜱʏꜱᴛᴇᴍ
====================================== */

const certificateBtn=document.getElementById("downloadCertificate");

const nameInput=document.getElementById("userName");

certificateBtn.disabled=true;

certificateBtn.addEventListener("click",downloadCertificate);

function downloadCertificate(){

const name=nameInput.value.trim();

if(name===""){

alert("ᴘʟᴇᴀꜱᴇ ᴇɴᴛᴇʀ ʏᴏᴜʀ ɴᴀᴍᴇ.");

return;

}

const canvas=document.createElement("canvas");

canvas.width=1600;

canvas.height=1100;

const ctx=canvas.getContext("2d");

const gradient=ctx.createLinearGradient(0,0,1600,1100);

gradient.addColorStop(0,"#ff9933");
gradient.addColorStop(.5,"#ffffff");
gradient.addColorStop(1,"#138808");

ctx.fillStyle=gradient;
ctx.fillRect(0,0,1600,1100);

ctx.lineWidth=18;
ctx.strokeStyle="#0b1d35";
ctx.strokeRect(40,40,1520,1020);

ctx.textAlign="center";

ctx.fillStyle="#0b1d35";
ctx.font="bold 70px serif";
ctx.fillText("ᴄᴇʀᴛɪꜰɪᴄᴀᴛᴇ ᴏꜰ ᴀᴄʜɪᴇᴠᴇᴍᴇɴᴛ",800,150);

ctx.font="42px serif";
ctx.fillText("ᴘʀᴇꜱᴇɴᴛᴇᴅ ᴛᴏ",800,250);

ctx.fillStyle="#b22222";
ctx.font="bold 72px serif";
ctx.fillText(name,800,360);

ctx.fillStyle="#111";
ctx.font="34px serif";

ctx.fillText("ꜰᴏʀ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴄᴏᴍᴘʟᴇᴛɪɴɢ",800,470);

ctx.fillText("ᴛʜᴇ ɪɴᴅᴇᴘᴇɴᴅᴇɴᴄᴇ ᴅᴀʏ 2026 Qᴜɪᴢ",800,530);

ctx.fillText("ᴀɴᴅ ꜱʜᴏᴡɪɴɢ ᴇxᴄᴇʟʟᴇɴᴛ ᴋɴᴏᴡʟᴇᴅɢᴇ",800,590);

ctx.fillText("ᴏꜰ ɪɴᴅɪᴀ'ꜱ ʜɪꜱᴛᴏʀʏ ᴀɴᴅ ꜰʀᴇᴇᴅᴏᴍ",800,650);

const today=new Date().toLocaleDateString();

ctx.font="30px serif";

ctx.fillText("ᴅᴀᴛᴇ : "+today,800,760);

ctx.fillText("ʜᴀᴘᴘʏ ɪɴᴅᴇᴘᴇɴᴅᴇɴᴄᴇ ᴅᴀʏ 🇮🇳",800,870);

ctx.font="28px serif";

ctx.fillText("ᴅᴇꜱɪɢɴᴇᴅ ʙʏ ʀᴇʜᴀɴ ᴀᴋʜᴛᴀʀ",800,950);

const link=document.createElement("a");

link.download="ɪɴᴅᴇᴘᴇɴᴅᴇɴᴄᴇ-ᴅᴀʏ-ᴄᴇʀᴛɪꜰɪᴄᴀᴛᴇ.png";

link.href=canvas.toDataURL("image/png");

link.click();

}

