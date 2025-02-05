let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random() *3);
    return options[randIdx];3
};
const drawGame=()=>{
    console.log("the game was drawn");
    msg.innerText="game was drawn. play again!";
    msg.computedStyleMap.backgroundColor="black";

}
const showWinner=(userWin)=>{
    if(userWin){
        console.log("you win!");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText='you Won!. userChoice beats CompChoice';
        msg.style.backgroundColor="green";
    }    else {
        compScore++;
        compScorePara.innerText=compScore;
    console.log("you lost!");   
       msg.innerText='you lost!. CompChoice beats your userChoice';
            msg.style.backgroundClor="red";
        }
    
}
const playGame=(userChoice)=>{
    console.log("userChoice=",userChoice);
    const CompChoice=genCompChoice();
    console.log("CompChoice=",CompChoice);
    if(userChoice===CompChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userWin==="rock"){
            //paper,scissor//
            userWin=CompChoice==="paper"?false:true;
        }
        else if (userWin==="paper"){
            //rock,scissor//
            userWin=CompChoice==="scissor"?false:true;
        }
        else{//scissor//
            //paper,rock//
            userWin=CompChoice==="rock"?false:true;

        }
        showWinner(userWin,userChoice,CompChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("Id");
        playGame(userChoice);
    
    });
});