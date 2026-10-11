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
