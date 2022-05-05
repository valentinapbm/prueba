window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let search=document.querySelector(".search");
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
    search.classList.toggle('search-desactive', windowPosition);
})
const optionMenu =document.querySelector(".select-menu"), 
        selectBtn =optionMenu.querySelector(".select-btn"),
        options= optionMenu.querySelector(".options"),
        sBtn_text=optionMenu.querySelector(".sBtn-text");
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
options.forEach(option=>{
    let selectedOption =option.querySelector(".option-text").innerText;
    sBtn_text.innerText=selectedOption;

})