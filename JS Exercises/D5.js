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

let petsAlfa = pets.slice(0);
petsAlfa.sort();
console.log(petsAlfa);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("");
console.log("___Esercizio_3___");

let petsInv = pets.slice(0);
petsInv.reverse();
console.log(petsInv);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("");
console.log("___Esercizio_4___");

let petsUlt = pets.slice();
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

let RandomNumArray = [];
for (let x = 0; x < 5; x++) {
  let RandomNum = Math.floor(Math.random() * 9);
  RandomNumArray.push(RandomNum);
}
let NamberLic = parseInt(RandomNumArray.join(""));
console.log(NamberLic);

let mycarsarray = structuredClone(cars);
mycarsarray.forEach((car, index) => {
  car.licensePlate = NamberLic + index;
});
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
  color: "white",
  trims: ["Cosa", "Mettere", "Qua"],
});

Trimless.forEach((car) => {
  car.trims.pop();
});

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
  }  else {
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

let y = 0;
while (y < numericArray.length) {
  console.log(numericArray[y]);
  if (numericArray[y] === 32) {
    break;
  }
  y++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("");
console.log("___Esercizio_10___");

const charactersArray = ["g", "n", "u", "z", "d"];
const positionsArray = [];
const sorted = [...charactersArray].sort();

for (let x = 0; x < sorted.length; x++) {
  const char = sorted[x];
  let position;

  switch (char) {
    case "d": position = 4; break;
    case "g": position = 7; break;
    case "n": position = 14; break;
    case "u": position = 21; break;
    case "z": position = 26; break;
    default: position = -1;
  }

  positionsArray.push(position);
}

console.log("Caratteri ordinati:", sorted);
console.log("Posizioni ordinate:", positionsArray);