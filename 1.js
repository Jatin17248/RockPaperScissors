// Your JavaScript Code Goes Here
let uwin=0;
let cwin=0;
let tgame=0;
let dgame=0;

const choices = document.querySelectorAll(".choice");
const options= ["rock","paper","scissors"];
const msg= document.querySelector('#msg');
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
	const userChoice = choice.getAttribute("id");
	console.log(userChoice);
	const compChoice = getCompchoice();
	showWinner(userChoice, compChoice);
  });
  });
  
document.addEventListener('keypress', function (event) {
var userChoice;
            
            switch (event.key) {
                case 'r':
                    userChoice = 'rock';
                    break;
                case 'p':
                    userChoice = 'paper';
                    break;
                case 's':
                    userChoice = 'scissors';
                    break;
                default:
                    // Ignore other key presses
                    return;
            }
  console.log(userChoice);
	const compChoice = getCompchoice();
	showWinner(userChoice, compChoice);
  
  });  
  function getCompchoice(){
	  return options[Math.floor(Math.random()*3)];
  }
  
function showWinner(userChoice, compChoice){
	tgame++;
  if( userChoice === compChoice){
	  dgame++;
	  msg.innerText=`You choosed ${userChoice} and comp choosed ${compChoice} So Game Drawed! Play Again`;
	  msg.style.backgroundColor="blue";
  }else{
	  if(userChoice === 'paper'){
		  if(compChoice === 'scissors'){
			  msg.innerText=`You choosed ${userChoice} and comp choosed ${compChoice} So You Lost! Play Again`;
			  cwin++;
			  msg.style.backgroundColor="red";
		  }
		  else{		//rock
			  msg.innerText=`You choosed ${userChoice} and comp choosed ${compChoice} So You Won! Play Again`;
			  uwin++;
			  msg.style.backgroundColor="green";
		  }
	  }
	  else if(userChoice === 'scissors'){
		  if(compChoice === 'rock'){
			  msg.innerText=`You choosed ${userChoice} and comp choosed ${compChoice} So You Lost! Play Again`;
			  cwin++;
			  msg.style.backgroundColor="red";
		  }else{		//paper
			  msg.innerText=`You choosed ${userChoice} and comp choosed ${compChoice} So You Won! Play Again`;
			  uwin++;
			  msg.style.backgroundColor="green";
		  }
	  }else{		//uchoice= rock
		  if(compChoice === 'paper'){
			  msg.innerText=`You choosed ${userChoice} and comp choosed ${compChoice} So You Lost! Play Again`;
			  cwin++;
			  msg.style.backgroundColor="red";
		  }
		  else{		//scissors
			  msg.innerText=`You choosed ${userChoice} and comp choosed ${compChoice} So You Won! Play Again`;
			  uwin++;
			  msg.style.backgroundColor="green";
		  }
	  }
  }
	document.querySelector('#ttl-game').innerText= tgame;
	document.querySelector('#drawg').innerText= dgame;
	document.querySelector('#user-score').innerText= uwin;
	document.querySelector('#comp-score').innerText= cwin;
	
  }