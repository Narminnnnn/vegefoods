
// menu blogmenu islemesi

let toggleBlogMenu = document.getElementById("toggleBlogMenu")
let blogMenu = document.querySelector(".blogmenu");



toggleBlogMenu.addEventListener("click",(e)=>{
    e.preventDefault()
    blogMenu.classList.toggle("active")
})

document.addEventListener("click", (e) => {
    if (!blogMenu.contains(e.target) && !toggleBlogMenu.contains(e.target)) {
        blogMenu.classList.remove("active");
    }
});

