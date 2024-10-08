async function navData() {
    const pathUrl = originDirectory + "/json/nav-data.json"
    return (await fetch(pathUrl)).json()
}

console.log(navData())

const navHeader = document.getElementById("header");
const sidebar = document.getElementById("sidebar");
const firstMobileMenu = document.getElementById("firstMobileMenu")
const secondMobileMenu = document.getElementById("secondMobileMenu")

const firstSidebar = document.createElement("div");
firstSidebar.classList.add("first__sidebar");

const firstSidebarMobile = document.createElement("div");
firstSidebarMobile.classList.add("first__sidebar__mobile");

const secondSidebar = document.createElement("div");
secondSidebar.classList.add("second__sidebar");
const secondSidebar__mobile = document.createElement("div");
secondSidebar__mobile.classList.add("second__sidebar__mobile");
const thirdSidebar = document.createElement("div");
thirdSidebar.classList.add("third__sidebar");
const fourthSidebar = document.createElement("div");
fourthSidebar.classList.add("fourth__sidebar");

const fourthLi = document.querySelector(".fourth__sidebarLi")

let closeBtn1 = document.createElement("div");
closeBtn1.classList.add("sidebar__close", "close__btn");

let closeBtn2 = document.createElement("div");
closeBtn2.classList.add("sidebar__close", "close__btn");

let closeBtn3 = document.createElement("div");
closeBtn3.classList.add("sidebar__close", "close__btn");

let isShown = false

let preValue = null;
let pre1Value = null;
let pre2Value = null
let targetId = null;


function updateSelectedLi(selectedLi) {
    const allLis = firstSidebar.querySelectorAll('li');
    allLis.forEach(li => li.classList.remove('selected__li'));
    selectedLi.classList.add('selected__li');
}


const showThirdSidebar = () => {
    if (!thirdSidebar.classList.contains('transform')) {
        thirdSidebar.classList.add('transform');
    }
};

const showFourthSidebar = () => {
    if (!fourthSidebar.classList.contains('transform')) {
        fourthSidebar.classList.add('transform');
    }
}
const closeSidebar = () => {
    document.querySelector(".sidebar").style.visibility = "hidden"
    document.querySelector('.overlay').style.visibility = "hidden";
}

const menuCloseFn = () => {
    console.log('hello')
    document.querySelector('#menu').style.transform = "translate(0,0%)"
    document.querySelector('#close').style.transform = "translate(0,0%)"
    document.querySelector('.first__sidebar__mobile').style.transform = 'translateX(100%)'
    document.querySelector('.second__sidebar__mobile').style.transform = 'translateX(100%)'
    document.querySelectorAll('.mobileSideMenu').forEach(elem => {
        elem.style.visibility = "hidden";
    })
}

document.querySelector('.overlay').addEventListener('click', closeSidebar)

