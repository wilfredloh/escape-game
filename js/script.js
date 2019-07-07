console.log('main script running!');

let currentLayer = 0; // do i need a layer actually?

//                   LAYER 0 - ON CLICK                 //

let checkMatch = function (event) {

let cluesDiv = document.querySelector('.all-clues-0');
let itemsDiv = document.querySelector('.all-items-0');
let unlockDiv = document.querySelector('.all-unlocks-0');

    if (cluesDiv === event.target.parentElement) {
        for (let i=0; i<cluesDiv.children.length; i++) {
            if (cluesDiv.children[i] === event.target) {
                checkClue(i);
            }
        }
    } else if (itemsDiv === event.target.parentElement) {
        for (let i=0; i<itemsDiv.children.length; i++) {
            if (itemsDiv.children[i] === event.target) {
                checkItem(i, event);
            }
        }
    } else if (unlockDiv === event.target.parentElement) {
        for (let i=0; i<unlockDiv.children.length; i++) {
            if (unlockDiv.children[i] === event.target) {
                checkUnlock(i, event);
            }
        }
    }
    getCurrentItems();
    displayItemBar();
}

//               CHECK CLUE / ITEM / UNLOCK              //

let checkClue = function (number) {
    allClues[`layer${currentLayer}`][`clue${number}`].displayClue();
}

let checkItem = function (number, event) {
    allItems[`layer${currentLayer}`][`item${number}`].displayItem(number, event);
}

let checkUnlock = function (number, event) {
    if (allUnlockables[`layer${currentLayer}`][`unlockable${number}`]['unlocked'] === true && allUnlockables[`layer${currentLayer}`][`unlockable${number}`]['found'] === true ) {
        allUnlockables[`layer${currentLayer}`][`unlockable${number}`].displayUnlocked(number, event);
    } else {
        allUnlockables[`layer${currentLayer}`][`unlockable${number}`]['found'] = true;
        allUnlockables[`layer${currentLayer}`][`unlockable${number}`].displayLocked(number, event);
    }
}

//           CURRENT ITEM LIST & DISPLAY ITEMS               //

let currentItems = [];

let getCurrentItems = function () {
    currentItems = [];
    // for each layer, check each item in ALLITEMS if 'found' is TRUE
    // if yes, push the 'found' item into the CURRENT ITEMS ARRAY
    for (let i=0; i<Object.keys(allItems).length; i++){
        for (let j=0; j<Object.keys(allItems['layer'+i]).length; j++) {
            if (allItems['layer'+i]['item'+(j)]['found'] === true){
            currentItems.push(allItems['layer'+i]['item'+(j)]['name']);
            }
        }
    }
}

let displayItemBar = function () {
    let itemBar = document.querySelectorAll('.bar')[0];
    while(itemBar.firstChild){
        itemBar.removeChild(itemBar.firstChild);
    }
    for (let i=0; i<currentItems.length; i++) {
        let itemImage = document.createElement('img');
        itemImage.classList.add(`item-${currentItems[i]}`);
        itemBar.appendChild(itemImage);
    }
}

//                      INPUT ANSWERS                            //

// let userInput = document.querySelector('#input');
// let input = '';

let getUserInput = function (event) {
    let userInput = document.querySelector('#input');
    let input = event.target.value;
    checkInput(input);
    event.target.value = '';
}

let checkInput = function (input) {
    if (input === 'use'){
        let use = helpers.prompts.usePrompt();
        // loops in allItems (each layer) and (each item)
        for (let i=0; i<Object.keys(allItems).length; i++){
            for (let j=0; j<Object.keys(allItems['layer'+i]).length; j++) {
                // if the item's found is true, run useItem()
                if (use === allItems['layer'+i]['item'+(j)]['name']){
                    if (allItems['layer'+i]['item'+(j)]['found']){
                        allItems['layer'+i]['item'+(j)].useItem(j);
                    } else {
                        invalidItems.missingItem(use)
                    }
                }
            }
        }
    }
    if (input === 'help') {
        helpers.hints.help();
    } else if (input === 'cheat1') {
        //unlock all items in the game
    }
    getCurrentItems();
    displayItemBar();
}
// have not input an alert when an invalid item is inputted

//                   GAME END                        //