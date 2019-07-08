
feedback:
1. yes/no ---> clickable (REPLACE TO -->) confirm();
2. top left corner to remove clickable
4. difficulty levels
5. unlock item only if it's the last unlockable clicked (changing 'found' key to 'lastSeen')
6. show pic when lose
7. make pic brighter..?
8. change audio/bg to an icon (add a start/stop button)
9. story to type out plus a blur before entering the scene


layer
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

***
- add a timer 5 mins
- add a score at the end of the game
- add health bar that decreases every second, poison decreases your health by 5

items - knife, rope, antidote, paper
unlocks - painting, brush, lever, zombie

/////////////////////////////////////////////////////////////////////////////

themes - zombie, desert, sewer, Sanctuary 2,

BASE LEVEL - EASY (1 map, 1 hover)
2ND LEVEL - MEDIUM (2 maps, 1 hover)
3RD LEVEL - HARD (3 maps)

AT END GAME - calculate your score (time left + health left + number of items found);

items [] key, knife, rope, antidote             [array]
health bar 100                                  [counter]
timer 5 minutes, at 0, pop up a LOSE image      [timer with if else]
a space for the story                           [p or h tag]
a space for input                               [input ]
hints

puzzles/riddles
- math
- type in input
-


SOURCES:
1. Escape room themes: https://lockpaperscissors.co/mysterious-escape-room-themes
2. Five Nights at Freddys: https://www.agame.com/game/five-nights-at-freddys-3

Stories
1. Walking dead telltale
2.