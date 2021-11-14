function replaceContent(contentFromJson){
    const description = document.querySelector(".description");
    const name = document.querySelector(".name");
    const looks = document.querySelector(".looks");
    const description1 = document.querySelector(".description1");
    const title = document.querySelector(".title");
    const klasyDoPodmiany = [ description, name, looks, description1, title ];

    klasyDoPodmiany.forEach(function(klasa){
    if (klasa){
        klasa.textContent = contentFromJson[klasa.className];
        }
    })
}

fetch("../biblioteka.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(function(anime, index){

            if(document.title === anime.title){
                replaceContent(data[index]);
            }
        });
    });

