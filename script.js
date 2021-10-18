let order = [];
let userOrder = [];
let score = 0;

const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');

const shuffleOrder = () => {
  let randomButton = Math.floor(Math.random() * 4);
  order[order.length] = randomButton;

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

const lightColor = (element, number) => {
  number *= 500;

  setTimeout(() => {
    element.classList.add('active');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('active');
  });
};

const checkOrder = () => {
  for (let i in userOrder) {
    if (userOrder[i] != order[i]) {
      gameOver();
      break;
    }

    if (userOrder.length == order.length) {
      alert(`Pontuação: ${score}\nAvançando para o próximo nível!`);
      nextLevel();
    }
  }
};

const click = (color) => {
  userOrder[userOrder.length] = color;

  createColorElement(color).classList.add('active');

  setTimeout(() => {
    createColorElement(color).classList.remove('active');
    checkOrder();
  }, 250);
};

const createColorElement = (color) => {
  switch (color) {
    case 0:
      return green;
    case 1:
      return red;
    case 2:
      return yellow;
    case 3:
      return blue;
  }
};

const nextLevel = () => {
  score++;
  shuffleOrder();
};

// Quando o jogador perder a partida.
const gameOver = () => {
  alert(
    `Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`
  );
  order = [];
  clickedOrder = [];

  playGame();
};

//funcao de inicio do jogo
const playGame = () => {
  alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
  score = 0;

  nextLevel();
};

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();
