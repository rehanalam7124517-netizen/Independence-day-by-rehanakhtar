/* ======================================
   🇮🇳 INDEPENDENCE DAY 2026
====================================== */

const loader = document.getElementById("loader");

const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

const exploreBtn = document.getElementById("exploreBtn");

const fighterModal = document.getElementById("fighterModal");
const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

const pledgeBtn = document.getElementById("pledgeBtn");

const startQuiz = document.getElementById("startQuiz");

const downloadCertificate =
document.getElementById("downloadCertificate");

/* ======================================
   LOADER
====================================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},800);

},3500);

});

/* ======================================
   MUSIC
====================================== */

bgMusic.volume=0.6;

musicToggle.onclick=()=>{

if(bgMusic.paused){

bgMusic.play();

musicToggle.innerHTML="🔊";

}else{

bgMusic.pause();

musicToggle.innerHTML="🔇";

}

};

/* ======================================
   COUNTDOWN
====================================== */

const targetDate = new Date("August 15, 2026 00:00:00").getTime();

setInterval(()=>{

const now = new Date().getTime();

const distance = targetDate - now;

const days = Math.floor(distance/(1000*60*60*24));
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;

},1000);

/* ======================================
   EXPLORE BUTTON
====================================== */

exploreBtn.onclick=()=>{

document.getElementById("about").scrollIntoView({

behavior:"smooth"

});

};

