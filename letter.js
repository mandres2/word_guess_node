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
        // introduces an if/else if statements for the this.display functional expression.
        if (this.character === ' ') {
            //if this.character equals '' then return: ''
            return (' ');
        } else if (this.letterGuessed) {
            //else-if the letterGuessed return: this.character.
            return (this.character);
        } else if (this.character === "'") {
            return ("'");
            //else-if this.character equals "'", then return: "'"
        } else if (this.character === "-") {
            return ("-");
            // else-if this.character equals "-", then return: "-"
        } else if (this.letterGuessed === false) {
            return ("_");
            // else-if this.letterGuessed is equal to false return: "_"
        }
    };
    //Closes the display functional expression.

    // this function called guess will use .toLowerCase() method to return the calling string value to be converted to lower case.
    this.letterGuess= function (guess) {
        if (guess.toLowerCase() === this.character.toLowerCase()) {
            this.letterGuessed = true;
            // if the users guess (lowercase) is equal to the characters (in Lower case), then this.letterGuesse(d) is equal to: true.
        }
    };
    // end of the letter guess expressional function.
};
// closing of the character constructor function.

// module.exports is essentially an object that one can add to data or variables to.
// This can be accessed from other files using the 'require' keyword.
module.exports = letter;