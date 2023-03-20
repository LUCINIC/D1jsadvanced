// Esercizio 1
function somma_o_triplo(num1, num2) {
   if (num1 === num2) {
     return 3 * (num1 + num2);
   } else {
     return num1 + num2;
   }
 }
 
 let risultato = somma_o_triplo(4, 4); 
 console.log(risultato);
 
 risultato = somma_o_triplo(2, 5); 
 console.log(risultato); 


// Esercizio 2
 function controlla_50(num1, num2) {
   if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
     return true;
   } else {
     return false;
   }
 }
 
 console.log(controlla_50(20, 30)); 
 console.log(controlla_50(50, 10)); 
 console.log(controlla_50(5, 5)); 



 // Esercizio 3 
 function rimuoviCarattere(stringa, posizione) {
   if (posizione >= stringa.length || posizione < 0) {
     
     return stringa;
   } else {
     
     return stringa.slice(0, posizione) + stringa.slice(posizione + 1);
   }
 } 

 console.log(rimuoviCarattere('ciao', 2)); 
console.log(rimuoviCarattere('hello', 0)); 
console.log(rimuoviCarattere('world', 10)); 



// Esercizio 4 
function trovaMax(num1, num2, num3) {
   let max = num1;
   if (num2 > max) {
     max = num2;
   }
   if (num3 > max) {
     max = num3;
   }
   return max;
 } 

 console.log(trovaMax(10, 20, 30)); 
console.log(trovaMax(100, 50, 75));
console.log(trovaMax(-5, -10, -2)); 


// Esercizio 5 
function controllaIntervalli(num1, num2) {
   if ((num1 >= 40 && num1 <= 60 || num1 >= 70 && num1 <= 100) && 
       (num2 >= 40 && num2 <= 60 || num2 >= 70 && num2 <= 100)) {
     return true;
   } else {
     return false;
   }
 } 

 console.log(controllaIntervalli(50, 80)); 
console.log(controllaIntervalli(30, 50)); 
console.log(controllaIntervalli(90, 110)); 


// Esercizio 6 

function ripetiStringa(stringa, ripetizioni) {
   let nuovaStringa = "";
   for (let i = 0; i < ripetizioni; i++) {
     nuovaStringa += stringa;
   }
   return nuovaStringa;
 } 

 const nuovaStringa = ripetiStringa("hello", 3);
console.log(nuovaStringa); 


// Esercizio 7 
function verificaCitta(citta) {
   return (citta.startsWith("Los") || citta.startsWith("New")) ? citta : false;
 }
 const citta1 = "Los Angeles";
const risultato1 = verificaCitta(citta1);
console.log(risultato1); 

const citta2 = "New York";
const risultato2 = verificaCitta(citta2);
console.log(risultato2); 

const citta3 = "Chicago";
const risultato3 = verificaCitta(citta3);
console.log(risultato3); 

 

// Esercizio 8 

function sommaArray(arrayDaSommare) {
   let somma = 0;
   for (let i = 0; i < arrayDaSommare.length; i++) {
     somma += arrayDaSommare[i];
   }
   return somma;
 }  
 let myArray = [4, 5, 3];
let somma = sommaArray(myArray);
console.log(somma); 


// Esercizio 9 
function contieneUnoOTre(array) {
   if (array.includes(1) || array.includes(3)) {
     return true;
   } else {
     return false;
   }
 }
 


 // Esercizio 10 

 function checkArray(array) {
   if (array.includes(1) || array.includes(3)) {
     return false;
   } else {
     return true;
   }
 } 


 // Esercizio 11 

 function trovaStringaPiuLunga(arrayDiStringhe) {
  let stringaPiuLunga = "";
  for (let i = 0; i < arrayDiStringhe.length; i++) {
    if (arrayDiStringhe[i].length > stringaPiuLunga.length) {
      stringaPiuLunga = arrayDiStringhe[i];
    }
  }
  return stringaPiuLunga;
}


// Esercizio 12 
function tipoAngolo(gradi) {
   if (gradi < 90) {
     return "acuto";
   } else if (gradi === 90) {
     return "retto";
   } else if (gradi > 90 && gradi < 180) {
     return "ottuso";
   } else if (gradi === 180) {
     return "piatto";
   } else {
     return "gradi non validi";
   }
 }

 
 
 // Esercizio 13 
 function trovaIndiceMax(array) {
   let max = array[0];
   let index = 0;
   for (let i = 1; i < array.length; i++) {
     if (array[i] > max) {
       max = array[i];
       index = i;
     }
   }
   return index;
 }

 

// Esercizio 14 
function trovaPariPiuAlto(array) {
   let maxPari = null;
 
   for (let i = 0; i < array.length; i++) {
     const num = array[i];
 
     if (num % 2 === 0 && (maxPari === null || num > maxPari)) {
       maxPari = num;
     }
   }
 
   return maxPari;
 }
 const array1 = [3, 7, 2, 9, 10, 8];
const maxPari = trovaPariPiuAlto(array1);
console.log(maxPari); 



// Esercizio 15 
function controllaNumeri(num1, num2) {
   if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
     return true;
   } else {
     return false;
   }
 }

 

 // Esercizio 16 
 function nuovaStringa(str) {
   if (str.length < 3) {
     return str.toUpperCase();
   } else {
     let inizio = str.slice(0, 3).toLowerCase();
     let fine = str.slice(3).toUpperCase();
     return inizio + fine;
   }
 }

 

 // Esercizio 17 
 function somma(num1, num2) {
   let somma = num1 + num2;
   if (somma >= 50 && somma <= 80) {
     return 65;
   } else {
     return 80;
   }
 }

 


 // Esercizio 18 
 function convertiNumero(numero) {
   let risultato = "";
   if (numero % 3 === 0) {
     risultato += "Diego";
   }
   if (numero % 5 === 0) {
     risultato += "Riccardo";
   }
   if (numero % 7 === 0) {
     risultato += "Stefano";
   }
   if (risultato === "") {
     return numero.toString();
   } else {
     return risultato;
   }
 }

 


 // Esercizio 19 
 function creaAcronimo(frase) {
   let acronimo = "";
   let parole = frase.split(" ");
 
   for (let i = 0; i < parole.length; i++) {
     let parola = parole[i];
     acronimo += parola[0].toUpperCase();
   }
 
   return acronimo;
 }
 let acronimo = creaAcronimo("Fabbrica Italiana Automobili Torino");
console.log(acronimo); 












 



