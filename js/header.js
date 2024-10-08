const originDirectory = window.location.origin;
const headerHTML = `<div class="nav-bar">
<nav>
    <div class="nav-list">
        <a class="nav-item" href="${originDirectory}">
            <svg width="105" height="26" viewBox="0 0 105 26" fill="none"
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
            </svg>
        </a>

        <h3 class="nav-item nav-item-hidden"><a class="sidebar__links" id="Projects" href="#">PROJECTS</a></h3>
        <h3 class="nav-item nav-item-hidden"><a class="sidebar__links" id="Products" href="#">PRODUCTS</a></h3>
        <h3 class="nav-item nav-item-hidden"><a class="sidebar__links" id="Resources" href="#">RESOURCES</a></h3>
        <h3 class="nav-item nav-item-hidden"><a class="sidebar__links" id="About" href="#">ABOUT</a></h3>
        <h3 class="nav-item nav-item-hidden"><a href="${originDirectory}/html/contact.html">CONTACT</a></h3>
        <h3 class="nav-item nav-item-hidden SAMPLES0"><a class="sample-block">SAMPLE <span>0</span></a>
        </h3>
        <button id="mobileMenuButton">
            <div class="mobileMenu">
                <span class="sidebar__links" id="menu" style="transform: translate(0,0%);">Menu</span>
                <span id="close" style="transform: translate(0,0%);">close</span>
            </div>
        </button>
    </div>
</nav>
</div>`;

$('#header').html(headerHTML)

const header = document.getElementById("header")
const menu = document.getElementById("menu")
const close = document.getElementById("close")


menu.addEventListener('click', () => {
    menu.style.transform = "translate(0,-100%)"
    close.style.transform = "translate(0,-100%)"
    header.style.height = "60px"
    header.style.padding = "10px 0"
    
    document.querySelector('.mobileSideMenu').style.visibility = 'visible'
    document.querySelector(".first__sidebar__mobile").style.transform = "translateX(0)"

    // document.querySelector('.overlay').style.visibility = "hidden";
})
close.addEventListener('click', () => {
    menu.style.transform = "translate(0,0%)"
    console.log(menu.style.transform)
    close.style.transform = "translate(0,0%)"
    header.style.height = "73px"
    header.style.padding = "5px 0"

    document.querySelector(".first__sidebar__mobile").style.transform = "translateX(100%)"
     document.querySelector('.mobileSideMenu').style.visibility = 'hidden'
})

$(document).ready(function () {
    $('#header').on('click', eventFn);
});

