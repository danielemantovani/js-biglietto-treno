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
const ticketPirce = userKm * ticket



