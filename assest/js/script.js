
import scrollSnapPolyfill from 'css-scroll-snap-polyfill';

const gra = function(min, max) {
    return Math.random() * (max - min) + min;
}

const gri = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const init = function(){
    let items = document.querySelectorAll('.modulex div');
    for (let i = 0; i < items.length; i++){
        items[i].style.minWidth = gra(30,60) + 'vw';
    }
    cssScrollSnapPolyfill();
}
init();


window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})
const optionMenu =document.querySelector(".select-menu"), 
        selectBtn =optionMenu.querySelector(".select-btn"),
        options= optionMenu.querySelector(".option"),
        sBtn_text=optionMenu.querySelector(".sBtn-text");
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
options.forEach(option=>{
    let selectedOption =option.querySelector(".option-text").innerText;
    sBtn_text.innerText=selectedOption;

})

