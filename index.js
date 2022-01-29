const guzik = document.querySelector("button");
const menu = document.querySelector("nav");
const sections = document.querySelectorAll("section");

const imgsToChange = ["img/eddy1.jpg","img/ellieBadass.jpg","img/Saber.png","img/badDio.jpg","img/grumpyLan.jpg"];
const changeImg = document.querySelector('img.startPage');
const time = 9000;
let active = 1;

const hamburger = document.querySelector('.ham');
const nav = document.querySelector('.navigation');
const ul = nav.querySelector('ul');
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('ham--active');
    nav.classList.toggle('navigation--active');
})

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

    function removeNav(){
        nav.classList.remove('navigation--active');
        hamburger.classList.remove('ham--active');
    }
    
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
                    let a = document.createElement('a');
                    document.createElement('ul');
                    a.setAttribute('href', '#'+ section.id);
                    
                    a.textContent = anime['name'];
                    ul.appendChild(a);
                    a.addEventListener('click', removeNav);
                    

                    opis.innerHTML = anime["description"]
                    opis1.textContent = anime["description1"]
                    info.innerHTML = anime["info"]
                    ep.textContent = anime["epizodes"]
                    type.textContent = anime["type"]
                };
            })
           
        });
    });
        
        
    
