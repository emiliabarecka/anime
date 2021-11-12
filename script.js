const guzik = document.querySelector("button");
const menu = document.querySelector("nav");
// const opis = document.querySelector(".description");

guzik.addEventListener("click", function(){
    console.log("click");
    menu.classList.toggle("d-none");
    guzik.classList.toggle("alfa")
})

function replaceContent(contentFromJson){
   const content1 =  document.querySelector(".description");
   const content2 = document.querySelector(".name");
   const content3 = document.querySelector(".looks");

   content1.textContent = contentFromJson["description"];
   content2.textContent = contentFromJson["name"][1];  
   content3.textContent = contentFromJson["looks"];
}

fetch("../biblioteka.json")
    .then(response => response.json())
    .then(data => {
        replaceContent(data[0]);
        // tu sprawdza czy tytuł strony jest taki jak w jsonoe
        console.log(document.title === data[0]['title']);
        // console.log("czy jest cielu: ", data.includes('Ciel Phantomhiwe'));   
    });
