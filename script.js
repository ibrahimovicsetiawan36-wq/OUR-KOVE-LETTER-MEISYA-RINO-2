// =============================
// LOVE LETTER WEBSITE
// =============================

const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const envelope = document.getElementById("envelopeSection");
const gallery = document.getElementById("gallery");
const love = document.getElementById("love");
const ending = document.getElementById("ending");

const nextGallery = document.getElementById("nextGallery");
const nextLove = document.getElementById("nextLove");
const finish = document.getElementById("finish");

const music = document.getElementById("music");

const typing = document.getElementById("typing");

const letter = `

Hai Meisya ❤️

Terima kasih sudah hadir di hidupku.

Aku mungkin bukan laki-laki yang sempurna.

Tetapi setiap hari aku selalu belajar menjadi seseorang yang pantas untuk memilikimu.

Bersamamu aku belajar bahwa kebahagiaan ternyata sesederhana melihatmu tersenyum.

Semoga kita selalu saling menjaga.

Semoga hubungan ini dipenuhi kebahagiaan.

Aku ingin terus berjalan bersamamu.

I Love You More Than Yesterday ❤️

- Muhammad Aurellino Ibrahimovic Setiawan

`;

let i = 0;

function typeWriter(){

    if(i < letter.length){

        typing.innerHTML += letter.charAt(i);

        i++;

        setTimeout(typeWriter,45);

    }

}

openBtn.onclick = ()=>{

    opening.classList.add("hidden");

    envelope.classList.remove("hidden");

    music.play();

    typeWriter();

}

nextGallery.onclick = ()=>{

    envelope.classList.add("hidden");

    gallery.classList.remove("hidden");

}

nextLove.onclick = ()=>{

    gallery.classList.add("hidden");

    love.classList.remove("hidden");

}

finish.onclick = ()=>{

    love.classList.add("hidden");

    ending.classList.remove("hidden");

}

// ===========================
// Hitung Hari Bersama
// ===========================

const startDate = new Date("2025-04-28");

const today = new Date();

const diff = today - startDate;

const days = Math.floor(diff/(1000*60*60*24));

document.getElementById("daysTogether").innerHTML =

"❤️ Sudah bersama selama <br><h1>"+days+" Hari</h1>";

// ===========================
// Efek Hati Berjatuhan
// ===========================

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-30px";

heart.style.fontSize=Math.random()*20+20+"px";

heart.style.animation="fall 6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(createHeart,500);

// ===========================
// Tambahkan CSS Animasi
// ===========================

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{

transform:translateY(-10px);

opacity:1;

}

100%{

transform:translateY(110vh);

opacity:0;

}

}

`;

document.head.appendChild(style);
