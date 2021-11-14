const guzik = document.querySelector("button");
const menu = document.querySelector("nav");
const sections = document.querySelectorAll("section");


guzik.addEventListener("click", function(){
    console.log("click");
    menu.classList.toggle("d-none");
    guzik.classList.toggle("alfa")
})

fetch("mainPage.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(function(anime, index){
            sections.forEach(function(section){
                if(section.id == anime.id){
                    let opis = section.querySelector(".description");
                    let opis1 = section.querySelector(".description1");
                    opis.innerHTML = anime["description"]
                    opis1.textContent = anime["description1"]
                };
            })
           
        });
    });