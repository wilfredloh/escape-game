
///////////////////////////
CLUES, ITEMS & UNLOCKS
///////////////////////////
level 0
clues - monkey, window, painting, fire, nothing(clue 4)
items - key, paper, chair, potion
unlocks - horse, shelf, lamp, button

level 1
clues - vase (spider), lamp 1, lamp 2
items - main story paper (to break 3 seals), potion
unlocks - [seal 1, seal 2, seal 3], painting/button--> unlock remaining maps

level 2
clues - shelf (book inside), sofa (rest?), painting(hint for chair)
items - books (to throw), medallion 1, medallion 2
unlocks - desk (key)

level 3
clues - fire, window
items - medallion C (on the floor), potion
unlocks - [chair 1, chair 2, chair 3, chair 4], chandelier (linked to floor item)

extra
fire - increases burn counter
secret - if burn counters (2) > 4, unlock beach level
- cheat codes: fullhp, unlock all items, unlock all maps

///////////////////////////
ADDITIONAL FEATURES TO CONSIDER
///////////////////////////

GAME
*** REFACTOR CODE
1. make number hints random so that every time it's a new clue

		let a = function (num){
		    return Math.floor(Math.random()*num)
		}

2. add lastSeen funcitonality *** to link with items
3. add the next levels - level 5-8 (with clues);
4. have a map that tells players where they're at
5. find antidote === life stops decreasing
6. timer goes to 5 AM if hard mode
7. change alerts to modals

- add more cheat codes/secret items/easter egg

CSS
1. can find left right icons/item icons to look better ()
2. life bar instead of numbers
3. font to change to something more suitable (eg: RE font-type)
4. change hover on start button and easy /m/hard + sound effect when click should be diff
5. 1s fade into the main game board, and to change between pages
6. add moving images/GIFs
7. make hover bigger
8. when click on difficulty, add some sfx, then fade, then loading, then only start game

- see other video games how they do their styling (eg: RE7, Walking dead, outlast? )

//////////////////////////////////////////////////////////////

HOW THE GAME WORKS ...

	0 - start game by choosing difficulty
	1 - player has to search the room for clues and hints
	2 - if an object can be interacted with, it will show a grabbing mouse pointer
	3 - once player guesses the riddle it will unlock a new layer

	* if timer or player's life points reaches zero, lose game

//////////////////////////////////////////////////////////////

1. ask for name, start game button
2. show main image plus add in event listeners for each row entire board
    event listeners should be in rows where each row is a layer, then in each row, there is a column for the number of clues for that row
3. display none on the parts that i dont want user to click first, a counter to see which layer im in
4. provide an introduction and tell users what to do
5. when user clicks on an event
    i. if its a clue, do nothing
    ii. if its an item, push to array, display none
    iii. if its an unlockable, either prompt or display none, then display block a new listener
6. add an input bar at the bottom --> for using items
7. do the above until you win the game!

//////////////////////////////////////////////////////////////

POTENTIAL ITEMS
	items - knife, rope, antidote, paper
	unlocks - painting, brush, lever, zombie

THEMES
	zombie, desert, sewer, Sanctuary 2,

LEVELS
	1ST LEVEL - EASY (1 map, 1 hover)
	2ND LEVEL - MEDIUM (2 maps, 1 hover)
	3RD LEVEL - HARD (3 maps)

SOURCES:
	Escape room themes: https://lockpaperscissors.co/mysterious-escape-room-themes
	Five Nights at Freddys: https://www.agame.com/game/five-nights-at-freddys-3
	Walking dead telltale
	25 escape room themes - https://lockpaperscissors.co/mysterious-escape-room-themes