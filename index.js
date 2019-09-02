//___________________________________________________________ npm packages _______________________________________________________________________//

const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');

//_______________________________________________________________________________________________________________________________________________//

const word = require('./word.js');

let guesses = 10;
let points = 0;
let commonWords = ["who", "what", "where", "when", "why"];
let randomWord;
let chosenWord;

function startGame() {
    console.log(chalk.cyan("It's time to guess Common Words Used Everyday"));
}

function chooseRandomWord() {
    randomWord = commonWords[Math.floor(Math.random() * commonWords.length)];
    chosenWord = new word(randomWord);
}

function guessWord(){
    if (guesses > 0 && points < 5) {
        console.log(chosenWord.display());

        inquirer.prompt([
            {
                name: "txt",
                message: "Guess a letter!",
                validate: function (str) {
                    if (str.length !=1) return false;
                    let regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
                    return regEx.test(str);
                }
            }
        ]).then(function (guessedLetter) {
            let guess = guessedLetter.txt;

            chosenWord.checkGuess(guess);

            if (randomWord.toLowerCase().indexOf(guess.toLowerCase()) === -1) {
                guesses--;
                console.log(chalk.red("Incorrect. " + guesses + " guesses remaining "))
            } else {
                if (points < 5) {
                    console.log(chalk.green("Correct."));
                }
            }

            if (randomWord === chosenWord.display()) {
                console.log(chosenWord.display());
                guesses = 10;
                points++;

                if (points < 5) {
                    console.log(chalk.green("Correct. Next Word."));
                    chooseRandomWord();
                } else {
                    winGame();
                }
            }

            if (guesses === 0) {
                loseGame();
            }

            guessWord();
        });
    }
}

//____________________________________________________________ lose game f(x) ___________________________________________________________________//

function loseGame() {
    console.log(chalk.red('Game Over'));
    inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: "Would you like to play again?",
            default: true
        }
    ])
        .then(function (inquirerResponse){
            if (inquirerResponse.confirm) {
                guesses = 10;
                points = 0;
                chooseRandomWord();
                guessWord();
            } else {
                console.log(chalk.yellow("See you next time."));
                process.exit();
            }
        });
}

//_____________________________________________________________ win game f(x) ___________________________________________________________________//

function winGame() {
    figlet('You win!', function(err, data) {
        if (err) {
            console.log('Unknown error.');
            console.dir(err);
            return;
        }
        console.log(data)
    });

    inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: "Would you like to play again?",
            default: true
        }
    ])
    .then(function (inquirerResponse){
        if (inquirerResponse.confirm) {
            guesses = 10;
            points = 0;
            chooseRandomWord();
            guessWord();
        } else {
            console.log(chalk.yellow("See you again."));
            process.exit();
        }
    });
}

startGame();
chooseRandomWord();
guessWord();