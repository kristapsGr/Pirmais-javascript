// Šis ir mans pirmais javascript projekts
console.log('Hello World');

let vards = 'Kristaps';
console.log(vards);
// Mainīgie nevar būt keywords (let, if, var)
// Nevar sākties ar ciparu (1name)
// Nevar saturēt atstarpes vai svītriņas (-)

let izveletsCipars = 0.3;
izveletsCipars = 1;
console.log(izveletsCipars);
// Mainiga vertiba vair mainīties vēlāk

const izveletsSkaitlis = 0.3;
console.log(izveletsSkaitlis);
// const neļauj mainiga vertibai mainīties

let isAproved = true; // boolian
let lastName = null; // notīra visa mainīgā vērtību

let cilveks = {
    vards: 'Jānis',
    vecums: 30
};
cilveks.vards = 'Kārlis';
cilveks['vards'] = 'Pēteris'; // Tas pats, kas rindiņu augstāk
console.log(cilveks.vards);

let izveletasKrasas = ['Sarkans', 'Zaļš'];
izveletasKrasas[2] = 'Dzeltens'; // Pievieno konkrētu vērtību sarakstam
console.log(izveletasKrasas[0]); // [2] - pasaka, kad no saraksta es vēlos tieši pirmo vērtību
console.log(izveletasKrasas.length); // length - izvada sarsksta garumu

// IZveido funkciju tiesi tapatas ka python
function sveiciens(vards, uzvards){
    console.log('Labvakar ' + vards + uzvards);
}
// izsauc funkiciju oievinojot mainigajam vertibu
sveiciens('Andri ', 'Bērziņ');

function kvadrats(skaitlis){
    return skaitlis * skaitlis
}

let cipars = kvadrats(2);
console.log(cipars);