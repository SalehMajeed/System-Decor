$(document).ready(function () {
  const $steps = $(".step-0-3-1603");
  const $points = $(".point-0-3-1610");
  const $container = $(".desktopSteps-0-3-1602");

  function updateSteps() {
    const containerScrollTop = $container.scrollTop();
    const containerHeight = $container.height();
    const currentIndex = Math.round(containerScrollTop / (containerHeight / 6));

    $steps.each(function (index) {
      if (index === currentIndex) {
        $(this).addClass("selected");
        $points.eq(index).addClass("selected");
      } else {
        $(this).removeClass("selected");
        $points.eq(index).removeClass("selected");
      }
    });
  }

  updateSteps();

  $container.on("scroll", function () {
    updateSteps();
  });
});
