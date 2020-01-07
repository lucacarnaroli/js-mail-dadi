// primo giocatore
var player1 = Math.floor(Math.random() * 6) + 1;
console.log(player1);

// secondo giocatore
var player2 = Math.floor(Math.random() * 6) + 1;
// risultati
console.log(player2);

// vincitore/perdente/pareggio

if (player1 > player2) {
  console.log('Player1 hai vinto');
} else if (player1 < player2) {
  console.log('Player2 hai vinto');
} else {
  console.log('Pareggio');
}
