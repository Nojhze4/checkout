"use strict";
(() => {
  const track = document.querySelector("#methods-swiper .swiper-wrapper");
  const prev = document.getElementById("methods-prev");
  const next = document.getElementById("methods-next");
  if (!track || !prev || !next) return;

  const step = 240;
  const goPrev = () => track.scrollBy({ left: -step, behavior: "smooth" });
  const goNext = () => track.scrollBy({ left: step, behavior: "smooth" });

  prev.addEventListener("click", goPrev);
  next.addEventListener("click", goNext);

  const update = () => {
    prev.disabled = track.scrollLeft <= 0;
    next.disabled =
      track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
  };
  track.addEventListener("scroll", update);
  window.addEventListener("load", update);
})();
