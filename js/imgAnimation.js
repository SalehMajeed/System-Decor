document.addEventListener('DOMContentLoaded', function() {
    let parents = document.querySelectorAll('.image-container');
  
    parents.forEach(parent => {
      let observer = new IntersectionObserver(onIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust the threshold as needed
      });
  
      function onIntersection(entries) {
        if (entries[0].isIntersecting) {
          loadImagesSequentially(parent);
          observer.disconnect(); // Stop observing once images start loading
        }
      }
  
      function loadImagesSequentially(parent) {
        let images = parent.querySelectorAll('.lazyload');
        let index = 0;
  
        function loadNextImage() {
          if (index < images.length) {
            let image = images[index];
            let src = image.getAttribute('data-src');
            
            let img = new Image();
            img.src = src;
            img.onload = function() {
              image.src = src;
              image.classList.add('loaded');
              index++;
              setTimeout(loadNextImage, 300); // Delay between loading images
            };
          }
        }
  
        loadNextImage(); // Start loading the first image
      }
  
      observer.observe(parent);
    });
  });
  