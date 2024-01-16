 function guessNumber(){
let myNumber = 5;
const userInput = parseInt(prompt('enter a number'))
 if(myNumber==userInput){
    alert('good work')
 }else{
    alert('not matched')
 }
}
guessNumber();