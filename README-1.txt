
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

///////////////////////////
ADDITIONAL FEATURES TO CONSIDER
///////////////////////////
Sorting order of features based on complexity:

- ask for name
- change hover to something else
- unlock item only if it's the last unlockable clicked (changing 'found' key to 'lastSeen')
- hover to show a map or use map
- end game: calculate your score (time left + health left + number of items found)
- stop losing life after 1st stage
- timer goes to 5 AM

- add a cheat code
- make more moving elements
- add more secret items

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


NEW Features/bugs:

background image

1. add difficulty at the start (easy DONE, now to finish medium)
2. add the next levels - level 5-8 (just the image);
4. win game --> fix the css
5. fix images of items
6. easter egg game
7. looped audio

- reduce text
- room not very obvious (first stage should be more straightforward)
- afraid or not?
- too many things to see

- fix css
- opacity of words
- position of items
- change left right icon
- bag width

-easter egg: if you burn yourself 4 times in room1 and 4 times in room 2, you can go to the beach in room 1 (pillar)
- cheat codes: fullhp, unlock all items, unlock all maps