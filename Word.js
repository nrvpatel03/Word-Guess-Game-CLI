var Letter = require("./Letter");

var Word = function(arrLetters){
    this.arrLetters = arrLetters;
    this.charOrUnder = function(){
        var concat;
        for(var i = 0; i<this.arrLetters.length;i++){
            concat += arrLetters[i].letterGuessedOrNot;
        }
        return concat;
    }
    this.newGuess = function(character){
        for(var i = 0; i<this.arrLetters.length;i++){
            arrLetters[i].checkUnder;
        }
    }
}