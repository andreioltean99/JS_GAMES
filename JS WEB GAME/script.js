// global variables
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let numClosedDoors = 3;
let openDoor1; let opernDoor2; let openDoor3;
let currentlyPlaying = true;
// isClicked () nu permite jucatorului sa apese de mai multe ori pe o usa deschisa pentru a scadea numarul de usi deschise
const isClicked = (door) =>{
  if(door.src === closedDoorPath){
     return false;
  }  else {
    return true;
  }
}
// playDoor function
const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver('win');
  }
  else if(isBot(door) === true)
    gameOver('lose');
    
}

// Generate random chore
 const randomChoreDoorGenerator= () => {
    choreDoor = Math.floor(Math.random() * numClosedDoors);
   if(choreDoor === 0) {
  openDoor1=botDoorPath;
  openDoor2=beachDoorPath;
  openDoor3=spaceDoorPath;
} 
   else if (choreDoor === 1) { 
  openDoor2=botDoorPath;
     openDoor1=beachDoorPath;
  openDoor3=spaceDoorPath;
} 
   else if(choreDoor === 2){
     openDoor3=botDoorPath;
     openDoor1=beachDoorPath;
  openDoor2=spaceDoorPath;
   }
 };
// isBot()
function isBot(door) {
  if(door.src === botDoorPath)
    return true;
  else
    return false;
}




// onclick
doorImage1.onclick = () => {
 if((currentlyPlaying === true) && (isClicked(doorImage1) === false)){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};
doorImage2.onclick = () =>{
  
       if((currentlyPlaying === true) && (isClicked(doorImage2) === false))
         {
           doorImage2.src = openDoor2;
      playDoor(doorImage2);
         }
};
doorImage3.onclick = () =>{
  if((currentlyPlaying === true) && (isClicked(doorImage3) === false))
    {
       doorImage3.src = openDoor3;
      playDoor(doorImage3);
    }
};
function startRound () {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  // Call generate function
randomChoreDoorGenerator();
}
startButton.onclick = () =>{
  if(currentlyPlaying === false)
  startRound();
}


const gameOver = (status) => {
  if (status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  }
  else{
    startButton.innerHTML = "Game over! Play again?";
  }
  currentlyPlaying = false;
}

// Call start function
startRound();