
let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
const msg =  document.querySelector("#msg");
 let userScorepara = document.querySelector("#user-score");
 let compScorepara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options =["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game Draw!");
    msg.innerText="Game Draw! Play Again.";
    msg.style.backgroundColor="green";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You Win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="blue";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        console.log("You Lose!");
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) =>{
    // console.log("User Choice = ", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    // console.log("Computer Choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice == "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice == "scissor" ? false : true;
        }
        else{
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked!",userChoice);
        playGame(userChoice);
    });
});