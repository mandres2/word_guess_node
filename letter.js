/* This constructor is able to display the underlying character/blank placeholder. This defines the following:
* A string value to store the underlying character for the letter.
* A boolean value that stores whether that letter has been guessed yet.
* A function that returns the underlying character if th letter has been guessed, or a placeholder (i.e. underscore) if the letter has not been guessed yet.
* A function that takes a user input's character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly.
*/

//Establish the constructor function, with the following properties contained inside.
let letter = function (character) {
    this.character = character;
    this.letterGuessed = false;

    // this method (called display) will exhibit the underlying character/blank placeholders.
    this.display = function() {
        if (this.character === ' ') {
            return (' ');
        } else if (this.letterGuessed) {
            return (this.character);
        } else if (this.character === "'") {
            return ("'");
        } else if (this.character === "-") {
            return ("-");
        } else if (this.letterGuessed === false) {
            return ("_");
        }
    };

    // this function called guess will use .toLowerCase() method to return the calling string value to be converted to lower case.
    this.letterGuess= function (guess) {
        if (guess.toLowerCase() === this.character.toLowerCase()) {
            this.letterGuessed = true;
        }
    };
};

// module.exports is essentially an object that one can add to data or variables to.
// This can be accessed from other files using the 'require' keyword.
module.exports = letter;