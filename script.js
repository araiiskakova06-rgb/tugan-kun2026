const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const music = document.getElementById("music");

const heroBlock = document.querySelector(".hero");

openBtn.onclick = () => {
    music.play().catch(() => {});
    
    heroBlock.classList.add("fade-out");
    
    setTimeout(() => {
        heroBlock.style.display = "none";
        autoScroll();
    }, 1000);
};


function autoScroll(){

    let speed = 4;

    let scroll = setInterval(()=>{

        window.scrollBy(0,speed);

        if(window.innerHeight + window.scrollY >= document.body.scrollHeight){

            clearInterval(scroll);

        }

    },20);

}
// ===== Таймер =====
const targetDate = new Date("2026-07-18T18:00:00").getTime();
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

setInterval(() => {

 targetDate = new Date("2026-07-18T18:00:00").getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if(distance < 0) return;

    if(daysEl) daysEl.textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
    if(hoursEl) hoursEl.textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if(minutesEl) minutesEl.textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    if(secondsEl) secondsEl.textContent = Math.floor((distance % (1000 * 60)) / 1000);

}, 1000);

// ===== Количество гостей =====

let people = 1;

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const count = document.getElementById("count");

plus.onclick = () => {

    people++;

    count.textContent = people;

}

minus.onclick = () => {

    if(people > 1){

        people--;

        count.textContent = people;

    }

}


// ===== WhatsApp =====

document.getElementById("sendBtn").onclick = () => {

    const name = document.getElementById("guestName").value;

    const answer = document.querySelector("input[name='answer']:checked");

    if(name === ""){

        alert("Атыңызды жазыңыз");

        return;

    }

    if(!answer){

        alert("Жауапты таңдаңыз");

        return;

    }

    const phone = "77771599002"; // ← потом замени на номер заказчика

    const message =
`Сәлеметсіз бе!

Аты-жөнім: ${name}

Жауап:
${answer.value}

Адам саны:
${people}`;

    window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
        "_blank"
    );

};
