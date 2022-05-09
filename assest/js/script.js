window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let search=document.querySelector(".search");
    let navList=document.querySelector(".nav-list1");
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
    search.classList.toggle('search-desactive', windowPosition);
    navList.classList.toggle('nav-list-desactive', windowPosition);

})
const optionMenu =document.querySelector(".select-menu"), 
        selectBtn =optionMenu.querySelector(".select-btn"),
        options= optionMenu.querySelector(".options"),
        sBtn_text=optionMenu.querySelector(".sBtn-text");
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

