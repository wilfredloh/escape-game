
NEW Features/bugs:

EASY
- yes/no ---> clickable (REPLACE TO -->) confirm();
- top left corner to remove clickable
- add a subtle background to the entire body
- ask for name

MEDIUM
- show pic when lose (POP UP)
- unlock item only if it's the last unlockable clicked (changing 'found' key to 'lastSeen')
- change audio/bg to an icon (add a start/stop button)
- hover to show a map
- end game: calculate your score (time left + health left + number of items found)

HARD
- difficulty levels
- add a cheat code


//////////////////////////////////////////////////////////////

HOW THE GAME WORKS ...

	0 - start of game
	1 - box unlocked
	2 - riddle guessed, start of 2nd layer
	3 - something unlocked
	4 - riddle guessed, start of 3rd layer
	5 - something unlocked, win!

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