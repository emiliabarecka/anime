function replaceContent(contentFromJson){
    const description = document.querySelector(".description");
    const name = document.querySelector(".name");
    const looks = document.querySelector(".looks");
    const character = document.querySelector(".character")
    const title = document.querySelector(".title");
    const abilities = document.querySelector(".abilities");
    const klasyDoPodmiany = [ description, name, looks, title, character, abilities ];

    klasyDoPodmiany.forEach(function(klasa){
    if (klasa){
        klasa.innerHTML = contentFromJson[klasa.className];
        }
    })
}

fetch("../biblioteka.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(function(anime, index){

            if(document.title === anime.title){
                replaceContent(data[index]);
                console.log(document.title,index)
            }
        });
    });

