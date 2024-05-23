/**
 * @copyright DexTre
 * @author Sadee <dennyscorrea58@gmail.com>
 */

"use strict";

/*  light and dark mode */

const /* {NodeElement} */ $themeBtn = document.querySelector("[data-theme-btn]");
const /* {NodeElement} */ $HTML = document.documentElement;
let /* {Boolean | String} */ isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

if (sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");
}else{
    $HTML.dataset.theme = (isDark) ? "dark" : "light";   
}

const ChangeTheme = () => {
    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);
}

$themeBtn.addEventListener('click', ChangeTheme);

const /** {NodeList} */ $tabBtn = document.querySelectorAll("[data-tab-btn]");
let /** {NodeElement} */ [lasActiveTab] = document.querySelectorAll("[data-tab-content]");
let /** {NodeElement} */ [lasActiveTabBtn] = $tabBtn;

$tabBtn.forEach(item =>{
    item.addEventListener("click", function (){
        lasActiveTab.classList.remove("active");
        lasActiveTabBtn.classList.remove("active");

        const /** {NodeElement} */ $tabContent = document.querySelector(`
            [data-tab-content="${item.dataset.tabBtn}"]        
        `);
        $tabContent.classList.add("active");
        this.classList.add("active");
        
        lasActiveTab = $tabContent;
        lasActiveTabBtn = this;
    })
});

const /* {NodeElement} */ $my_web = document.getElementById('content_my_web');

$my_web.innerHTML = window.location.pathname