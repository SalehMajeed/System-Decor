const header = $("#header");

function eventFn(e) {
  if ($(e.target).text() == "MENU") {
    header.children().eq(1).css("right", "0");
    $(e.target).text("CLOSE");
  } else if ($(e.target).text() == "CLOSE") {
    header.children().eq(1).css("right", "-100%");
    $(e.target).text("MENU");
  }
}

header.on("click", eventFn);


document.querySelector('.custom-dropdown').addEventListener('click', function() {
    this.querySelector('.dropdown-menu').style.display = 
      this.querySelector('.dropdown-menu').style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', function(event) {
    if (!event.target.closest('.custom-dropdown')) {
      document.querySelector('.dropdown-menu').style.display = 'none';
    }
  });
// let footer = document.getElementById("footer")

// function eventFn(e) {
//   console.dir(e.target)
//   if(e.target.innerText == "Our Culture"){
//     footer.children[1].children[1].children[1].style.height = "400px"
//   }else{
//     console.log("this is not target")
//   }
// }

// footer.addEventListener("click", eventFn)