
escolha = prompt("Pedra, papel ou Tesoura? ").toUpperCase();
if (escolha == "PEDRA"){
    jogada = 0;
}
if (escolha == "PAPEL"){
    jogada = 1;
}
if (escolha == "TESOURA"){
    jogada = 2;
}
alert("Você escolheu " + escolha + "!")
escolha2 = Math.round((Math.random(0,3)))
if (escolha2 == 0){
    alert("Você: " + escolha + "\nComputador: Pedra")
}
if (escolha2 == 1){
    alert("Você: " + escolha + "\nComputador: Papel")
}
if (escolha2 == 2){
    alert("Você: " + escolha + "\nComputador: Tesoura")
}
nomeComputador = "Computador"
if ((escolha2 == 0 && jogada == 0) || (escolha2 == 1 && jogada == 1) || (escolha2 == 2 && jogada ==2)){
    alert("Empate!")
    }
if ((escolha2 == 0 && jogada == 2) || (escolha2 == 2 && jogada == 0)){
    alert("Pedra quebra Tesoura.")
}
if ((escolha2 == 2 && jogada == 1) || (escolha2 == 1 && jogada == 2)){
    alert("Tesoura corta Papel")
}
if ((escolha2 == 1 && jogada == 0) || (escolha2 == 0 && jogada == 1)){
    alert("Papel cobre a Pedra")
}

