const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const music = document.getElementById("music");
const heroBlock = document.querySelector(".hero");

if (openBtn) {
    openBtn.onclick = () => {
        if (music) music.play().catch(() => {});
        if (heroBlock) heroBlock.classList.add("fade-out");
        
        setTimeout(() => {
            if (heroBlock) heroBlock.style.display = "none";
            autoScroll();
        }, 1000);
    };
}
function autoScroll(){
    const firstPage = document.querySelector(".invitation");
    if (firstPage) {
        firstPage.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}



// ===== Таймер =====
const targetDate = new Date("2026-07-18T18:00:00").getTime();
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

if (daysEl || hoursEl || minutesEl || secondsEl) {
    setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if(distance < 0) return;

        if(daysEl) daysEl.textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
        if(hoursEl) hoursEl.textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if(minutesEl) minutesEl.textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        if(secondsEl) secondsEl.textContent = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
}

// ===== Количество гостей =====
let people = 1;
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const count = document.getElementById("count");

if (plus) {
    plus.onclick = () => {
        people++;
        if (count) count.textContent = people;
    };
}

if (minus) {
    minus.onclick = () => {
        if(people > 1){
            people--;
            if (count) count.textContent = people;
        }
    };
}

// ===== WhatsApp =====
const sendBtn = document.getElementById("sendBtn");
if (sendBtn) {
    sendBtn.onclick = () => {
        const name = document.getElementById("guestName")?.value || "";
        const answer = document.querySelector("input[name='answer']:checked");

        if(name.trim() === ""){
            alert("Aтыңызды жазыңыз");
            return;
        }

        if(!answer){
            alert("Жауапты таңдаңыз");
            return;
        }

        const phone = "77771599002"; // Номер заказчика
        const message = `Сәлеметсіз бе!\n\nАты-жөнім: ${name}\n\nЖауап:\n${answer.value}\n\nАдам саны:\n${people}`;

        window.open(
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };
}
