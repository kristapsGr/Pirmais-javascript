const pogaAtnemt = document.getElementById("pogaAtnemt");
const pogaNotirit = document.getElementById("pogaNotirit");
const pogaPieskaitit = document.getElementById("pogaPieskaitit");
const skaititajs = document.getElementById("skaititajs");
let skaits = 0;

pogaPieskaitit.onclick = function(){
    skaits++;
    skaititajs.textContent = skaits;
}
pogaAtnemt.onclick = function(){
    skaits--;
    skaititajs.textContent = skaits;
}
pogaNotirit.onclick = function(){
    skaits = 0;
    skaititajs.textContent = 0;
}
const manaPoga = document.getElementById("manaPoga");
manaPoga.addEventListener('click', function(e) {
    const vards = prompt('What is your name?');
    console.log(vards)
//    document.body.innerHTML = "<h1>Sveiki, " + vards + "!</h1>"
});