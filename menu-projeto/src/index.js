document.getElementById("buttonStar").addEventListener("click", startGame);

function startGame() {
  findAge = Number(prompt("Qual a sua idade?"));

  let isKeepGaming = true;

  if (findAge < 18) {
    alert("Você não possui idade suficiente para jogar.");
  }

  while (findAge >= 18 && isKeepGaming) {
    optionUser = prompt("Escolha um número: 1(predra) - 2(papel) - 3(tesoura)");
    optionMachine = Math.floor(Math.random() * 3) + 1;

    if (optionUser == optionMachine) {
      alert("Empate!");
      alert(
        `Você escolheu a opção ${optionUser} e o computador escolheu a opção ${optionMachine}`
      );
    }

    if (optionUser == 1) {
      if (optionMachine == 2) {
        alert("Máquina venceu!");
        alert("Você escolheu pedra e a máquina papel");
      }
      if (optionMachine == 3) {
        alert("Você venceu!");
        alert("Você escolheu pedra e a máquina tesoura");
      }
    }

    if (optionUser == 2) {
      if (optionMachine == 1) {
        alert("Você venceu!");
        alert("Você escolheu papel e a máquina pedra");
      }
      if (optionMachine == 3) {
        alert("Máquina venceu!");
        alert("Você escolheu papel e a máquina tesoura");
      }
    }

    if (optionUser == 3) {
      if (optionMachine == 1) {
        alert("Máquina venceu!");
        alert("Você escolheu tesoura e a máquina pedra");
      }
      if (optionMachine == 2) {
        alert("Você venceu!");
        alert("Você escolheu tesoura e a máquina papel");
      }
    }

    const userAnswer = prompt("OK para continuar o game o x para sair");

    if (userAnswer === "x") {
      isKeepGaming = false;
    }
  }
}
