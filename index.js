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
                    let info = section.querySelector(".info");
                    let ep = section.querySelector(".epizodes");
                    let type = section.querySelector(".type");

                    opis.innerHTML = anime["description"]
                    opis1.textContent = anime["description1"]
                    info.innerHTML = anime["info"]
                    ep.textContent = anime["epizodes"]
                    type.textContent = anime["type"]
                };
            })
           
        });
    });