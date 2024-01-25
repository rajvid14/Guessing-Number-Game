'use strict';

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').textContent = "correct Answer");

// // document.querySelector('.guess').value = 23;
// // console.log(document.querySelector('.guess').value);

// document.querySelector('.guess').value = 23;
// console.log((document.querySelector('.guess').value));
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);


        if (!guess) {
            document.querySelector('.message').textContent = "no number!!";
        }
        else if (guess === number) {
            document.querySelector('.message').textContent = "correct Number!!Congratulation..";
            document.querySelector('.number').textContent = number;
            document.querySelector('body').style.backgroundColor = "green";
            document.querySelector('.number').style.width = "30rem";
            document.querySelector('.highscore').textContent = score;
        }
        else if (guess > number) {
            if (score > 1) {
                document.querySelector('.message').textContent = "Too high!!";
                score--;
                document.querySelector('.score').textContent = score;

            }
            else {

                document.querySelector('.message').textContent = "Sorry!! you lost the game..";
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.backgroundColor = "red";

            }
        }
        else if (guess < number) {
            if (score > 1) {
                document.querySelector('.message').textContent = "Too low!!"
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = "Sorry!! you lost the game.."
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.backgroundColor = "red";
            }
        }

    })

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('body').style.backgroundColor = "black";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.highscore').textContent = "0";
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = "?";

})   