navHeader.addEventListener("click", eventFn)
function eventFn(e) {
    targetId = e.target.id;
    thirdSidebar.classList.remove("transform")
    if (e.target.classList.contains("sidebar__links")) {
        preValue = e.target;
        updateSelectedLi(e.target);
        document.querySelector('.overlay').style.visibility = "visible";

        navData().then((data) => {
            createElements(data);
            firstMenuFn(data)
            secondFn(data[e.target.id]);
            let item = firstSidebar.querySelectorAll("li")
            item.forEach((li) => {
                if (targetId == li.id) {
                    li.classList.add("selected__li")
                } else {
                    li.classList.remove("selected__li")
                }
            })
            // sidebar.classList.add("sidebar")
            document.querySelector(".sidebar").style.visibility = "visible"
        });

    }
    secondSidebar.addEventListener("mouseover", hoverEvent);
    function hoverEvent(e) {


        if (e.target.tagName !== "LI") {
            return
        }
        fourthSidebar.classList.remove("transform")
        const items = document.querySelectorAll(".second__sidebarLi")
        items.forEach((li, index) => {

            li.classList.remove("selected__li")
            li.classList.add("unSelected__li")
            e.target.classList.add("selected__li")
            e.target.classList.remove("unSelected__li")
            const itemList = Array.from(items)
            const itemIndex = itemList.indexOf(e.target)

            if (index >= 0) {
                if (li === items[itemIndex - 1]) {
                    li.classList.add('hide-border-bottom');
                } else {
                    li.classList.remove('hide-border-bottom');
                }
            }

        })
        if (preValue.id !== 'About') {

            if (pre1Value !== e.target.children[0]) {
                navData().then((data) => {
                    thirdFn(data[preValue.id][e.target.children[0].textContent], e.target.children[0].textContent)
                })
            }

        }
        pre1Value = e.target.children[0];



    }

    thirdSidebar.addEventListener("mouseover", hover1Event);
    function hover1Event(e) {
        // thirdSidebar.style.animationPlayState = "puased"
        if (e.target.tagName !== "LI") {
            return
        }
        const items = document.querySelectorAll(".third__sidebarLi")
        items.forEach((li, index) => {
            li.classList.remove("selected__li")
            li.classList.add("unSelected__li")
            e.target.classList.add("selected__li")
            e.target.classList.remove("unSelected__li")

            const itemList = Array.from(items)
            const itemIndex = itemList.indexOf(e.target)

            if (index >= 0) {
                if (li === items[itemIndex - 1]) {
                    li.classList.add('hide-border-bottom');
                } else {
                    li.classList.remove('hide-border-bottom');
                }
            }
        })

        if (pre2Value !== e.target) {
            navData().then((data) => {
                fourthFn(data[preValue.id][pre1Value.textContent][e.target.children[0].children[0].textContent])
            })
        }

        pre2Value = e.target;
    }
    firstMobileMenu.addEventListener("click", mobileMenuEvent)
    function mobileMenuEvent(e) {
        if (e.target.tagName !== "LI") {
            return
        }
        navData().then((data) => {
            secondMobileFn(data[e.target.children[0].textContent])
        })
        secondMobileMenu.style.visibility = 'visible'
        document.querySelector('.second__sidebar__mobile').style.transform = 'translateX(0%)'
    }
    firstSidebar.addEventListener("click", sidebarEvent)
    function sidebarEvent(e) {
        if (e.target.tagName !== "LI") {
            return
        }
        thirdSidebar.classList.remove("transform")
        preValue = e.target
        updateSelectedLi(e.target);

        navData().then((data) => {
            secondFn(data[e.target.textContent]);
        })
        secondSidebar.addEventListener("mouseover", hoverEvent);
        function hoverEvent(e) {
            if (preValue.id !== "About") {
                if (e.target.tagName !== "LI") {
                    return
                }
                fourthSidebar.classList.remove("transform")
                if (pre1Value !== e.target.children[0]) {
                    navData().then((data) => {
                        thirdFn(data[preValue.id][e.target.children[0].textContent], e.target.children[0].textContent)
                    })
                }
                pre1Value = e.target.children[0];
            }
        }
        thirdSidebar.addEventListener("mouseover", hover1Event);
        function hover1Event(e) {
            if (e.target.tagName !== "LI") {
                return
            }
            if (e.target.tagName !== "h5") {
                return
            }
            let target = e.target

            if (pre2Value !== target) {
                navData().then((data) => {
                    fourthFn(data[preValue.id][pre1Value.textContent][e.target.children[0].children[0].textContent])
                })
            }

            pre2Value = target;
        }

    }
}

items.forEach(item => {

    li.addEventListener('mouseleave', () => {
        // Remove all classes when the mouse leaves the item
        items.forEach(li => li.classList.remove('hide-border-bottom'));
    });

})
secondSidebar.addEventListener("mouseleave", (e) => {
    if (e.target.tagName !== 'LI') {
        return
    }
    if (e.target.tagName === "LI") {
        pre1Value = null
    }

})

thirdSidebar.addEventListener("mouseleave", (e) => {
    if (e.target.tagName !== "LI") {
        pre2Value = null
    }
})