const fighters={

gandhi:{
title:"ᴍᴀʜᴀᴛᴍᴀ ɢᴀɴᴅʜɪ",
image:"images/gandhi.jpg",
text:"ᴍᴀʜᴀᴛᴍᴀ ɢᴀɴᴅʜɪ ᴡᴀꜱ ᴛʜᴇ ʟᴇᴀᴅᴇʀ ᴏꜰ ɪɴᴅɪᴀ'ꜱ ꜰʀᴇᴇᴅᴏᴍ ꜱᴛʀᴜɢɢʟᴇ. ʜᴇ ꜰᴏʟʟᴏᴡᴇᴅ ᴛʜᴇ ᴘᴀᴛʜ ᴏꜰ ꜱᴀᴛʏᴀɢʀᴀʜᴀ ᴀɴᴅ ᴀʜɪᴍꜱᴀ. ʜɪꜱ ʟᴇᴀᴅᴇʀꜱʜɪᴘ ɪɴ ᴛʜᴇ ɴᴏɴ-ᴄᴏᴏᴘᴇʀᴀᴛɪᴏɴ ᴍᴏᴠᴇᴍᴇɴᴛ, ᴅᴀɴᴅɪ ᴍᴀʀᴄʜ ᴀɴᴅ Qᴜɪᴛ ɪɴᴅɪᴀ ᴍᴏᴠᴇᴍᴇɴᴛ ɪɴꜱᴘɪʀᴇᴅ ᴍɪʟʟɪᴏɴꜱ ᴏꜰ ɪɴᴅɪᴀɴꜱ. ʜᴇ ɪꜱ ᴋɴᴏᴡɴ ᴀꜱ ᴛʜᴇ ꜰᴀᴛʜᴇʀ ᴏꜰ ᴛʜᴇ ɴᴀᴛɪᴏɴ."
},

bhagat:{
title:"ʙʜᴀɢᴀᴛ ꜱɪɴɢʜ",
image:"images/bhagat.jpg",
text:"ʙʜᴀɢᴀᴛ ꜱɪɴɢʜ ᴡᴀꜱ ᴏɴᴇ ᴏꜰ ɪɴᴅɪᴀ'ꜱ ᴍᴏꜱᴛ ꜰᴇᴀʀʟᴇꜱꜱ ʀᴇᴠᴏʟᴜᴛɪᴏɴᴀʀɪᴇꜱ. ʜᴇ ꜱᴀᴄʀɪꜰɪᴄᴇᴅ ʜɪꜱ ʟɪꜰᴇ ᴀᴛ ᴛʜᴇ ᴀɢᴇ ᴏꜰ 23 ꜰᴏʀ ᴛʜᴇ ꜰʀᴇᴇᴅᴏᴍ ᴏꜰ ɪɴᴅɪᴀ. ʜɪꜱ ᴄᴏᴜʀᴀɢᴇ, ᴘᴀᴛʀɪᴏᴛɪꜱᴍ ᴀɴᴅ ᴅᴇᴅɪᴄᴀᴛɪᴏɴ ᴄᴏɴᴛɪɴᴜᴇ ᴛᴏ ɪɴꜱᴘɪʀᴇ ᴇᴠᴇʀʏ ɪɴᴅɪᴀɴ."
},

bose:{
title:"ꜱᴜʙʜᴀꜱ ᴄʜᴀɴᴅʀᴀ ʙᴏꜱᴇ",
image:"images/bose.jpg",
text:"ɴᴇᴛᴀᴊɪ ꜱᴜʙʜᴀꜱ ᴄʜᴀɴᴅʀᴀ ʙᴏꜱᴇ ꜰᴏᴜɴᴅᴇᴅ ᴛʜᴇ ɪɴᴅɪᴀɴ ɴᴀᴛɪᴏɴᴀʟ ᴀʀᴍʏ. ʜɪꜱ ꜰᴀᴍᴏᴜꜱ ᴄᴀʟʟ 'ᴛᴜᴍ ᴍᴜᴊʜᴇ ᴋʜᴏᴏɴ ᴅᴏ, ᴍᴀɪɴ ᴛᴜᴍʜᴇ ᴀᴢᴀᴅɪ ᴅᴜɴɢᴀ' ᴍᴏᴛɪᴠᴀᴛᴇᴅ ᴄᴏᴜɴᴛʟᴇꜱꜱ ʏᴏᴜɴɢ ɪɴᴅɪᴀɴꜱ ᴛᴏ ꜰɪɢʜᴛ ꜰᴏʀ ꜰʀᴇᴇᴅᴏᴍ."
},

azad:{
title:"ᴄʜᴀɴᴅʀᴀꜱʜᴇᴋʜᴀʀ ᴀᴢᴀᴅ",
image:"images/azad.jpg",
text:"ᴄʜᴀɴᴅʀᴀꜱʜᴇᴋʜᴀʀ ᴀᴢᴀᴅ ᴡᴀꜱ ᴀ ʟᴇɢᴇɴᴅᴀʀʏ ʀᴇᴠᴏʟᴜᴛɪᴏɴᴀʀʏ. ʜᴇ ᴘʟᴇᴅɢᴇᴅ ᴛʜᴀᴛ ʜᴇ ᴡᴏᴜʟᴅ ɴᴇᴠᴇʀ ʙᴇ ᴄᴀᴘᴛᴜʀᴇᴅ ᴀʟɪᴠᴇ. ʜɪꜱ ᴜɴᴍᴀᴛᴄʜᴇᴅ ʙʀᴀᴠᴇʀʏ ᴀɴᴅ ꜱᴀᴄʀɪꜰɪᴄᴇ ᴍᴀᴅᴇ ʜɪᴍ ᴀ ꜱʏᴍʙᴏʟ ᴏꜰ ᴄᴏᴜʀᴀɢᴇ."
},

lakshmibai:{
title:"ʀᴀɴɪ ʟᴀᴋꜱʜᴍɪʙᴀɪ",
image:"images/lakshmibai.jpg",
text:"ʀᴀɴɪ ʟᴀᴋꜱʜᴍɪʙᴀɪ ᴏꜰ ᴊʜᴀɴꜱɪ ᴡᴀꜱ ᴏɴᴇ ᴏꜰ ᴛʜᴇ ɢʀᴇᴀᴛᴇꜱᴛ ʜᴇʀᴏᴇꜱ ᴏꜰ 1857. ꜱʜᴇ ꜰᴏᴜɢʜᴛ ᴡɪᴛʜ ᴇxᴛʀᴀᴏʀᴅɪɴᴀʀʏ ᴠᴀʟᴏᴜʀ ᴀɴᴅ ʙᴇᴄᴀᴍᴇ ᴀɴ ᴇᴛᴇʀɴᴀʟ ꜱʏᴍʙᴏʟ ᴏꜰ ᴡᴏᴍᴇɴ'ꜱ ʙʀᴀᴠᴇʀʏ."
},

ambedkar:{
title:"ᴅʀ. ʙ. ʀ. ᴀᴍʙᴇᴅᴋᴀʀ",
image:"images/ambedkar.jpg",
text:"ᴅʀ. ʙ. ʀ. ᴀᴍʙᴇᴅᴋᴀʀ ᴡᴀꜱ ᴛʜᴇ ᴄʜɪᴇꜰ ᴀʀᴄʜɪᴛᴇᴄᴛ ᴏꜰ ᴛʜᴇ ᴄᴏɴꜱᴛɪᴛᴜᴛɪᴏɴ ᴏꜰ ɪɴᴅɪᴀ. ʜᴇ ᴅᴇᴅɪᴄᴀᴛᴇᴅ ʜɪꜱ ʟɪꜰᴇ ᴛᴏ ꜱᴏᴄɪᴀʟ ᴊᴜꜱᴛɪᴄᴇ, ᴇQᴜᴀʟɪᴛʏ ᴀɴᴅ ᴇᴅᴜᴄᴀᴛɪᴏɴ, ʟᴇᴀᴠɪɴɢ ᴀ ʟᴀꜱᴛɪɴɢ ʟᴇɢᴀᴄʏ ꜰᴏʀ ᴍᴏᴅᴇʀɴ ɪɴᴅɪᴀ."
},

kalam:{
title:"ᴅʀ. ᴀ. ᴘ. ᴊ. ᴀʙᴅᴜʟ ᴋᴀʟᴀᴍ",
image:"images/kalam.jpg",
text:"ᴅʀ. ᴀ. ᴘ. ᴊ. ᴀʙᴅᴜʟ ᴋᴀʟᴀᴍ, ᴋɴᴏᴡɴ ᴀꜱ ᴛʜᴇ 'ᴍɪꜱꜱɪʟᴇ ᴍᴀɴ ᴏꜰ ɪɴᴅɪᴀ', ᴡᴀꜱ ᴀ ɢʀᴇᴀᴛ ꜱᴄɪᴇɴᴛɪꜱᴛ, ᴘʀᴇꜱɪᴅᴇɴᴛ ᴀɴᴅ ᴛᴇᴀᴄʜᴇʀ. ʜᴇ ɪɴꜱᴘɪʀᴇᴅ ᴍɪʟʟɪᴏɴꜱ ᴏꜰ ꜱᴛᴜᴅᴇɴᴛꜱ ᴛᴏ ᴅʀᴇᴀᴍ ʙɪɢ ᴀɴᴅ ꜱᴇʀᴠᴇ ᴛʜᴇ ɴᴀᴛɪᴏɴ."
}

};

