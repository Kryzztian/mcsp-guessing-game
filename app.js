const secretNumber = 5 //Math.floor(Math.random() * 10) + 1;
let count = 0;


function play(){
   while(true){
    
    const guess = prompt("Guess a Number!");
    const guessNum = Number(guess);
    if(guess === null){
        alert("Goodbye!","PeAcE hOmIe")
        break;
    }else if(Number.isNaN(guessNum)){
        alert("Please enter a valid number")
    } else if(guessNum < secretNumber){
        count ++;
        alert("Guess Higher", "Or don't");
    } else if(guessNum > secretNumber){
        count ++;
        alert("Guess Lower");
    } else {
            alert(`Correct! It took you ${count} tries!`);
        break;
        }
    }
   }

function playAgain(){
    
}


play(); // This is your main function that runs when the page loads