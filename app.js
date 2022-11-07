let secretNumber = 50
function play(){
   while(true){
    let guess = Number(prompt("Guess a Number!"))

    if(guess < secretNumber){
        alert("Guess Higher");
    } else if(guess > secretNumber){
        alert("Guess Lower");
    } else {
        alert("Correct!");
        break;
    } 
   }
}

function playAgain(){
    
}


play(); // This is your main function that runs when the page loads