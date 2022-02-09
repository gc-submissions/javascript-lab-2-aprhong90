"use strict";

// TODO - write your code here.

const randomDamage = () => Math.floor(Math.random() * 10 + 1);

const chooseOption = (opt1, opt2) => {
  const randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2; //randNum ? opt2 : opt1; (except 0 every number is true. Here, opt2===1,opt1===0.)
};

const attackPlayer = function (health) {
  return health - randomDamage();
};

const logHealth = (player, health) =>
  console.log(`${player} health: ${health}`);

const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

const isDead = (health) => (health <= 0 ? true : false); // it can be just "health <= 0;"" it implies 'true or false'

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    const attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("April", "Andrea", 100, 100);

// Extended Challenges:
// Write some additional functions. Use whatever function style you like. Here are some ideas...
// ● printSquare: This function has a parameter for width. It logs a square shape to the
// console based on the width parameter. For example, given width 3, it would log:
// ### ### ###
// ● printTriangle: This function has a parameter for width. It logs a square shape to the console based on the width parameter. For example, given width 4, it would log:
// #
// ##
// ###
// ####
// ● Think of other shape methods you could write.
// ● getGrade: This function takes in a number parameter (0 to 100). It returns the
// corresponding letter grade using the scale: A=90+, B=80+, C=70+, D=60+, F=below 60. Call the function with different numbers and log the results. (Note: there should be no console.log inside the function.)
// ● prioritize: This function has two parameters, urgent and important, both boolean. It returns the priority according to this rule: urgent & important → 1, important not urgent → 2, urgent not important → 3, neither urgent nor important → 4.
