/* ======================================
   🇮🇳 PREMIUM ANIMATIONS
====================================== */

/* ✨ SCROLL REVEAL */

const revealElements=document.querySelectorAll("section,.glass,.fighter-card,.timeline-card,.india-card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

revealElements.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(60px)";

item.style.transition="all .8s ease";

observer.observe(item);

});

/* ======================================
   🎊 BUTTON RIPPLE
====================================== */

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

ripple.className="ripple";

const size=Math.max(this.clientWidth,this.clientHeight);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=(e.offsetX-size/2)+"px";
ripple.style.top=(e.offsetY-size/2)+"px";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* ======================================
   🇮🇳 TIRANGA GLOW
====================================== */

setInterval(()=>{

document.body.style.boxShadow=

"0 0 80px rgba(255,153,51,.25),0 0 120px rgba(19,136,8,.25)";

setTimeout(()=>{

document.body.style.boxShadow="none";

},1200);

},5000);

/* ======================================
   ⭐ RANDOM STARS
====================================== */

for(let i=0;i<80;i++){

const star=document.createElement("div");

star.className="particle";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*10+"s";

document.body.appendChild(star);

}


