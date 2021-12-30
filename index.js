const guzik = document.querySelector("button");
const menu = document.querySelector("nav");
const sections = document.querySelectorAll("section");
const imgs = document.querySelectorAll('img');
const h1 = document.querySelector('.title');
const text = 'Najlepsze anime na start';
let activeLetter = 0;


function addLetter(){
    h1.textContent += text[activeLetter];
    activeLetter++;
    if(activeLetter === text.length){
        activeText = 0;
        clearInterval(inter);
   }; 
}
let inter = setInterval(addLetter, 40);


imgs.forEach((im) =>{
    im.addEventListener('click', function(){ 
        console.log(this);
        im.classList.toggle("superSchadow");

    })
});


guzik.addEventListener("click", function(){
    console.log("click");
    menu.classList.toggle("d-none");
    guzik.classList.toggle("alfa")
})

    
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
