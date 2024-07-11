
const header = document.getElementById("header")
const menu = document.getElementById("menu")
const close = document.getElementById("close")


menu.addEventListener('click', () => {
    menu.style.transform = "translate(0,-100%)"
    close.style.transform = "translate(0,-100%)"
    header.style.height = "60px"
    header.style.padding = "10px 0"
})
close.addEventListener('click', () => {
    menu.style.transform = "translate(0,0%)"
    console.log(menu.style.transform)
    close.style.transform = "translate(0,0%)"
    header.style.height = "73px"
    header.style.padding = "5px 0"
})
