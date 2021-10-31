const guzik = document.querySelector("button");
const menu = document.querySelector("nav");

guzik.addEventListener("click", function(){
    console.log("click");
    menu.classList.toggle("d-none");
    guzik.classList.toggle("alfa")
})

// guzik.addEventListener("mouseover", function(){
//     console.log("mouseover");
//     menu.classList.toggle("d-none");
// })
