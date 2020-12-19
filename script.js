'use strict';


let secret_number = Math.floor(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;
const disp_highscore = document.querySelector('.highscore')
const number = document.querySelector('.number')
let past_highscore = window.sessionStorage.getItem('prev_highscore')
disp_highscore.textContent = past_highscore;


document.querySelector('.check').addEventListener('click', () => {

    const guess = Number(document.querySelector('.guess').value);
    const message = document.querySelector('.message');
    const disp_score = document.querySelector('.score');

    function checkScore(mess) {

        if (score > 1) {
            message.textContent = mess;
            score--;
            console.log(score);
            disp_score.textContent = score;
        } else {
            message.textContent = `Something is wrong with you... Try some medication!!! 🤦‍♂️`
            disp_score.textContent = 0;
        }

    }

    function win() {
        message.textContent = 'Congrats.... That was a great guess 👌🎉🎉😉  !!!'
        document.querySelector("body").style.backgroundColor = "#60b347";
        number.style.width = '30rem';
        number.textContent = secret_number;

        if (score > highscore) {
            highscore = score;
            disp_highscore.textContent = highscore;
            window.sessionStorage.setItem('prev_highscore',highscore)
        }

    }

    if (!guess) {
        message.textContent = '🚫 No number!'
    } else if (guess === secret_number) {
        win();
    } else if (guess > secret_number) {
        checkScore(`Your guess is too high.. Try lower! ⏬⏬⏬`)
    } else if (guess < secret_number) {
        checkScore(`Your guess is too low.. Try higher! ⏫⏫⏫`)

    }

});

document.querySelector('.again').addEventListener('click', () => {
    location.reload()


});