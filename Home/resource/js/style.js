
let down = document.getElementById("down");
down.addEventListener('click', sc);

function sc() {
    window.location.href = '#login';
};

let wave1 = document.getElementById("wave1");
let wave2 = document.getElementById("wave2");
let wave3 = document.getElementById("wave3");
let wave4 = document.getElementById("wave4");

let parallax = () => {
    let value = window.scrollY;

    wave1.style.backgroundPositionX = 400 + value * 4 + "px";
    wave2.style.backgroundPositionX = 300 + value * 3 + "px";
    wave3.style.backgroundPositionX = 200 + value * 2 + "px";
    wave4.style.backgroundPositionX = 100 + value * 1 + "px";
};

window.addEventListener('scroll', parallax);

let homeAlt = document.getElementById("homeAlt");
let loginAlt = document.getElementById("loginAlt");

homeAlt.addEventListener('click', function() {
    window.scrollTo(0, 0);
});
loginAlt.addEventListener('click', function() {
    window.location.href = '#login';
});

document.addEventListener('mousemove', harallax);
function harallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed)/120
        const y = (window.innerHeight - e.pageY * speed)/120

        layer.style.transform =  `translateX(${x}px) translateY(${y}px)`
    });
}