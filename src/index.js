import initTilt from "./js/tilt";
import initSr from "./js/sr";

import "./style/main.scss";

particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});

$('a[href^="#"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    );
  }
});

initSr();
initTilt();

/* ---- particles.js config ---- */

particlesJS.load("particles.js");
