const kysymykset = [
    {
        kysymys: "Mitä tarkoittaa sana eltaantunut?",
        A: "Kastunut",
        B: "Onnistunut",
        C: "Pilaantunut",
        D: "Hajonnut",
        oikea: 3
    },
    {
        kysymys: "Mikä on kurri?",
        A: "Mauste",
        B: "Jääkiekkomaila",
        C: "Rasvaton maito",
        D: "Puulaji",
        oikea: 3
    }
];

const kysymys = document.getElementById("kysymys");

const nappiA = document.getElementById("a-btn");
const nappiB = document.getElementById("b-btn");
const nappiC = document.getElementById("c-btn");
const nappiD = document.getElementById("d-btn");

var randKys = kysymykset[Math.floor(Math.random() * kysymykset.length)];

kysymys.innerHTML = randKys.kysymys

nappiA.innerHTML = "A. " +  randKys.A
nappiB.innerHTML = "B. " +  randKys.B
nappiC.innerHTML = "C. " +  randKys.C
nappiD.innerHTML = "D. " +  randKys.D

function tarkista(arvaus) {
    if (arvaus == randKys.oikea) {
        alert("Oekein!")
    }
    else alert("Viärin!")
}