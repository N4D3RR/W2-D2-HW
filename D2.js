/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n1 = 5
const n2 = 8
if (n1 > n2) {
  console.log("il numero più grande è ", n1)
} else {
  console.log("il numero più grande è ", n2)
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n3 = 18
if (n3 !== 5) {
  console.log("not equal")
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n4 = 20
if (n4 % 5 === 0) {
  console.log("è divisibile per 5")
} else {
  console.log("non è divisibile per 5")
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n5 = 8
const n6 = 0
if (n5 === 8 || n6 === 8 || n5 + n6 === 8 || n5 - n6 === 8) {
  console.log("Giusto")
} else {
  console.log("Sbagliato")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 51
let total
if (totalShoppingCart > 50) {
  total = totalShoppingCart
} else {
  total = totalShoppingCart + 10
}
console.log("Costo totale", total)

// quale è meglio?

let shippingCost = 10
if (totalShoppingCart > 50) {
  shippingCost = 0
}
let totalWithShipping = totalShoppingCart + shippingCost
console.log("Costo totale", totalWithShipping)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let salePrice = totalShoppingCart * 0.8
let checkoutWithDiscount
if (salePrice > 50) {
  checkoutWithDiscount = salePrice
} else {
  checkoutWithDiscount = salePrice + shippingCost
}
console.log("Costo totale", checkoutWithDiscount)
//come arrotondo a due decimali?

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più primo al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 12
let b = 30
let c = 8

let primo, secondo, terzo

if (a >= b && a >= c) {
  primo = a
  if (b >= c) {
    secondo = b
    terzo = c
  } else {
    secondo = c
    terzo = b
  }
} else {
  if (b >= a && b >= c) {
    primo = b
    if (a >= c) {
      secondo = a
      terzo = c
    }
  } else {
    primo = c
    if (n7 >= b) {
      secondo = a
      terzo = b
    } else {
      secondo = b
      terzo = a
    }
  }
}
console.log("numeri ordinati", primo, secondo, terzo) // che casino

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n = 17

if (typeof n === "number") {
  console.log("Il valore è un numero")
} else {
  console.log("Il valore non è un numero")
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
