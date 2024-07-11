const header = document.getElementById("header")
const menu = document.getElementById("menu")
const close = document.getElementById("close")
const sections = document.querySelectorAll("section")


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

window.onscroll = ()=>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-400;
        let height = sec.offsetHeight;
console.log(sec, sec.offsetTop, sec.offsetHeight)
        if(top >= offset  ){
            sec.classList.add("showAnimation")
        }
    })

}
