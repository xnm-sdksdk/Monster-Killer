# JavaScript Game - Defeat the Monster# Monster Attack Game

Welcome to the Monster Attack Game! This is a simple JavaScript game where you control a player character and engage in battles against a monster. The objective is to defeat the monster while managing your health and using various attack options strategically.

## Gameplay Instructions

1. Upon launching the game, you will be prompted to enter a value for the player and monster health. If no valid value is provided, the default health value is set to 100.

2. The game interface displays two health bars: one for the player and one for the monster. The initial health values are set based on the chosen or default values.

3. Attack the monster by clicking the "Attack" button. This will cause the player to deal a standard attack damage to the monster.

4. Use the "Strong Attack" button to perform a stronger attack, which inflicts more damage to the monster but also affects the player's health.

5. Click the "Heal" button to restore a fixed amount of health to the player character.

6. The game keeps track of the health of both the player and the monster. The battle continues until either the player or the monster's health reaches zero.

7. If the player's health drops to zero, it's game over and the player loses. If the monster's health reaches zero first, the player wins.

8. Additionally, the game provides a bonus life feature. If the player's health drops to zero but still has a bonus life, the player is given another chance with restored health. The bonus life is consumed upon activation.

9. After each battle, you have the option to reset the game and start a new battle with the same or different health values.

## Technologies Used

- JavaScript
- HTML
- CSS

## How to Run the Game

1. Download or clone the game repository from [GitHub link](https://github.com/your-username/monster-attack-game).

2. Open the `index.html` file in a web browser.

3. Enter the desired values for the player and monster health when prompted. If no value is entered or an invalid value is provided, the default value of 100 will be used.

4. Play the game by using the attack buttons and managing your health strategically.

## Game Development and Contributions

This game was developed using JavaScript and HTML, making use of the provided `adjustHealthBars` and `resetGame` functions to handle health bar adjustments and game resets.

Contributions to the game are welcome. If you would like to contribute, please follow the guidelines in the CONTRIBUTING.md file.

## Acknowledgments

- This game was inspired by classic turn-based RPG battles.
- The game logic and structure were implemented based on tutorials and examples.
- Special thanks to the developers and contributors of the libraries and resources used in this game.

Enjoy playing the Monster Attack Game! If you have any questions or feedback, please don't hesitate to contact us.
