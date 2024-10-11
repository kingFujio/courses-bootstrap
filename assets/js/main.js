const btnToggle = document.querySelector(".toggle");
const mobileHeaderEL = document.querySelector(".mobile-header");
// add event to toggle button
btnToggle.addEventListener("click", function () {
  //   alert("stop");
  //   mobileHeaderEL.classList.add("hide-show");
  mobileHeaderEL.classList.toggle("hide-show");
});
