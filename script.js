var kysymykset = [];

const kysymys = document.getElementById("kysymys");

const nappiA = document.getElementById("a-btn");
const nappiB = document.getElementById("b-btn");
const nappiC = document.getElementById("c-btn");
const nappiD = document.getElementById("d-btn");

var randKys;
var randKysIndex = -1;

fetch("kysymykset.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        kysymykset = data;
        uusiKysymys();
    })
    .catch(function(error) {
        console.error("Kysymysten lataaminen ep\u00e4onnistui:", error);
        kysymys.innerHTML = "Kysymyksi\u00e4 ei voitu ladata.";
    });

function uusiKysymys() {
    var uusiIndex = Math.floor(Math.random() * kysymykset.length);

    while (kysymykset.length > 1 && uusiIndex == randKysIndex) {
        uusiIndex = Math.floor(Math.random() * kysymykset.length);
    }

    randKysIndex = uusiIndex;
    randKys = kysymykset[randKysIndex];

    kysymys.innerHTML = randKys.kysymys

    nappiA.innerHTML = "A. " +  randKys.A
    nappiB.innerHTML = "B. " +  randKys.B
    nappiC.innerHTML = "C. " +  randKys.C
    nappiD.innerHTML = "D. " +  randKys.D
}

function tarkista(arvaus) {
    if (!randKys) return;

    if (arvaus == randKys.oikea) {
        alert("Oikein!")
        uusiKysymys();
    }
    else alert("Väärin!")
}