/* ======================================
   OPEN FIGHTER MODAL
====================================== */

document.querySelectorAll(".fighter-card button").forEach(button=>{

button.addEventListener("click",()=>{

const fighter=fighters[button.dataset.fighter];

modalImage.src=fighter.image;

modalTitle.innerHTML=fighter.title;

modalText.innerHTML=fighter.text;

fighterModal.style.display="flex";

document.body.style.overflow="hidden";

});

});

/* ======================================
   CLOSE MODAL
====================================== */

closeModal.onclick=()=>{

fighterModal.style.display="none";

document.body.style.overflow="auto";

};

window.onclick=(e)=>{

if(e.target===fighterModal){

fighterModal.style.display="none";

document.body.style.overflow="auto";

}

};

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

fighterModal.style.display="none";

document.body.style.overflow="auto";

}

});

/* ======================================
   ⏳ LIVE COUNTDOWN
====================================== */

const targetDate=new Date("August 15, 2026 00:00:00").getTime();

function updateCountdown(){

const now=new Date().getTime();

const distance=targetDate-now;

if(distance<=0){

document.getElementById("days").innerHTML="00";
document.getElementById("hours").innerHTML="00";
document.getElementById("minutes").innerHTML="00";
document.getElementById("seconds").innerHTML="00";

startCelebration();

return;

}

const days=Math.floor(distance/(1000*60*60*24));
const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes=Math.floor((distance%(1000*60*60))/(1000*60));
const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").textContent=String(days).padStart(2,"0");
document.getElementById("hours").textContent=String(hours).padStart(2,"0");
document.getElementById("minutes").textContent=String(minutes).padStart(2,"0");
document.getElementById("seconds").textContent=String(seconds).padStart(2,"0");

}

setInterval(updateCountdown,1000);

updateCountdown();

