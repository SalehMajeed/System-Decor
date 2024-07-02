const header = document.getElementById("header")

function eventFn(e) {
    if (e.target.textContent == "SAMPLES0") {
        header.children[1].style.right = "0"
    } else if (e.target.tagName == "I") {
        header.children[1].style.right = "-100%"
    }else{
        return
    }
}
header.addEventListener("click", eventFn)