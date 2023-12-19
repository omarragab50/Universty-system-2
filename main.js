let subMenu = document.getElementById("subMenu");
function toggleMenu () {
    subMenu.classList.toggle("open-menu");
}

const startingMinutes = 30;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);


function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds; 

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}


// up scroll

let span = document.querySelector(".up");

window.onscroll = function () {
    if (this.scrollY >= 800) {
        span.classList.add("show");
    }else {
        span.classList.remove("show");
    }
}


span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};