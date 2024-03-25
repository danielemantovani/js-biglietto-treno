// TEST
// alert ("ciao")

// 1. INPUT

// chiedo all'utente quanti km vuole percorrere
let userKm = prompt ("Quanti km devi effettuare?"); //string |null
console.log(userKm);
// converto i km da percorrere da string a number
userKm = parseInt(userKm); //number

// chiedo all'utente quanti anni ha
let userAge = prompt ("Quanti anni hai?"); //string |null
console.log(userAge);
// converto gli anni da string a number
userAge = parseInt (userAge)

// dichiaro il prezzo del biglietto a km 
const ticket = 0.21; //number |null


// 2. ESECUZIONE LOGICA

// calcolo del prezzo al netto degli sconti
const ticketPirce = userKm * ticket
console.log(ticketPirce);

// calcolo del prezzo se l'utente ha diritto allo sconto

let finalPrice = ticketPirce;

let message = ""

if (userAge < 19) {
    finalPrice = ticketPirce * 0.8;
    message = "Hai diritto ad uno sconto under 18 del 20%, il prezzo del tuo biglietto è di €";
} else if (userAge > 64) {
    finalPrice = ticketPirce * 0.6;
    message = "Hai diritto ad uno sconto over 65 del 40%, il prezzo del tuo biglietto è di €";
} else {
    message = "Il prezzo del tuo biglietto è di €"
}

console.log(finalPrice);


// 3. OUTPUT

document.getElementById ("finalPrice").innerHTML =message + finalPrice.toFixed(2);