var kysymykset = [];

const kysymys = document.getElementById("kysymys");

const napit = document.getElementById("napit");

const tempNapit = napit.innerHTML;

var randKys;
var randKysIndex = -1;

var oikeat = 0;

fetch("kysymykset.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        kysymykset = data;
        uusiKysymys();
    });

function uusiKysymys() {
    randKysIndex ++;

    randKys = kysymykset[randKysIndex];

    napit.innerHTML = tempNapit;
    
    const nappiA = document.getElementById("a-btn");
    const nappiB = document.getElementById("b-btn");
    const nappiC = document.getElementById("c-btn");
    const nappiD = document.getElementById("d-btn");

    kysymys.innerHTML = randKys.kysymys;

    nappiA.innerHTML = "A. " +  randKys.A;
    nappiB.innerHTML = "B. " +  randKys.B;
    nappiC.innerHTML = "C. " +  randKys.C;
    nappiD.innerHTML = "D. " +  randKys.D;

    kysymys.style.color = "black";
}

function tarkista(arvaus) {
    if (arvaus == randKys.oikea) {
        kysymys.innerHTML = "Oikein!";
        kysymys.style.color = "green";
        oikeat ++;
    }
    else {
        kysymys.innerHTML = "Väärin!";
        kysymys.style.color = "red";
    }

    var tapahtuma = "uusiKysymys()";

    if (randKysIndex == kysymykset.length - 1) {
        tapahtuma = "loppu()";
    }

    napit.innerHTML = `<a href="https://www.kielitoimistonsanakirja.fi/#/${randKys.sana}" target="_blank"><p>${randKys.sana}</p></a><br><button onclick="${tapahtuma}">Seuraava</button>`;
}

function loppu() {
    if (oikeat > kysymykset.length / 2) kysymys.style.color = "green";
    else kysymys.style.color = "red";

    kysymys.innerHTML = "Sait " + oikeat + "/" + kysymykset.length + " oikein!";
    napit.innerHTML = "";
}
