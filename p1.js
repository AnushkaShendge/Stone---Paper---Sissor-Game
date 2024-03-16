let usc = 0;
let csc = 0;
let msg = document.querySelector(".msg")
const choices = document.querySelectorAll(".choice");

const uSchorepara = document.querySelector("#u-sc");
const cSchorepara = document.querySelector("#c-sc");

const genCompChoice = () => {
    const op = [ "rock" , "paper" , "scissor" ];
    let idx = Math.floor(Math.random() * 3);
    return op[idx];
}
const showWin = (uWin , uChoice , cChoice) => {
    if(uWin === true){
        usc++;
        uSchorepara.innerText = usc;
        msg.innerText = `You Won! . Your ${uChoice} beats ${cChoice}`;
        msg.style.backgroundColor = "Green";
    }else{
        csc++;
        cSchorepara.innerText = csc;
        msg.innerText = `You Lose . ${cChoice} beats your ${uChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (uChoice) => {
    console.log("User Choice : " , uChoice );
    let cChoice = genCompChoice();
    console.log("Computer Choice : " , cChoice );
    if(uChoice == cChoice){
        msg.innerText= "Game was Draw!";
        msg.style.backgroundColor = "blue";
    }
    else{
        let uWin = true;
        if(uChoice === "rock"){
            uWin = cChoice === "paper" ? false : true;
        }else if(uChoice === "paper"){
            uWin = cChoice === "scissor" ? false : true;
        }else if(uChoice === "scissor"){
            uWin = cChoice === "rock" ? false : true;
        }
        showWin(uWin , uChoice , cChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const uChoice = choice.getAttribute("id")
        playGame(uChoice);
    });
});