function fourthFn(data) {
    fourthSidebar.innerHTML = "";
    closeBtn3.id = "close-btn3";
    let btn = ` <span style="fontSize:"10px"; cursor: pointer;">x</span>`;
    closeBtn3.innerHTML = btn;
    fourthSidebar.append(closeBtn3);
    closeBtn2.remove()
    closeBtn3.addEventListener("click", closeSidebar);

    const fourthList = document.createElement("ul");
    fourthList.classList.add("animated-list")
    fourthList.innerHTML += `<div class="fourth__sidebarLi">
                                 <div class="product__img object-position: 50% 50%;"> 
                                    <img  src=${data['detail'].img}  alt="" width="100%"/>
                                    <div class="side__curtain"></div>
                                 </div>
                                 <div class='product__info'>
                                    <h4>${data['detail']['name']}</h4>
                                    <div class="product-detail">
                                    <div class="lo__pro__app">
                                      <h6>Location</h6>
                                      <p>${data["detail"]["location"]}</p>
                                    </div>
                                    <div class="pro__app">
                                       <div class="lo__pro__app">
                                          <h6>Product</h6>
                                          <p>${data["detail"]["products"]}</p>
                                        </div>
                                        <div class="lo__pro__app">
                                           <h6>Application</h6>
                                           <p>${data["detail"]["application"]}</p>
                                         </div>
                                     </div>
                                     <div class="side__button">
                                          <a href="">
                                              VIEW PPROJECT
                                          </a>
                                     </div>
                                    </div>
                                 </div>
                             </div>`;
    fourthSidebar.append(fourthList)
    setTimeout(showFourthSidebar, 100)
    setTimeout(() => {
        document.querySelector(".product__img").style.opacity = 1
        document.querySelector(".product__info").style.opacity = 1
    }, 200)
    sidebar.append(fourthSidebar);
}

function thirdFn(data, headingText) {
    thirdSidebar.innerHTML = "";
    fourthSidebar.remove();
    // document.querySelector("product__img").classList.remove("image-wrapper")
    closeBtn2.id = "close-btn2";
    let btn = ` <span style="fontSize:"10px"; cursor: pointer;">x</span>`;
    closeBtn2.innerHTML = btn;
    thirdSidebar.append(closeBtn2);
    closeBtn1.remove()
    closeBtn2.addEventListener("click", closeSidebar);
    const thirdSidebarHeading = document.createElement("h2");
    thirdSidebarHeading.textContent = `All ${headingText}`;
    thirdSidebar.prepend(thirdSidebarHeading);

    const thirdList = document.createElement("ul");
    thirdList.classList.add("animated-list")
    for (key in data) {
        if (key !== "link") {

            thirdList.innerHTML += `<li class="third__sidebarLi">
                                      <div class='thirdLi__data'>
                                        <h5>${key}</h5>
                                        <div class="li-info">
                                            <div>
                                            <h6>product</h6>
                                            <p>${data[key]['products']}</p>
                                            </div>  
                                             <div>
                                             <h6>location</h6>
                                             <p>${data[key]['location']}</p>
                                             </div>  
                                        </div>
                                      </div>  
                                      <button class="paginationButton">
                                              <span class="iconContainer">
                                                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 8">
                                                      <polyline vector-effect="non-scaling-stroke" points="12.8,0.6 16.1,4 12.8,7.3"  fill="transparent"></polyline>
                                                      <line vector-effect="non-scaling-stroke" x1="0" y1="4" x2="16.1" y2="4" ></line>
                                                  </svg>
                                              </span>
                                              
                                          </button>
                                    </li>`;
        }
        // thirdList.innerHTML += `<li class="third__sidebarLi">${key}</li>`;


    }
    thirdSidebar.append(thirdList);
    sidebar.append(thirdSidebar);

    setTimeout(() => {
        document.querySelectorAll(".third__sidebarLi").forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('show');
            }, index * 100);
        });
    }, 400);


    setTimeout(() => {
        document.querySelector(".side__curtain").style.transform = "translate(0,0%)"
    }, 200)
    setTimeout(showThirdSidebar, 100)

}

function secondFn(data) {
    secondSidebar.innerHTML = "";
    let secondSidebarHeading = document.createElement("h2");
    let headingText = `See All`
    closeBtn1.id = "close-btn1";
    let btn = ` <span style="fontSize:"10px"; cursor: pointer;">x</span>`;
    closeBtn1.innerHTML = btn;
    secondSidebar.append(closeBtn1);
    closeBtn1.addEventListener("click", closeSidebar);

    fourthSidebar.remove();
    thirdSidebar.remove();

    const secondList = document.createElement("ul");
    secondList.classList.add("animated-list")
    for (key in data) {
        const pathUrl = originDirectory + data[key].link;
        const objLength = Object.keys(data[key]).length;
        secondList.innerHTML += `<a href="${pathUrl}"><li class="second__sidebarLi">
                                                        <span>${key}</span>
                                                        <span class='li__obj__length'>${objLength < 9 ? '0' + objLength : objLength}</span>
                                                  </li></a>`
        secondSidebar.append(secondList)

    }
    secondSidebarHeading.innerHTML = headingText;
    secondSidebar.prepend(secondSidebarHeading)
    sidebar.append(secondSidebar)



    document.querySelectorAll(".second__sidebarLi").forEach((item, index) => {


        setTimeout(() => {
            item.classList.add('show');
        }, index * 200);
    });

}

