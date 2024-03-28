const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function circleChaptaKaro() {
  /* chapta krne vala pura nhi bna he bad me dkhege */
  //define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    minicirclefollower(xscale, yscale);
  });
}

function animateFirstPage() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  });
  tl.to(".boundingelem", {
    y: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
    stagger: 0.2,
  });
  tl.from(".herofooter", {
    y: -10,
    opacity: 0,
    delay: -1,
    duration: 1.5,
    ease: Expo.easeInOut,
  });
}

function minicirclefollower(xscale, yscale) {
  window.addEventListener("mousemove", function (det) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${det.clientX}px, ${det.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

circleChaptaKaro();
minicirclefollower();
animateFirstPage();

// img ko rotate krna he

document.querySelectorAll(".elem").forEach(function (elem) {
  elem.addEventListener("mousemove", function (dets) {
    var deff = dets.clientY - elem.getBoundingClientRect().top;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power1,
      top: deff,
      left: dets.clientX,
    });
  });
});
