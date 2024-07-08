console.log('Score-App');

const buttonPlayer1 = document.getElementById('btnPlayer1');
const buttonPlayer2 = document.getElementById('btnPlayer2');
const buttonReset = document.getElementById('btnReset');
const inputWinningScore = document.getElementById('winScore');
const spanPlayer1 = document.getElementById('spanPlayer1');
const spanPlayer2 = document.getElementById('spanPlayer2');

let scoreP1 = 0;
let scoreP2 = 0;
let winningScore = Number(inputWinningScore.value);

inputWinningScore.addEventListener('change', () => {
  winningScore = Number(inputWinningScore.value);
});

function playerClick(event) {
  console.log(event);
  if (event.target.id === 'btnPlayer1') {
    scoreP1++;
    spanPlayer1.textContent = scoreP1;
    if (scoreP1 >= winningScore) {
      buttonPlayer1.disabled = true;
      buttonPlayer2.disabled = true;
      spanPlayer1.style.color = 'Green';
      spanPlayer2.style.color = 'Red';
    }
  } else if (event.target.id === 'btnPlayer2') {
    scoreP2++;
    spanPlayer2.textContent = scoreP2;
    if (scoreP2 >= winningScore) {
      buttonPlayer1.disabled = true;
      buttonPlayer2.disabled = true;
      spanPlayer2.style.color = 'Green';
      spanPlayer1.style.color = 'Red';
    }
  }
}

buttonPlayer1.addEventListener('click', playerClick);
buttonPlayer2.addEventListener('click', playerClick);

// inputWinningScore.addEventListener('keydown', e => {
//   if (e.key === 'Enter') {
//     console.log('object');
//   }
// });

buttonReset.addEventListener('click', () => {
  scoreP1 = 0;
  scoreP2 = 0;
  spanPlayer1.textContent = 0;
  spanPlayer2.textContent = 0;
  spanPlayer1.style.color = 'Black';
  spanPlayer2.style.color = 'Black';
  buttonPlayer1.removeAttribute('disabled');
  buttonPlayer2.removeAttribute('disabled');
});