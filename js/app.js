// Slot Jack (Black Jack meets Slot machines)
//
// One player against AI. There is a grid with 3 columns, 3 'fix' buttons and a roll button.
// When the roll button is clicked the 3 columns cycle through an array of 52 cards each.
// The cards are each worth as many points as it is written on them apart from
// K, Q, J that are worth 10 points and Aces worth 11.
// The goal of the game is for the player to gather a score of 21 points and to not exceed that.
// 3 Aces win automatically. (3 Aces of Spades trigger extra bonus?)
// Both player and AI have 3 rounds to achieve that.
// Once the player rolls, he has the option to fix a column in order to hold that option for the second and third rolls. The AI has no option of that, it just rolls.
//
// -------------------------------------------------------
//
// Player, AI and cards/card values need to be assigned with an array or object literate.
// Connect values with cards.
// Assign onclick button to loop through the three arrays and randomly choose 3 values. Iterval of 2 seconds.
// A for loop should work wonders in this case.
// Make those values appear in the html with txt and possibly string interpolation.
// When the player wants to fix a value a class of 'fixed' will be added to the column they want to fix.
// If the column has a class of fixed && the player has rolls left they will be able to roll again.
// Not sure at this point how to restrict the player and AI to having 3 rolls each. Maybe a conditional statement?
// Render the roll and fix buttons inactive and remove 'fixed' class from columns when AI is rolling.
// If the player has rolled 3 times then it's the AI's turn.
// Then the score is calculated and a winner is decided.
// If player 1 score = 21 && > AI score then P1 wins, else if AI score = 21 && > P1 score, AI wins.
// else if player 1 score > 21 return loss, else tie.
// If player 1 || AI roll 3 Aces then it is a win else Aces = 11 points.

// const $player1 = '';
// const $ai = '';