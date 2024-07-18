async function navData() {
    return (await fetch("../../json/nav-data.json")).json()
}


console.log(navData())


const navHeader = document.getElementById("header");
const sidebar = document.getElementById("sidebar");

const firstSidebar = document.createElement("div");
firstSidebar.classList.add("first__sidebar");
const secondSidebar = document.createElement("div");
secondSidebar.classList.add("second__sidebar");
const thirdSidebar = document.createElement("div");
thirdSidebar.classList.add("third__sidebar");
const fourthSidebar = document.createElement("div");
fourthSidebar.classList.add("fourth__sidebar");




navHeader.addEventListener("click", eventFn)
function eventFn(e) {
    let preValue = null;
    let pre1Value = null;

    if (e.target.classList.contains("sidebar__links")) {
        preValue = e.target
        navData().then((data) => {
            createElements(data);
            secondFn(data[e.target.id]);
        })
    }
    secondSidebar.addEventListener("mouseover", hoverEvent);
    function hoverEvent(e) {
        if(e.target.tagName !== "LI"){
            return
        }
        pre1Value = e.target;
        navData().then((data) => {
            thirdFn(data[preValue.id][e.target.textContent])
        })
    }
    thirdSidebar.addEventListener("mouseover", hover1Event);
    function hover1Event(e) {
        if(e.target.tagName !== "LI"){
            return
        }
        navData().then((data) => {
            fourthFn(data[preValue.id][pre1Value.textContent][e.target.textContent])
        })
    }
    firstSidebar.addEventListener("click", sidebarEvent)
    function sidebarEvent(e) {
        if(e.target.tagName !== "LI"){
            return
        }
        preValue = e.target

        navData().then((data) => {
            secondFn(data[e.target.textContent]);
        })
        secondSidebar.addEventListener("mouseover", hoverEvent);
        function hoverEvent(e) {
            if(e.target.tagName !== "LI"){
                return
            }
            pre1Value = e.target;
            navData().then((data) => {
                thirdFn(data[preValue.textContent][e.target.textContent])
                // fourthFn(data[preValue.textContent][pre1Value.textContent][e.target.textContent])
            })
        }
        thirdSidebar.addEventListener("mouseover", hover1Event);
        function hover1Event(e) {
            if(e.target.tagName !== "LI"){
                return
            }
            navData().then((data) => {
                fourthFn(data[preValue.textContent][pre1Value.textContent][e.target.textContent])
            })
        }

    }
}

function fourthFn(data) {
    fourthSidebar.innerHTML = "";
    const fourthList = document.createElement("ul");
    for (key in data) {
        fourthList.innerHTML += `<li class="fourth__sidebarLi">${key}</li>`;
        fourthSidebar.append(fourthList)
    }
    sidebar.append(fourthSidebar);
}

function thirdFn(data) {
    thirdSidebar.innerHTML = "";
    fourthSidebar.remove();
    const thirdList = document.createElement("ul")
    for (key in data) {
        thirdList.innerHTML += `<li class="third__sidebarLi">${key}</li>`
        thirdSidebar.append(thirdList)
    }
    sidebar.append(thirdSidebar)
}

function secondFn(data) {
    secondSidebar.innerHTML = "";
    fourthSidebar.remove();
    thirdSidebar.remove();

    const secondList = document.createElement("ul");
    for (key in data) {
        secondList.innerHTML += `<li class="second__sidebarLi">${key}</li>`
        secondSidebar.append(secondList)
    }
    sidebar.append(secondSidebar)
}



function createElements(data) {
    sidebar.innerHTML = "";
    firstSidebar.innerHTML = "";

    const firstList = document.createElement("ul")
    for (const category in data) {
        firstList.innerHTML += `<li class="first__sidebarLi" id="${category}">${category}</li>`;

        firstSidebar.append(firstList);
    }
    sidebar.append(firstSidebar);
}
