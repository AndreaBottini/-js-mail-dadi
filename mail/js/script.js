//alert('sta funzionando?')

var emailInserite = ["luca.verdi@gmail.com", "marco.bianchi@gmail.com", "andrea.rossi@gmail.com", "matteo.gialli@gmail.com" ];
//console.log(emailInserite);

//for (var i = 0; i < emailInserite.length; i++) {
//  console.log(emailInserite[i]);
//}

//emailInserite.push ("franco.arancioni@gmail.com");

//console.log(emailInserite);

//controllo che la mail inserita sia presente in quelle da me inserite

var inserimentoMail = prompt("Inserisci la tua mail");


//inserisco la variabile di verifica
var verifica = false;
for ( var i = 0; i < emailInserite.length; i++) {
  var mail = emailInserite[i];
  if (inserimentoMail == mail) {
    verifica = true;
  }
}
console.log (verifica);

//imposto il messaggio di ritorno per l'utente
if (verifica == false) {
  console.log("la tua mail non risulta registrata");
}
else {
  console.log("la tua mail risulta correttamente registrata");
}
