// Using the require keyword allows the programmer to access all of the exports in the  letter.js file.
const letter = require('./letter.js');

/*
Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
An array of new Letter objects representing the letters of the underlying word
A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
*/
let word = function (word) {
    this.buildWord = function (word) {
        let lettersStore = [];
        for (let i = 0; i < word.length; i++) {
            let currentLetter = new letter(word[i]);
            lettersStore.push(currentLetter);
        }
        return lettersStore;
    }


    this.letters = this.buildWord(word);
    this.chosenWord = word;

    this.checkGuess = function (guess) {
        for (let i = 0; i < this.letters.length; i++) {
            this.letters[i].letterGuess(guess);
        }
    };

    this.display = function() {
        let lettersStore = '';
        for (let i = 0; i < this.letters.length; i++) {
            lettersStore += this.letters[i].display();
        }
        return lettersStore;
    };

};

module.exports = word;