const attackValue = 10;
const monsterAttackValue = 14;
const strongAttackValue = 17;
const heal_value = 20;

// Global variables for identifiers in conditional code
const mode_attack = "ATTACK";
const mode_strong_attack = "STRONG_ATTACK";
const log_event_player_attack = "PLAYER_ATTACK";
const log_event_player_strong_attack = "PLAYER_STRONG_ATTACK";
const log_event_monster_attack = "MONSTER_ATTACK";
const log_event_player_heal = "PLAYER_HEAL";
const log_event_monster_heal = "MONSTER_HEAL";

const enteredValue = prompt(
  "Select a value for the heal of player and monster: ",
  "100"
);

let chosenMaxLife = parseInt(enteredValue);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth) {
  let logEntry = {
    event: event,
    value: value,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };
  if (event === log_event_player_attack) {
    logEntry.target = "Monster";
    battleLog.push(logEntry);
  } else if (event === log_event_player_strong_attack) {
    logEntry.target = "Monster";
    battleLog.push(logEntry);
  } else if (event === log_event_monster_attack) {
    logEntry.target = "Player";
    battleLog.push(logEntry);
  } else if (event === log_event_player_heal) {
    logEntry.target = "Player";
    battleLog.push(logEntry);
  }
  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;

  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(monsterAttackValue);
  currentPlayerHealth -= playerDamage;

  if (currentPlayerHealth <= 0 && hasBonusLife === true) hasBonusLife = false;
  removeBonusLife();
  currentPlayerHealth = initialPlayerHealth;
  setPlayerHealth(initialPlayerHealth);
  alert("Bonus life activated.");

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You defeated the monster. You Won!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("Monster defeated you. You Lost!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("Draw!");
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  let maxDamage;
  if (mode === mode_attack) {
    maxDamage == attackValue;
  } else {
    maxDamage = strongAttackValue;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(monsterAttackValue);
  currentPlayerHealth -= playerDamage;
  endRound();
}

function attackHandler() {
  attackMonster(mode_attack);
}

function strongAttackHandler() {
  attackMonster(mode_strong_attack);
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - heal_value) {
    alert("You can't heal yourself more!");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = heal_value;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += heal_value;
  endRound();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
