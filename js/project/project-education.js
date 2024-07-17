const item = document.querySelectorAll(".item")
const accesskey = 'HQWpX8bAShdDrcnzLxeomlUlKYlAXRuOnUjMU1mWszo'
const imageGallery = document.getElementById("imageGallery")
const loadButton = document.querySelector(".loadButton")

const header = document.getElementById("header")
const menu = document.getElementById("menu")
const close = document.getElementById("close")

let page = 1;
var open = true;
item.forEach(i => {
    const child = i.firstElementChild

    i.addEventListener("click", e => {
        console.log(child)
        if (!open) {
            open = true;
            i.classList.add("open")
            child.classList.add("open")
        }
        else {
            open = false;
            child.classList.remove("open")
            i.classList.remove("open")
        }
    })
})

async function imageGen() {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=interior&client_id=${accesskey}`)
    const data = await response.json();
    const images = data.results
    console.log(images)

    images.map(res => {
        let imageContainer = document.createElement('div')
        imageContainer.classList.add('imageBox')
        let image = document.createElement('img')
        image.src = res.urls.small
        image.alt = res.alt_description
        let imageLink = document.createElement('a')
        imageLink.textContent = res.alt_description

        imageContainer.appendChild(image)
        imageContainer.appendChild(imageLink)
        imageGallery.appendChild(imageContainer)

        console.log(imageGallery.innerHTML)

    });

    page++;
}

imageGen()

loadButton.addEventListener('click', () => {

    imageGen()
})



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
