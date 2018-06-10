var Letter = function (val,letterGuessedBool){
    this.val = val;
    this.letterGuessedBool = letterGuessedBool;
    this.letterGuessedOrNot = function(){
        if(letterGuessedBool){
            return this.val;
        }else{
            return "_";
        }
    }
    this.checkUnder = function(character){
        if(character = this.val){
            letterGuessedBool = true;
        }else{
            letterGuessedBool = false;
        }
    }

}
module.exports = Letter;