function secondMobileFn(data) {
    secondSidebar__mobile.innerHTML = "";
    const menuHeader = document.createElement('div')
    menuHeader.classList.add('menuHeader')
    let secondSidebarHeading = document.createElement("h2");
    const closeheader = document.createElement("div")
    closeheader.classList.add("close__header")
    let headingText = `See All`
    secondSidebarHeading.innerHTML = headingText;
    const closeBtn = document.createElement('div')
    closeBtn.classList.add("mobileMenuClose")
    closeBtn.innerHTML = `<span style="fontSize:"10px"; cursor: pointer;">x</span>`

    const backBtn = document.createElement('div')
    backBtn.classList.add('back__btn')
    backBtn.innerHTML = ` <svg class="backIcon" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 7.93718L12.0629 7.5L7.50004 12.0631L7.50019 12.0633L7.5 12.0635L11.9997 16.5635L12.4368 16.1263L8.37385 12.0633L12.5 7.93718Z" fill="currentColor"></path>
                            <circle cx="10" cy="12" r="9.75" stroke="currentColor" stroke-width="0.5"></circle>
                        </svg>
                        <span>Menu</span> `
    closeheader.append(backBtn, closeBtn)

    menuHeader.append(secondSidebarHeading, closeheader)
    secondSidebar__mobile.append(menuHeader)
    const secondList = document.createElement("ul");
    secondList.classList.add("animated-list")
    for (key in data) {
        const pathUrl = originDirectory + data[key].link;
        const objLength = Object.keys(data[key]).length;
        secondList.innerHTML += `<a href="${pathUrl}"><li class="second__sidebarLi">
                                <span>${key}</span>
                                <span class='li__obj__length'>${objLength < 9 ? '0' + objLength : objLength}</span>
                                </li></a>`
        secondSidebar__mobile.append(secondList)

    }

    closeBtn.addEventListener("click", menuCloseFn);
    backBtn.addEventListener("click", () => {
        secondMobileMenu.style.visibility = 'hidden'
        document.querySelector(".second__sidebar__mobile").style.transform = "translateX(100%)"

    })
    secondMobileMenu.append(secondSidebar__mobile)



    document.querySelectorAll(".second__sidebarLi").forEach((item, index) => {


        setTimeout(() => {
            item.classList.add('show');
        }, index * 200);
    });
}

