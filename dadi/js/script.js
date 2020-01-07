alert("Sei pronto per la Sfida?")

//Attribuisco il valore ai dadi
var valoreDadi = [1,2,3,4,5,6]
console.log(valoreDadi);

// il giocatore 1 effettua il suo lancio
alert("Giocatore 1: tira il tuo dado!");
var numeroGiocatore1 = Math.floor(Math.random() * 6) + 1;
console.log(numeroGiocatore1);

//il giocatore 2 effettua il suo lancio
alert("Giocatore 2: tira il tuo dado!");
var numeroGiocatore2 = Math.floor(Math.random() * 6) + 1;
console.log(numeroGiocatore2);

//confronto i numeri delle giocate
//se il giocatore 1 ha un valore più alto del giocatore 2 allora il giocatore 1 vince.
if (numeroGiocatore1 > numeroGiocatore2) {
  console.log ("Giocatore 1 hai vinto!!")
}
//se il giocatore 2 ha un valore più alto del giocatore 1 allora il giocatore 2 vince.
else {
  console.log ("Giocatore 2 hai vinto!!")
}
