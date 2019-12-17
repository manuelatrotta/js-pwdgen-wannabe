alert("click ok for visit this page!");
//chiedere nome all'utente
var nomeUtente = prompt ('inserire nome');
console .log (nomeUtente);
document .getElementById('nome') .innerHTML ="benvenuto" + nomeUtente;
//chiedere cognome
var cognomeUtente = prompt ('inserire cognome');
console .log (cognomeUtente);
//generare pass con nomecognomecolore19
var colorePreferito = prompt ('inserisci il tuo colore preferito');
console .log (colorePreferito);
document .getElementById('colore') .innerHTML ="Questo è il tuo colore preferito: " + colorePreferito;