function createElements(data) {
    // sidebar.innerHTML = "";
    firstSidebar.innerHTML = "";
    let imgDiv = document.createElement("div");
    imgDiv.classList.add('title__logo')
    let sidebarImg = `<svg width="105" height="26" viewBox="0 0 105 26" fill="none"
                style="translate: none; rotate: none; scale: none; transform: translate(0px);">
                <path
                    d="M44.3672 6.12227C44.3672 2.63764 42.7203 0.260498 39.249 0.260498H35.051V11.9032H39.136C42.6073 11.9032 44.3672 9.60729 44.3672 6.12227ZM36.5043 10.6168V1.53054H39.2006C41.9131 1.53054 42.8818 3.38698 42.8818 6.12227C42.8818 8.85834 41.8001 10.6168 39.0876 10.6168H36.5043Z"
                    fill="currentColor"></path>
                <path
                    d="M54.3599 10.5515H47.4657V6.46447H53.5525V5.22671H47.4657V1.54687H54.1662V0.260498H46.0125V11.9032H54.3599V10.5515Z"
                    fill="currentColor"></path>
                <path
                    d="M60.7035 12.1311C62.1729 12.1311 63.3514 11.708 64.1588 10.91C64.9822 10.0958 65.5313 8.79305 65.5473 7.63695H64.1104C63.9651 9.34679 62.9317 10.8447 60.7521 10.8447C58.3463 10.8447 56.7801 8.92332 56.7801 6.0737C56.7801 3.33803 58.2009 1.27004 60.7359 1.27004C62.5604 1.27004 63.7067 2.2632 63.9813 3.71251H65.4021C65.0952 1.56324 63.4646 0 60.7681 0C57.329 0 55.2947 2.65401 55.2947 6.0737C55.2947 9.60733 57.4259 12.1311 60.7035 12.1311Z"
                    fill="currentColor"></path>
                <path
                    d="M77.9615 6.07371C77.9615 2.58907 75.7979 0 72.3104 0C68.8229 0 66.6594 2.58907 66.6594 6.07371C66.6594 9.55834 68.8229 12.1474 72.3104 12.1474C75.7979 12.1474 77.9615 9.55834 77.9615 6.07371ZM72.3104 10.861C69.5979 10.861 68.1448 8.80938 68.1448 6.07371C68.1448 3.33803 69.5979 1.27004 72.3104 1.27004C75.0229 1.27004 76.4761 3.33803 76.4761 6.07371C76.4761 8.80938 75.0229 10.861 72.3104 10.861Z"
                    fill="currentColor"></path>
                <path
                    d="M81.0592 6.98555H84.2722C85.8222 6.98555 86.5002 7.58791 86.6134 9.29775C86.7425 11.2518 86.7909 11.6916 87.0331 11.9032H88.5993V11.8378C88.3893 11.6916 88.1956 11.2191 88.0664 9.34675C87.9534 7.62057 87.5821 6.80629 86.4034 6.38281V6.3342C87.7919 5.87806 88.4055 4.86857 88.4055 3.45193C88.4055 1.54687 87.0331 0.260498 84.9988 0.260498H79.606V11.9032H81.0592V6.98555ZM81.0592 1.53054H84.5627C86.2581 1.53054 86.9039 2.24683 86.9039 3.66347C86.9039 4.9825 86.0967 5.79679 84.4821 5.79679H81.0592V1.53054Z"
                    fill="currentColor"></path>
                <path
                    d="M39.2009 18.9653C37.4733 18.6235 36.1816 18.2327 36.1816 16.9137C36.1816 15.7086 37.215 15.0409 38.7812 15.0409C40.4763 15.0409 41.5421 15.8715 41.752 17.5324H43.1243C42.8337 15.3831 41.6388 13.9011 38.7488 13.9011C36.4076 13.9011 34.8254 15.0572 34.8254 16.979C34.8254 19.1773 36.5691 19.7633 38.6034 20.2194C40.6701 20.6752 42.0587 21.0497 42.0587 22.6456C42.0587 24.0949 40.9122 24.8275 39.3138 24.8275C37.1342 24.8275 35.9395 23.8017 35.7455 21.8313H34.3247C34.4539 24.1761 36.0039 25.9999 39.2492 25.9999C41.7358 25.9999 43.4956 24.7789 43.4956 22.5966C43.4956 19.9748 41.4451 19.4215 39.2009 18.9653Z"
                    fill="currentColor"></path>
                <path
                    d="M51.8253 14.1292L48.467 19.6658H48.4346L45.1246 14.1292H43.5103L47.692 20.8383V25.7722H49.145V20.8709L53.3753 14.1292H51.8253Z"
                    fill="currentColor"></path>
                <path
                    d="M58.2009 18.9653C56.4733 18.6235 55.1816 18.2327 55.1816 16.9137C55.1816 15.7086 56.215 15.0409 57.7812 15.0409C59.4763 15.0409 60.5421 15.8715 60.752 17.5324H62.1243C61.8337 15.3831 60.6388 13.9011 57.7488 13.9011C55.4076 13.9011 53.8254 15.0572 53.8254 16.979C53.8254 19.1773 55.5691 19.7633 57.6034 20.2194C59.6701 20.6752 61.0587 21.0497 61.0587 22.6456C61.0587 24.0949 59.9122 24.8275 58.3138 24.8275C56.1342 24.8275 54.9395 23.8017 54.7455 21.8313H53.3247C53.4539 24.1761 55.0039 25.9999 58.2493 25.9999C60.7358 25.9999 62.4956 24.7789 62.4956 22.5966C62.4956 19.9748 60.4451 19.4215 58.2009 18.9653Z"
                    fill="currentColor"></path>
                <path
                    d="M62.7849 15.4159H66.6277V25.7722H68.0808V15.4159H71.9236V14.1292H62.7849V15.4159Z"
                    fill="currentColor"></path>
                <path
                    d="M74.7311 20.3335H80.8179V19.0958H74.7311V15.4159H81.4315V14.1292H73.2778V25.7722H81.6253V24.4205H74.7311V20.3335Z"
                    fill="currentColor"></path>
                <path
                    d="M88.8732 23.8018H88.8411L85.0952 14.1292H83.2383V25.7722H84.5461V16.1975H84.5785C84.5785 16.1975 84.8691 17.0768 85.0952 17.6628L88.2596 25.7722H89.3737L92.5383 17.6628C92.7483 17.109 93.055 16.1975 93.055 16.1975H93.0874V25.7722H94.4758V14.1292H92.5869L88.8732 23.8018Z"
                    fill="currentColor"></path>
                <path
                    d="M100.706 18.9653C98.978 18.6235 97.6863 18.2327 97.6863 16.9137C97.6863 15.7086 98.7197 15.0409 100.286 15.0409C101.981 15.0409 103.047 15.8715 103.256 17.5324H104.629C104.338 15.3831 103.144 13.9011 100.253 13.9011C97.9123 13.9011 96.3301 15.0572 96.3301 16.979C96.3301 19.1773 98.0738 19.7633 100.108 20.2194C102.175 20.6752 103.563 21.0497 103.563 22.6456C103.563 24.0949 102.417 24.8275 100.819 24.8275C98.6389 24.8275 97.444 23.8017 97.2504 21.8313H95.8296C95.9588 24.1761 97.5088 25.9999 100.754 25.9999C103.24 25.9999 105 24.7789 105 22.5966C105 19.9748 102.95 19.4215 100.706 18.9653Z"
                    fill="currentColor"></path>
                <path
                    d="M25.7073 12.2605H25.7348V0H12.8674V0.0280609C19.7247 0.0280609 25.327 5.44059 25.7073 12.2605Z"
                    fill="currentColor"></path>
                <path
                    d="M25.7078 13.7395C25.3275 20.5594 19.7252 25.9719 12.8679 25.9719V26H25.7353V13.7395H25.7078Z"
                    fill="currentColor"></path>
                <path
                    d="M12.8399 12.2605H12.8674V0H0V0.0280609C6.85726 0.0280609 12.4596 5.44059 12.8399 12.2605Z"
                    fill="currentColor"></path>
                <path
                    d="M12.8399 13.7395C12.4596 20.5594 6.85726 25.9719 0 25.9719V26H12.8674V13.7395H12.8399Z"
                    fill="currentColor"></path>
            </svg>`
    imgDiv.innerHTML = sidebarImg
    firstSidebar.prepend(imgDiv)

    const firstList = document.createElement("ul")
    for (const category in data) {
        const pathUrl = originDirectory + data[category].link
        if (category === "contact") {
            firstList.innerHTML += ` <a href=${pathUrl}><li class="first__sidebarLi" id="${category}">${category}</li></a>`;
        } else {
            firstList.innerHTML += `<li class="first__sidebarLi" id="${category}">${category}</li>`;
        }

        firstSidebar.append(firstList);
    }

    sidebar.append(firstSidebar);
}

function firstMenuFn(data) {

    firstSidebarMobile.innerHTML = ''
    const menuLogo = document.createElement('h5')
    menuLogo.classList.add('menuLogo')

    menuLogo.innerText = 'Menu'
    firstSidebarMobile.append(menuLogo)

    const firstList = document.createElement("ul")
    for (const category in data) {
        const objLength = Object.keys(data[category]).length;
        const pathUrl = originDirectory + data[category].link
        if (category === "contact") {
            firstList.innerHTML += ` <a href=${pathUrl}><li class="first__sidebarLi" id="${category}">
                                        <span>${category}</span>
                                         <span class='li__obj__length'>${objLength < 9 ? '0' + objLength : objLength}</span>
                                     </li></a>`;
        } else {
            firstList.innerHTML += `<li class="first__sidebarLi" id="${category}">
                                        <span>${category}</span>
                                        <span class='li__obj__length'>${objLength < 9 ? '0' + objLength : objLength}</span>
                                    </li>`;
        }


        firstSidebarMobile.append(firstList)
    }



    firstMobileMenu.append(firstSidebarMobile)
}