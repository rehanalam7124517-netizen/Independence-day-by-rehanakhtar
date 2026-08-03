/* ======================================
   🇮🇳 INDEPENDENCE DAY QUIZ
====================================== */

const quizData=[

{
question:"ɪɴᴅɪᴀ ʙᴇᴄᴀᴍᴇ ɪɴᴅᴇᴘᴇɴᴅᴇɴᴛ ᴏɴ?",
options:[
"14 ᴀᴜɢᴜꜱᴛ 1947",
"15 ᴀᴜɢᴜꜱᴛ 1947",
"26 ᴊᴀɴᴜᴀʀʏ 1950",
"2 ᴏᴄᴛᴏʙᴇʀ 1948"
],
answer:1
},

{
question:"ᴡʜᴏ ɪꜱ ᴋɴᴏᴡɴ ᴀꜱ ᴛʜᴇ ꜰᴀᴛʜᴇʀ ᴏꜰ ᴛʜᴇ ɴᴀᴛɪᴏɴ?",
options:[
"ʙʜᴀɢᴀᴛ ꜱɪɴɢʜ",
"ɢᴀɴᴅʜɪ",
"ʙᴏꜱᴇ",
"ᴀᴢᴀᴅ"
],
answer:1
},

{
question:"ɴᴀᴛɪᴏɴᴀʟ ᴀɴᴛʜᴇᴍ ᴏꜰ ɪɴᴅɪᴀ?",
options:[
"ᴠᴀɴᴅᴇ ᴍᴀᴛᴀʀᴀᴍ",
"ᴊᴀɴ ɢᴀɴ ᴍᴀɴ",
"ꜱᴀʀᴇ ᴊᴀʜᴀɴ ꜱᴇ ᴀᴄʜᴀ",
"ᴀᴇ ᴍᴇʀᴇ ᴡᴀᴛᴀɴ"
],
answer:1
},

{
question:"ᴀꜱʜᴏᴋᴀ ᴄʜᴀᴋʀᴀ ʜᴀꜱ ʜᴏᴡ ᴍᴀɴʏ ꜱᴘᴏᴋᴇꜱ?",
options:[
"20",
"22",
"24",
"26"
],
answer:2
},

{
question:"ɴᴇᴛᴀᴊɪ ɪꜱ?",
options:[
"ɢᴀɴᴅʜɪ",
"ʙʜᴀɢᴀᴛ",
"ʙᴏꜱᴇ",
"ᴋᴀʟᴀᴍ"
],
answer:2
},

{
question:"Qᴜɪᴛ ɪɴᴅɪᴀ ᴍᴏᴠᴇᴍᴇɴᴛ ʙᴇɢᴀɴ ɪɴ?",
options:[
"1940",
"1941",
"1942",
"1947"
],
answer:2
},

{
question:"ɪɴᴅɪᴀɴ ᴄᴏɴꜱᴛɪᴛᴜᴛɪᴏɴ ᴄᴀᴍᴇ ɪɴᴛᴏ ꜰᴏʀᴄᴇ ᴏɴ?",
options:[
"15 ᴀᴜɢ",
"26 ᴊᴀɴ",
"2 ᴏᴄᴛ",
"1 ᴍᴀʏ"
],
answer:1
},

{
question:"ɴᴀᴛɪᴏɴᴀʟ ᴀɴɪᴍᴀʟ?",
options:[
"ʟɪᴏɴ",
"ᴛɪɢᴇʀ",
"ᴘᴇᴀᴄᴏᴄᴋ",
"ᴇʟᴇᴘʜᴀɴᴛ"
],
answer:1
},

{
question:"ɴᴀᴛɪᴏɴᴀʟ ꜰʟᴀɢ ʜᴀꜱ ʜᴏᴡ ᴍᴀɴʏ ᴄᴏʟᴏᴜʀꜱ?",
options:[
"2",
"3",
"4",
"5"
],
answer:1
},

{
question:"ᴍɪꜱꜱɪʟᴇ ᴍᴀɴ ᴏꜰ ɪɴᴅɪᴀ?",
options:[
"ᴀᴍʙᴇᴅᴋᴀʀ",
"ʙᴏꜱᴇ",
"ᴋᴀʟᴀᴍ",
"ɢᴀɴᴅʜɪ"
],
answer:2
}

];

let currentQuestion=0;

let score=0;

/* ======================================
   QUIZ ENGINE
====================================== */

const quizContainer=document.getElementById("quizContainer");

function loadQuestion(){

const q=quizData[currentQuestion];

quizContainer.innerHTML=`

<div class="quiz-card">

<h3>Q${currentQuestion+1}. ${q.question}</h3>

<div class="quiz-options">

${q.options.map((option,index)=>`

<button class="quiz-option"

onclick="checkAnswer(${index})">

${option}

</button>

`).join("")}

</div>

<div class="quiz-progress">

${currentQuestion+1} / ${quizData.length}

</div>

</div>

`;

}

startQuiz.onclick=()=>{

currentQuestion=0;

score=0;

loadQuestion();

};


