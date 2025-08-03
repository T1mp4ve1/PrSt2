/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("___Esercizio_1___");

const pets = ["dog", "cat", "hamster", "redfish"];
for (let x = 0; x < pets.length; x++) {
  console.log(pets[x]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("");
console.log("___Esercizio_2___");

let petsAlfa = structuredClone(pets);
petsAlfa.sort();
console.log(petsAlfa);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("");
console.log("___Esercizio_3___");

let petsInv = structuredClone(pets);
petsInv.reverse();
console.log(petsInv);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("");
console.log("___Esercizio_4___");

let petsUlt = structuredClone(pets);
console.log("Prima:", pets);
petsUlt.splice(0, 1);
petsUlt.push(pets[0]);
console.log("Dopo:", petsUlt);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("");
console.log("___Esercizio_5___");

const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

let mycarsarray = structuredClone(cars);

function l1() {
  let alfab = "qwertyuioplkjhgfdsazxcvbnmm";
  let rl = Math.floor(Math.random() * alfab.length);
  let rl2 = Math.floor(Math.random() * alfab.length);
  return alfab[rl] + alfab[rl2];
}

function l2() {
  let alfab = "qwertyuioplkjhgfdsazxcvbnm";
  let rl = Math.floor(Math.random() * alfab.length);
  let rl2 = Math.floor(Math.random() * alfab.length);
  return alfab[rl] + alfab[rl2];
}

for (y = 0; y < mycarsarray.length; y++) {
  let m1 = Math.floor(Math.random() * 10).toString();
  let m2 = Math.floor(Math.random() * 10).toString();
  let m3 = Math.floor(Math.random() * 10).toString();
  mycarsarray[y].licensePlate = l1() + m1 + m2 + m3 + l2();
}
console.log(mycarsarray);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("");
console.log("___Esercizio_6___");

let Trimless = structuredClone(cars);
Trimless.push({
  brand: "Dacia",
  model: "Sandero",
  color: "White",
  trims: ["Cosa", "Mettere", "Qua"],
});

let x = 0;
while (x < Trimless.length) {
  Trimless[x].trims.pop();
  x++;
}
// Trimless.forEach((car) => {
//   car.trims.pop();
// });

console.log(Trimless);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("");
console.log("___Esercizio_7___");

const justTrims = [];
for (let x = 0; x < cars.length; x++) {
  justTrims.push(cars[x].trims[0]);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("");
console.log("___Esercizio_8___");

for (let x = 0; x < cars.length; x++) {
  let FirstLetter = cars[x].color[0];
  if (FirstLetter === "B" || FirstLetter === "b") {
    console.log("Fuzz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("");
console.log("___Esercizio_9___");

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let z = 0;
while (z < numericArray.length) {
  console.log(numericArray[z]);
  if (numericArray[z] === 32) {
    console.log("Trovato!");
    break;
  }
  z++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("");
console.log("___Esercizio_10___");

const charactersArray = ["g", "n", "u", "z", "d"];

const alfa = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "l", "m", "n", "o", "p", "q", "r","s", "t", "u", "v", "z"
];

const alfaNum = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16","17", "18", "19", "20", "21"
];

const charactersNum = [];

function alfaFun(poz) {
  for (let x = 0; x < alfa.length; x++) {
    let numPoz = alfaNum[x];
    if (poz === alfa[x]) {
      return numPoz;
    }
  }
}

for (let x = 0; x < charactersArray.length; x++) {
let numPositin = alfaFun(charactersArray[x])
let letter = charactersArray[x];
// console.log(poz)

  switch (letter) {
    case "g":
    charactersNum.push(numPositin);
    break;
    case "n":
    charactersNum.push(numPositin);
    break;
    case "u":
    charactersNum.push(numPositin);
    break;
    case "z":
    charactersNum.push(numPositin);
    break;
    case "d":
    charactersNum.push(numPositin);
    break;
  }
}
console.log(charactersNum)