// $(document).ready(function () {
//   const $steps = $(".step-0-3-1603");
//   const $points = $(".point-0-3-1610");
//   const $container = $(".desktopSteps-0-3-1602");

//   function updateSteps() {
//     const containerScrollTop = $container.scrollTop();
//     const containerHeight = $container.height();
//     const currentIndex = Math.round(containerScrollTop / (containerHeight / 6));

//     $steps.each(function (index) {
//       if (index === currentIndex) {
//         $(this).addClass("selected");
//         $points.eq(index).addClass("selected");
//       } else {
//         $(this).removeClass("selected");
//         $points.eq(index).removeClass("selected");
//       }
//     });
//   }

//   updateSteps();

//   $container.on("scroll", function () {
//     updateSteps();
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".step-0-3-1603");
  const points = document.querySelectorAll(".point-0-3-1610");
  const container = document.querySelector(".desktopSteps-0-3-1602");

  function updateSteps() {
    const containerScrollTop = container.scrollTop;
    const containerHeight = container.scrollHeight;
    const currentIndex = Math.round(containerScrollTop / (containerHeight / 8));

    steps.forEach(function (step, index) {
      if (index === currentIndex) {
        step.classList.add("selected");
        points[index].classList.add("selected");
      } else {
        step.classList.remove("selected");
        points[index].classList.remove("selected");
      }
    });
  }

  updateSteps();

  container.addEventListener("scroll", function () {
    updateSteps();
  });
});