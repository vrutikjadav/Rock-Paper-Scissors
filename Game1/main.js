let userScore = 0;
let ComputerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreboard = document.querySelector("#user-score");
const compScoreboard = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const ranIndx = Math.floor(Math.random() * 3);
    return options[ranIndx];
}

const drawGame = () =>{
    console.log("Game Was Draw");
    msg.innerHTML = "Game Was Draw!";
    msg.style.backgroundColor = "rgb(54, 0, 135)";
}

const showWinner = (userWin,UserChoice,compChoice) =>{
    if(userWin)
    {
        console.log("You Win!");
        msg.innerHTML = `You Win! ${UserChoice} beats ${compChoice}`;
        userScore++;
        userScoreboard.innerHTML = userScore;
        msg.style.backgroundColor = "green";
    }
    else
    {
        console.log("You lost!");
        msg.innerHTML = `You Lost! ${compChoice} beats ${compChoice}`;;
        ComputerScore++;
        compScoreboard.innerHTML = ComputerScore;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (UserChoice) =>
{
    console.log("UserChoice = ",UserChoice );
    //genrate - computer choice
    const compChoice = genCompChoice();
    console.log("Computer Choice = ",compChoice);

    if(UserChoice == compChoice)
    {
        //draw
        drawGame();
    }
    else
    {
        let userWin = true;
        if(UserChoice == "rock")
        {
            //paper-scissors
            userWin = compChoice === "scissors" ? true : false;
        }
        else if(UserChoice == "paper")
        {
            //rock-scissors
            userWin = compChoice === "rock" ? true : false;
        }
        else if(UserChoice == "scissors")
        {
            //rock-paper
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin,UserChoice,compChoice);
    }
}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
    const UserChoice = choice.getAttribute("id");
    console.log("choice was clicked",UserChoice);
    playGame(UserChoice);
    })
});