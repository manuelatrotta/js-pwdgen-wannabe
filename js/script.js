alert("click ok for visit this page!");
//chiedere nome all'utente
var nomeUtente = prompt ('inserire nome');
console .log (nomeUtente);
document .getElementById('nome') .innerHTML = "benvenuto " + nomeUtente;
//chiedere cognome
var cognomeUtente = prompt ('inserire cognome');
console .log (cognomeUtente);
//chiedere colore preferito
var colorePreferito = prompt ('inserisci il tuo colore preferito');
console .log (colorePreferito);
document .getElementById('colore') .innerHTML = "Questo è il tuo colore preferito: " + colorePreferito;
//numero segreto per password
var numeroSegreto = 19;
console .log(numeroSegreto);
//generare pass nomecognomecoloreprefertito19
var password = nomeUtente + cognomeUtente + colorePreferito + numeroSegreto;
console .log(password);
document .getElementById('password') .innerHTML = "Abbiamo generato per te una password molto sicura: " + password;
