const headerNav = $("#header");

function eventFn(e) {
  if ($(e.target).text() == "MENU") {
    headerNav.children().eq(1).css("right", "0");
    $(e.target).text("CLOSE");
  } else if ($(e.target).text() == "CLOSE") {
    headerNav.children().eq(1).css("right", "-100%");
    $(e.target).text("MENU");
  }
}

headerNav.on("click", eventFn);


document.querySelector('.custom-dropdown').addEventListener('click', function() {
    this.querySelector('.dropdown-menu').style.display = 
      this.querySelector('.dropdown-menu').style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', function(event) {
    if (!event.target.closest('.custom-dropdown')) {
      document.querySelector('.dropdown-menu').style.display = 'none';
    }
  });

  $(document).ready(function() {
    const $steps = $('.step-0-3-1603');
    const $points = $('.point-0-3-1610');
    const $container = $('.desktopSteps-0-3-1602');
    const $text = $(".text-0-3-586")
    
    function updateSteps() {
      const containerScrollTop = $container.scrollTop();
      const containerHeight = $container[0].scrollHeight;
      
      
      const currentIndex = Math.round(containerScrollTop / (containerHeight / 9));
      
      $steps.each(function(index) {
        $(this).toggleClass('selected', index === currentIndex);
      });
      
      $points.each(function(index) {
        $(this).toggleClass('selected', index === currentIndex);
      });
    }
    
    updateSteps();
    
    $container.on('scroll', function() {
      updateSteps();
    });
  });
  