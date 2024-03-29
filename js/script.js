console.log('main script running!');

//                   LAYER 0 - ON CLICK                 //

let checkMatch = function (event) {
   // THIS IS CAUSING A RANDOM PROBLEM SOMETIMES
   let clickingSound = document.querySelector('#clicking-sound');
    clickingSound.volume = 0.1;
    clickingSound.play();

    //      x = 3 represents 3 layers for now
    for (let x=0; x<4; x++) {
        let cluesDiv = document.querySelector('.all-clues-'+x);
        let itemsDiv = document.querySelector('.all-items-'+x);
        let unlockDiv = document.querySelector('.all-unlocks-'+x);
        if (cluesDiv === event.target.parentElement) {
            for (let i=0; i<cluesDiv.children.length; i++) {
                if (cluesDiv.children[i] === event.target) {
                    checkClue(i, event);
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
    }

    getCurrentItems();
    displayItemBar();
}
//               CHECK CLUE / ITEM / UNLOCK              //

let checkClue = function (number, event) {
    allClues[`layer${currentLayer}`][`clue${number}`].displayClue(event);
}

let checkItem = function (number, event) {
    allItems[`layer${currentLayer}`][`item${number}`].displayItem(event);
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
        itemImage.dataset.id = currentItems[i];
        itemImage.addEventListener('click', useItem);
        itemBar.appendChild(itemImage);
    }
}

//              INPUT OR CLICK ANSWERS         //

let getUserInput = function (event) {
    let userInput = document.querySelector('#input');
    let input = event.target.value;
    checkInput(input);
    event.target.value = '';
}

let checkInput = function (input) {
    filteredInput = input.toLowerCase();
    // if (input === 'use'){
    //     let use = helpers.prompts.usePrompt();
    //     // loops in allItems (each layer) and (each item)
    //     for (let i=0; i<Object.keys(allItems).length; i++){
    //         for (let j=0; j<Object.keys(allItems['layer'+i]).length; j++) {
    //             // if the item's found is true, run useItem()
    //             if (use === allItems['layer'+i]['item'+(j)]['name']){
    //                 if (allItems['layer'+i]['item'+(j)]['found']){
    //                     allItems['layer'+i]['item'+(j)].useItem(j);
    //                 } else {
    //                     invalidItems.missingItem(use)
    //                 }
    //             }
    //         }
    //     }
    // }
    if (filteredInput.includes('help')) {
        helpers.hints.help();
    //              CHEAT CODES!!!!!!!
    } else if (filteredInput === 'item321') {
        for (let i=0; i<Object.keys(allItems).length; i++){
            for (let j=0; j<Object.keys(allItems['layer'+i]).length; j++) {
                allItems['layer'+i]['item'+(j)]['found'] = true;
            }
        }
        alert('All items unlocked!');
        } else if (filteredInput === 'un321') {
            for (let i=0; i<Object.keys(allUnlockables).length; i++){
                for (let j=0; j<Object.keys(allUnlockables['layer'+i]).length; j++) {
                    allUnlockables['layer'+i]['unlockable'+(j)]['unlocked'] = true;
                    allUnlockables['layer'+i]['unlockable'+(j)]['found'] = true;
                }
            }
            sealBroken = true;
            alert('All maps unlocked!');
        } else if (filteredInput === 'stopt') {
            let timerbar = document.querySelectorAll('.stat-wrap')[3];
            timerbar.style.display = 'none';
            alert('Time stopped!');
        } else if (filteredInput === 'hp') {
            currentLifePoints = 9999;
            alert('Max HP!');
        }
    getCurrentItems();
    displayItemBar();
}
// have not input an alert when an invalid item is inputted

let useItem = function (event) {
    let dataId = event.target.dataset.id;
    for (let i=0; i<currentItems.length; i++){
        if (dataId === currentItems[i]){
            console.log(dataId);
            for (let j=0; j<Object.keys(allItems).length; j++){
                // need to find out why the method below doesn't work to replace k's length
                //Object.keys(allItems['layer'+k]).length
                for (let k=0; k<Object.keys(allItems['layer'+j]).length; k++) {
                    debugger;
                    if (dataId === allItems['layer'+j]['item'+(k)]['name']){
                        allItems['layer'+j]['item'+(k)].useItem();
                    }
                }
            }
        }
    }
    getCurrentItems();
    displayItemBar();
}

//                   GAME END                        //