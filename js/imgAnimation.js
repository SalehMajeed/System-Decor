document.addEventListener('DOMContentLoaded', function() {
    let parents = document.querySelectorAll('.image-container');
  
    parents.forEach(parent => {
      let observer = new IntersectionObserver(onIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
      });
  
      function onIntersection(entries) {
        if (entries[0].isIntersecting) {
          revealCurtainsSequentially(parent);
          observer.disconnect();
        }
      }
  
      function revealCurtainsSequentially(parent) {
        let wrappers = parent.querySelectorAll('.image-wrapper');
        let index = 0;
  
        function revealNextCurtain() {
          if (index < wrappers.length) {
            let wrapper = wrappers[index];
            let image = wrapper.querySelector('.lazyload');
            let curtain = wrapper.querySelector('.curtain');
            let src = image.getAttribute('data-src');
            
            let img = new Image();
            img.src = src;
            img.onload = function() {
              image.src = src;
              image.classList.add('loaded');
              curtain.classList.add('reveal');
              index++;
              setTimeout(revealNextCurtain, 500); 
            };
          }
        }
  
        revealNextCurtain();
      }
  
      observer.observe(parent);
    });
  });
  