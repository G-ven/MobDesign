import '/assets/scss/style.scss';

// MENU 
function openNav(event) {
    this.classList.toggle("close");
    const menu = document.querySelector(".js-open-menu");
    menu.classList.toggle("open");
    console.log(menu);
}

document.querySelector("#header-btn").addEventListener('click', openNav);