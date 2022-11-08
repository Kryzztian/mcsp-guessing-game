//THIS CODE IS SLOPPY BUT IT WORKS HOW I WANT IT TO

const secretNumber = 5 //Math.floor(Math.random() * 10) + 1;
let history = {};
let newName = ""
let hello = prompt('Hello! Please enter your name');

function play(){
    let count = 1;
    
   while(true){
    const guess = prompt("Guess a Number!");
    const guessNum = Number(guess);
    //arrCount.push(guessNum)
    //figure out how to add a space to this...
    //Update, using .join(", ") to join the array into a string with a space inbetween them.
     if (guess === null){
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
        // first time playing
        if(/*history[hello] === undefined*/ !history.hasOwnProperty(hello)){
            alert(`Good job ${hello}! Your guesses were ${count}!`);
            console.log()
        } else {
            // has played before
            let prevAtt = history[hello];
            let difference = prevAtt - count;
            if(difference > 0){
                alert(`That’s Correct ${hello} And you beat your previous attempt by ${difference} fewer guesses!`)
            } else if (difference < 0){
                alert(`That’s Correct ${hello} You did better in your last game by ${Math.abs(difference)} guesses!`)
            } else {
                alert(`That’s Correct ${hello} You tied your previous attempt!`)
            }
             
        }
        history[hello] = count;  
        console.log(history[hello])
        console.log(history)
        break;
        }
    }
   }

function playAgain(){
    let choice = prompt("Would you like to play again?")
    newName = prompt("Please re-enter your name for validation.")
    if( choice.toLowerCase() === "yes"){
        if(newName == hello){
            alert(`Welcome back ${hello}. It's time to play again`);
        } else if(newName !== hello){
            hello = newName;
        }
         play()
    } else 
    alert("Thanks for playing!")
}


play(); // This is your main function that runs when the page loads
playAgain();