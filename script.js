"use strict";

const body = document.querySelectorAll(
  ".section__feature_boundless-guide-body"
);

const btns = document.querySelectorAll(
  ".section__feature_boundless-guide-item"
);

btns.forEach((el) => {
  el.addEventListener("click", (e) => {
    const target = e.currentTarget;
    const clear = target
      .querySelector(".section__feature_boundless-guide-body")
      .classList.contains("active");
    if (clear) {
      return target
        .querySelector(".section__feature_boundless-guide-body")
        .classList.remove("active");
    }
    body.forEach((ele) => ele.classList.remove("active"));

    target
      .querySelector(".section__feature_boundless-guide-body")
      .classList.toggle("active");
  });
});

console.log("hi there");
