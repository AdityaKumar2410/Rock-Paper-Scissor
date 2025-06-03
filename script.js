// this is a rock paper scissor game in jsx
//1 denotes rcok , 2 denotes paper and 3 denotes scissor
let values = ["rock", "paper", "scissors"];
let comp_options = [1, 2, 3];
let user_choice = null;
let user_score = 0;
let comp_score = 0;

let user_score_web = document.querySelector("#user-score");
let comp_score_web = document.querySelector("#comp-score");

let msg = document.querySelector("#msg")
function getRandomValue(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length); // Generate a random index
  return arr[randomIndex]; // Return the value at the random index
}

let rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  user_choice = 1;
  main();
});
let paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  user_choice = 2;
  main();
});
let scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  user_choice = 3;
  main();
});

function main() {
  let comp_choice = getRandomValue(comp_options);
  // let user_choice = prompt("Enter a number from 1 to 3:");

  if (user_choice > 3) alert("wrong input");
  else {
    if (user_choice == comp_choice) msg.textContent = "it is a draw";
    else {
      if (user_choice == 1 && comp_choice == 2) {
        msg.textContent = 
          `Computer won.`
        console.log(`You chose ${values[user_choice - 1] } and the computer chose ${values[comp_choice - 1]}`)  
        comp_score += 1;
      } else if (user_choice == 1 && comp_choice == 3) {
        msg.textContent = 
          `User won.`
          console.log(`You chose ${values[user_choice - 1] } and the computer chose ${values[comp_choice - 1]}`)  
        ;
        user_score += 1;
      } else if (user_choice == 2 && comp_choice == 1) {
        msg.textContent = 
          `User won.`
          console.log(`You chose ${values[user_choice - 1] } and the computer chose ${values[comp_choice - 1]}`)  
        ;
        user_score += 1;
      } else if (user_choice == 2 && comp_choice == 3) {
        msg.textContent = 
          `Computer won.`
          console.log(`You chose ${values[user_choice - 1] } and the computer chose ${values[comp_choice - 1]}`)  
        ;
        comp_score += 1;
      } else if (user_choice == 3 && comp_choice == 1) {
        msg.textContent = 
          `Computer won.`
          console.log(`You chose ${values[user_choice - 1] } and the computer chose ${values[comp_choice - 1]}`)  
        ;
        comp_score += 1;
      } else if (user_choice == 3 && comp_choice == 2) {
        msg.textContent = 
          `User won.`
          console.log(`You chose ${values[user_choice - 1] } and the computer chose ${values[comp_choice - 1]}`)  
        ;
        user_score += 1;
      }
    }
  }
  user_score_web.textContent = `${user_score}`;
  comp_score_web.textContent = `${comp_score}`;
}
