const guzik = document.querySelector("button");
const menu = document.querySelector("nav");
const sections = document.querySelectorAll("section");

const imgsToChange = ["img/270.webp", "img/wei.jpg","img/ciel.jpg", "img/eddy1.jpg"];
const changeImg = document.querySelector('img.startPage');
const time = 7000;
let active = 0;

function changeSlide(){
    active ++;
    if(active === imgsToChange.length){
        active = 0;
    }
    if(active < 0){
        active = imgsToChange -1;
    }
    changeImg.src = imgsToChange[active];
}
setInterval(changeSlide, time);

    
    fetch("./mainPage.json")
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
