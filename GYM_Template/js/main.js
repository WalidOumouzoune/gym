function fnBrowserDetect() {
    let userAgent = navigator.userAgent;
    let browserName;
    if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
        browserName = "firefox";
        document.querySelectorAll('p').forEach(e => e.style.opacity = "0.8");
        document.querySelector(".fire-fox-meassage").style = "display:block;"
    } else if (userAgent.match(/safari/i)) {
        browserName = "safari";
    } else if (userAgent.match(/opr\//i)) {
        browserName = "opera";
    } else if (userAgent.match(/edg/i)) {
        browserName = "edge";
    } else {
        browserName = "No browser detection";
    }
}

import ScrollTop from 'https://cdn.skypack.dev/smooth-scroll-top';
const scrollTop = new ScrollTop();
scrollTop.init();

window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})
