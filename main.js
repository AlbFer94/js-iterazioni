/* let n = 5;

for (let i = 1; i <= n; i++) {
    let sum = i + i;
    console.log(sum);
}
 */

/* let n = 5; // Esercizio richiede Prompt. Io ho dichiarato la variabile per capire se avessi fatto correttamente l'esercizio.

let somma = 0;

for (let i = 1; i <= n; i++) {
    somma = somma + i;
}

console.log("Somma da 1 a " + n + ": " + somma);
 */
/* --------------------------------------------------------------------------- */

/* Capitolo 4

Scope delle variabili */

/* const limite = 4;
let soglia = 18;

for (let i = 1; i <= limite; i++) {

    const voto = Number(prompt(`inserisci il voto ${i}:`));

    if (voto) {
        if (voto >= soglia) {
            console.log(`il voto: ${voto} è sufficente`);
        } else {
            console.log(`il voto ${voto} è insufficente`);
        }
    } else {
        console.log("non hai inserito i voti");

    }
}

console.log(` Soglia richiesta per la sufficenza: ${soglia}. Voti richiesti ${limite}`);
 */

/* -------------------------------------------------------------------------------------------------- */

/* Esercizio finale */


/* const secret = 7;
let limite = 1;

for (let i = 1; i <= limite; i++) {

    let num = Number(prompt("Indovina il numero segreto"));

    if (num === secret) {
        console.log(`Risposta estatta il numero segreto è: ${secret}. Hai indovinato in ${i} tentativi.`);
    } else if (num > secret) {
        console.log("Sbagliato il tuo numero è troppo alto!");
        limite++
    } else if (num < secret) {
        console.log("Sbagliato il tuo numero è troppo basso!")
        limite++
    }
}
 */
/*******
ARRAY 
********/

/* --------------------------Esercizio 1------------------------------- */

/* const materie = ["matematica", "storia", "geografia", "inglese"];

const voti = [5, 8, 7, 8];

const presenze = [true, true, true, false, false, true];

console.log(materie[materie.length - 1]);
 */

/* ---------------------Esercizio 2--------------------------- */

/* const numeri = [7, 3, 25, 4, 6];

console.log(numeri.length);

for (let i = 0; i < numeri.length; i++) {

    if (numeri[i] >= 5) {
        console.log(numeri[i]);
    }
} */

/* ------------------------Esercizio 3----------------------- */

/* const colori = ['rosso', 'verde', 'blu', 'giallo'];

colori.push("viola");
colori.splice(0, 1);

console.log(colori.includes("blue"));

colori.slice(0, 2);

const stringa = colori.join('|');

console.log(stringa);
 */



/* ------------------------Esercizio 4----------------------- */

/* const info = ['Mario Rossi', 42, 'Roma', 'sviluppatore', 'italiano'];
const [nome, età, città, , ...ultime] = info;

console.log(nome);
console.log(età);
console.log(città);

console.log(ultime);
 */

/* ------------------------Esercizio 5----------------------- */

/* const array_uno = ['React', 'Vue'];
const array_due = ['Node', 'Express'];

const uniti = [...array_uno, ...array_due];
const copia = [...array_uno];

copia.push('Angular');

console.log(array_uno);
console.log(uniti);
console.log(copia);
 */

/* ------------------------Esercizio Finale Array----------------------- */

/* const linguaggi = ['javaScript', 'C++', 'typeScript', 'Python', 'PhP'];

console.table(linguaggi);

console.log(linguaggi.length);

for (let i = 0; i < linguaggi.length; i++) {

    if (linguaggi[i].length > 4) {
        console.log(linguaggi[i]);
    }
}

linguaggi.push('SQL');
linguaggi.shift();

console.log(linguaggi.includes('Python'));

const stringa = linguaggi.join('-');
console.log(stringa);

const [primo, secondo, ...ultimi] = linguaggi;
console.log(primo);
console.log(secondo);
console.log(ultimi);

const copia = [...linguaggi];

copia.push('CSharp');

console.log(copia);
 */

/* ------------------------Extra While, do/While----------------------- */

/* Capitolo 1 */

/* let voto;
let number=0;
media=0;

while(voto !== 0){
    voto=Number(prompt("inserisci numero"));
    number++;
    media=media + voto;
}

if(voto === 0){
    number--;
    media=media / number;
}

console.log(`La tua media è di : ${media}`);
 */

/* Capitolo 2 */
let pin;

do{
    pin=Number(prompt("inserisci il PIN"));
} while (pin !== 1234);

console.log("PIN Corretto. Benvenuto");


