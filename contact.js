const callBtn = document.getElementById('call-btn');
const callBtnAfter = window.getComputedStyle(callBtn, "::after")
const header = document.getElementById("header")
const mobileMenuButton = document.getElementById("mobileMenuButton")

// console.log(callBtnAfter.borderRadius)
callBtn.addEventListener("hover", () => {

})

const menu = document.getElementById("menu")
const close = document.getElementById("close")

console.log(menu)
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

// const add = (a) => (b) => (c) => (d) => () => a + b + c + d

// console.log(add(5)(2)(4)(5)())


// const calc = {
//     total: 0,
//     add(a) {
//         this.total += a
//         return this
//     },
//     multiply(a) {
//         this.total *= a
//         return this
//     },
//     subtract(a) {
//         this.total -= a
//         return this
//     },
// }

// const result = calc.add(10).multiply(5).subtract(30).add(10)
// console.log(result.total)