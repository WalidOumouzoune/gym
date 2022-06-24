function fnBrowserDetect() {
    let userAgent = navigator.userAgent;
    let browserName;
    if (userAgent.match(/firefox|fxios/i)) {
        browserName = "firefox";
        document.querySelectorAll('p').forEach(e => e.style.opacity = "0.8");
    }
}

import ScrollTop from 'https://cdn.skypack.dev/smooth-scroll-top';
const scrollTop = new ScrollTop();
scrollTop.init();

import confetti from "https://cdn.skypack.dev/canvas-confetti";
window.party = function () {
    confetti();
};

window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})

