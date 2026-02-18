var totalWow = 0
var totalClicks = 0
var firstWowText = false

function wowFunction(){
    totalClicks ++;

    var nb = Math.floor(Math.random() * 10);
    //console.log(nb)
    totalWow += nb
    //console.log(totalWow)
    console.log("wow")


    if (totalWow > 100){
        wowParagraph= document.getElementById("wowP")
        wowParagraph.innerText = `Wow, 💯 en ${totalClicks} clics!`;
        wowParagraph.style.fontSize = `${100/totalClicks*10}px`

    }
    else if (totalWow > 10){
        //console.log("plus que 10 wow! ")

        var elementVise = document.getElementById("numCours")

        //elementVise.style.color = "red";
        if (!firstWowText){
            wowParagraph = document.createElement("p");
            wowParagraph.id="wowP"
            wowParagraph.innerText = `Wow, déjà ${totalWow} wows!`;
            elementVise.appendChild(wowParagraph);
            firstWowText = true
        }
        else {
            wowParagraph = document.getElementById("wowP")
            wowParagraph.innerText = `Wow, déjà ${totalWow} wows!`;

            wowParagraph.style.fontSize = `${totalWow}px`
        }    


    }
}

function alertKB(event){
    //event properties https://www.w3schools.com/jsref/dom_obj_event_prop.asp
    var key = event.code
    console.log(key)
    alert(`Vous avez trouvé la fonction secrète avec ${key} `)
}
