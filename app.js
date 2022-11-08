const secretNumber = 5 //Math.floor(Math.random() * 10) + 1;
let count = 1;
let arrCount = [];

function play(){
    let hello = prompt('Hello! Please enter your name')
   while(true){
    const guess = prompt("Guess a Number!");
    const guessNum = Number(guess);
    arrCount.push(guessNum)
    //figure out how to add a space to this
    if(guess === null){
        alert("Goodbye!","PeAcE hOmIe")
        break;
    }else if(Number.isNaN(guessNum)){
        alert("Please enter a valid number")
    } else if(guessNum < secretNumber){
        count ++;
        alert(`Sorry ${hello}, Guess Higher`);
    } else if(guessNum > secretNumber){
        count ++;
        alert(`Sorry ${hello}, Guess Lower`);
    } else {
            alert(`Good job ${hello}! It took you ${count} tries! Your guesses were ${arrCount}!`);
        break;
        }
    }
   }

function playAgain(){
    let choice = prompt("Would you like to play again?")
    if( choice.toLowerCase() === "yes"){
         play()
    } else 
    alert("Thanks for playing!")
}


play(); // This is your main function that runs when the page loads
playAgain();