/* ======================================
   🚀 EXPLORE BUTTON
====================================== */

exploreBtn.addEventListener("click",()=>{

document.getElementById("about").scrollIntoView({

behavior:"smooth"

});

});

/* ======================================
   🎆 PREMIUM CELEBRATION
====================================== */

function startCelebration(){

createFireworks();

createConfetti();

createBirds();

createClouds();

createParticles();

}

/* ======================================
   🎆 FIREWORKS
====================================== */

function createFireworks(){

setInterval(()=>{

const firework=document.createElement("div");

firework.className="firework";

firework.style.left=Math.random()*100+"vw";

firework.style.top=Math.random()*70+"vh";

firework.style.background=

`hsl(${Math.random()*360},100%,60%)`;

document.body.appendChild(firework);

setTimeout(()=>{

firework.remove();

},1200);

},600);

}

/* ======================================
   🎉 CONFETTI
====================================== */

function createConfetti(){

setInterval(()=>{

const confetti=document.createElement("div");

confetti.className="confetti";

confetti.style.left=Math.random()*100+"vw";

confetti.style.background=

`hsl(${Math.random()*360},100%,60%)`;

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},5000);

},150);

}

/* ======================================
   ✨ PARTICLES
====================================== */

function createParticles(){

setInterval(()=>{

const particle=document.createElement("div");

particle.className="particle";

particle.style.left=Math.random()*100+"vw";

particle.style.animationDuration=

(6+Math.random()*8)+"s";

document.body.appendChild(particle);

setTimeout(()=>{

particle.remove();

},12000);

},350);

}

/* ======================================
   ☁️ MOVING CLOUDS
====================================== */

function createClouds(){

for(let i=0;i<6;i++){

const cloud=document.createElement("div");

cloud.className="cloud";

cloud.innerHTML="☁️";

cloud.style.top=(5+i*12)+"%";

cloud.style.left=(-200-(i*120))+"px";

cloud.style.fontSize=(40+Math.random()*40)+"px";

cloud.style.animationDuration=(35+Math.random()*25)+"s";

document.body.appendChild(cloud);

}

}

/* ======================================
   🕊️ FLYING BIRDS
====================================== */

function createBirds(){

for(let i=0;i<8;i++){

const bird=document.createElement("div");

bird.className="bird";

bird.innerHTML="🕊️";

bird.style.top=(10+i*8)+"%";

bird.style.left=(-150-(i*100))+"px";

bird.style.animationDelay=(i*2)+"s";

bird.style.animationDuration=(18+Math.random()*8)+"s";

document.body.appendChild(bird);

}

}

/* ======================================
   🇮🇳 DIGITAL PLEDGE
====================================== */

pledgeBtn.onclick=()=>{

pledgeBtn.innerHTML="✅ ɪ ᴘʟᴇᴅɢᴇ ᴛᴏ ꜱᴇʀᴠᴇ ɪɴᴅɪᴀ";

pledgeBtn.disabled=true;

alert("🇮🇳 ᴛʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ᴛᴀᴋɪɴɢ ᴛʜᴇ ᴅɪɢɪᴛᴀʟ ᴘʟᴇᴅɢᴇ!");

};

/* ======================================
   📤 SHARE WEBSITE
====================================== */

async function shareWebsite(){

if(navigator.share){

try{

await navigator.share({

title:"🇮🇳 ʜᴀᴘᴘʏ ɪɴᴅᴇᴘᴇɴᴅᴇɴᴄᴇ ᴅᴀʏ",

text:"ᴄᴇʟᴇʙʀᴀᴛᴇ ɪɴᴅᴇᴘᴇɴᴅᴇɴᴄᴇ ᴅᴀʏ ᴡɪᴛʜ ᴛʜɪꜱ ᴘʀᴇᴍɪᴜᴍ ᴡᴇʙꜱɪᴛᴇ 🇮🇳",

url:location.href

});

}catch(e){}

}

}

/* ======================================
   🎵 MOBILE AUTOPLAY FIX
====================================== */

document.addEventListener("click",()=>{

if(bgMusic.paused){

bgMusic.play().catch(()=>{});

}

},{once:true});

/* ======================================
   🚀 START EFFECTS
====================================== */

createClouds();

createBirds();

createParticles();

updateCountdown();


