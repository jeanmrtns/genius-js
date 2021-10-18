let order = [];
let userOrder = [];
let score = 0;

const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const buttons = [green, yellow, red, blue];

/**
 * Green = 0
 * Yellow = 1
 * Red = 2
 * Blue = 3
 */

buttons.forEach((button) => {
  button.onclick = () => {
    button.classList.add('active');

    setTimeout(() => {
      button.classList.remove('active');
    }, 500);
  };
});

// Quando o jogador perder a partida.
const gameOver = () => {
  alert(
    `Você perdeu 😢.\n Clique em OK para começar novamente!\nScore final: ${score}`
  );
  order = [];
  userOrder = [];
};
