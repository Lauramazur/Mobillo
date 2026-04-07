const catalog = document.querySelector(".catalog");
catalog.addEventListener("click", (e) => {
    e.stopPropagation(); 
    catalog.classList.toggle("active");
});
document.addEventListener("click", (e) => {
    if (!catalog.contains(e.target)) {
        catalog.classList.remove("active");
    }
});