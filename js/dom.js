console.log('dom.js running!')

let currentLayer = 0;
let maxLayer = 10;

/////////////////////////////////////////////////////////
//              DOM LAYER 0                   //
/////////////////////////////////////////////////////////

let totalClues = 5; // adjust total number of clues
let totalItems = 4; // adjust total number of items
let totalUnlocks = 4; // adjust total number of unlocks

let divMainContainer = document.querySelector('.main-container');
let startButton = document.querySelector('#start');
let storyContainer = document.querySelector('.story-container');

let startGame0 = document.querySelectorAll('.difficulty')[0];
let startGame1 = document.querySelectorAll('.difficulty')[1];
let startGame2 = document.querySelectorAll('.difficulty')[2];

let startGame = function () {
    //leave this out for now... there is a global variable that does the same thing.. if all ok in a few tries, can delete below
    // let divMainContainer = document.querySelector('.main-container');
    let divIntroContainer = document.querySelector('.intro-container');

        //           GAME CONTAINER              //

    let divGameContainer = document.createElement('div');
    divGameContainer.classList.add('game-container-0');
    divGameContainer.classList.add('all-game-containers');

    let cluesDiv = document.createElement('div');
    cluesDiv.classList.add('all-clues-0');
    cluesDiv.addEventListener('click', checkMatch)

    let itemsDiv = document.createElement('div');
    itemsDiv.classList.add('all-items-0');
    itemsDiv.addEventListener('click', checkMatch)

    let unlockDiv = document.createElement('div');
    unlockDiv.classList.add('all-unlocks-0');
    unlockDiv.addEventListener('click', checkMatch)

    for (let i=0; i<totalClues; i++) {
        let divClue = document.createElement('div');
        divClue.classList.add('clue-0-'+i);
        divClue.classList.add('click');
        divClue.textContent = 'clue'+i;
        cluesDiv.appendChild(divClue);
    }
    for (let j=0; j<totalItems; j++) {
        let divItem = document.createElement('div');
        divItem.classList.add('item-0-'+j);
        divItem.classList.add('click');
        divItem.textContent = 'item'+j;
        itemsDiv.appendChild(divItem);
    }
    for (let k=0; k<totalUnlocks; k++) {
        let divUnlock = document.createElement('div');
        divUnlock.classList.add('unlock-0-'+k);
        divUnlock.classList.add('click');
        divUnlock.textContent = 'unlock'+k;
        unlockDiv.appendChild(divUnlock);
    }

    divGameContainer.appendChild(cluesDiv);
    divGameContainer.appendChild(itemsDiv);
    divGameContainer.appendChild(unlockDiv);

    divMainContainer.appendChild(divGameContainer);

    //              STATS CONTAINER                 //
    let divStatsContainer = document.createElement('div');
    divStatsContainer.classList.add('stats-container');

    // creating CLASS: STAT WRAP                    //
    // l = 4 because there are 4 stat bars at the bottom
    // m = 2 because there are 2 sidebars in each stat-wrap
    for(let l=0; l<4 ; l++) {
        let stats = document.createElement('div');
        stats.classList.add('stat-wrap');
        for (let m=0; m<2; m++) {
            let sidebar = document.createElement('div');
            sidebar.classList.add('sidebar');
            stats.appendChild(sidebar);
        }
        divStatsContainer.appendChild(stats);
    }
    divMainContainer.appendChild(divStatsContainer)

    // creating CLASS: SIDEBAR                      //
    let statsArray = ['Action', '', 'Bag', '', 'Life', '100', 'Time', ''];
    for (let n=0; n<statsArray.length; n++) {
        let currentStat = document.querySelectorAll('.sidebar')[n]
        currentStat.textContent = statsArray[n];
    }
    // creating CLASS: TIME (UNDER SIDEBAR 8)       //
    let timeStat = document.querySelectorAll('.sidebar')[7];
    for (let o=0; o<2; o++) {
        let timeBar = document.createElement('div');
        timeBar.classList.add('time');
        timeStat.appendChild(timeBar);
    }
    let timeBar1 = document.querySelectorAll('.time')[0];
    timeBar1.textContent = 10;
    let timeBar2 = document.querySelectorAll('.time')[1];
    timeBar2.textContent = ': 00 PM';

    // creating INPUT BAR                           //
    let inputDiv = document.querySelectorAll('.sidebar')[1];
    let input = document.createElement('input');
    input.id = 'input';
    inputDiv.appendChild(input);
    input.addEventListener('change', getUserInput);

    // ADDING CLASS TO STATUS BARS                     //
    let displayBar1 = document.querySelectorAll('.sidebar')[3];
    let displayBar2 = document.querySelectorAll('.sidebar')[5];
    displayBar1.classList.add('bar');
    displayBar2.classList.add('bar');

    // remove DIFFICULTY BUTTONS AND START GAME         //
    let diffContainer = document.querySelector('.difficulty-container');
    diffContainer.style.display = 'none';

    // add BLUR EFFECT                  //
    let storyContainer = document.querySelector('.story-container');
    divGameContainer.classList.add('blur');
    divStatsContainer.classList.add('blur');
    storyContainer.style.display = 'block';
    storyContainer.addEventListener('click',removeStory)
}
//              END MAIN DOM FUNCTION            //

// CHANGE THIS LATER ON SO THAT DEPENDING ON THE DIFFICULTY USER PICKS,, CHANGE THESE BUTTONS
startGame0.addEventListener('click', startGame);
startGame1.addEventListener('click', startGame);
startGame2.addEventListener('click', startGame);

//                END OF LAYER 0                       //

/////////////////////////////////////////////////////////
//              DOM LAYER 1                   //
/////////////////////////////////////////////////////////

let setMap1 = function () {

    //      disable map 0, enable map 1     //
    let gameContainer0 = document.querySelector('.game-container-0');
    gameContainer0.style.display = 'none';
    //      setting starting variables      //
    let totalClues1 = 5;
    let totalItems1 = 5;
    let totalUnlocks1 = 5;
    let divMainContainer = document.querySelector('.main-container');

    let divGameContainer1 = document.createElement('div');
    divGameContainer1.classList.add('game-container-1');
    divGameContainer1.classList.add('all-game-containers');

    let cluesDiv1 = document.createElement('div');
    cluesDiv1.classList.add('all-clues-1');
    cluesDiv1.addEventListener('click', checkMatch)

    let itemsDiv1 = document.createElement('div');
    itemsDiv1.classList.add('all-items-1');
    itemsDiv1.addEventListener('click', checkMatch)

    let unlockDiv1 = document.createElement('div');
    unlockDiv1.classList.add('all-unlocks-1');
    unlockDiv1.addEventListener('click', checkMatch)

    for (let i=0; i<totalClues1; i++) {
        let divClue = document.createElement('div');
        divClue.classList.add('clue-1-'+i);
        divClue.classList.add('click');
        divClue.textContent = 'clue'+i;
        cluesDiv1.appendChild(divClue);
    }
    for (let j=0; j<totalItems1; j++) {
        let divItem = document.createElement('div');
        divItem.classList.add('item-1-'+j);
        divItem.classList.add('click');
        divItem.textContent = 'item'+j;
        itemsDiv1.appendChild(divItem);
    }
    for (let k=0; k<totalUnlocks1; k++) {
        let divUnlock = document.createElement('div');
        divUnlock.classList.add('unlock-1-'+k);
        divUnlock.classList.add('click');
        divUnlock.textContent = 'unlock'+k;
        unlockDiv1.appendChild(divUnlock);
    }

    divGameContainer1.appendChild(cluesDiv1);
    divGameContainer1.appendChild(itemsDiv1);
    divGameContainer1.appendChild(unlockDiv1);

    divMainContainer.prepend(divGameContainer1);
    //      adding arrows to switch between maps     //
    let navArrowLeft = document.createElement('img');
    let navArrowRight = document.createElement('img');
    navArrowLeft.classList.add('left-arrow');
    navArrowRight.classList.add('right-arrow');
    navArrowLeft.addEventListener('click', decreaseMap);
    navArrowRight.addEventListener('click', increaseMap);

    divMainContainer.appendChild(navArrowLeft);
    divMainContainer.appendChild(navArrowRight);

    setMap2();
}

//                END OF LAYER 1                       //

/////////////////////////////////////////////////////////
//              DOM LAYER 2                   //
/////////////////////////////////////////////////////////

let setMap2 = function () {

    //      setting starting variables      //
    let totalClues2 = 5;
    let totalItems2 = 5;
    let totalUnlocks2 = 5;
    let divMainContainer = document.querySelector('.main-container');

    let divGameContainer2 = document.createElement('div');
    divGameContainer2.classList.add('game-container-2');
    divGameContainer2.classList.add('all-game-containers');

    let cluesDiv2 = document.createElement('div');
    cluesDiv2.classList.add('all-clues-2');
    cluesDiv2.addEventListener('click', checkMatch)

    let itemsDiv2 = document.createElement('div');
    itemsDiv2.classList.add('all-items-2');
    itemsDiv2.addEventListener('click', checkMatch)

    let unlockDiv2 = document.createElement('div');
    unlockDiv2.classList.add('all-unlocks-2');
    unlockDiv2.addEventListener('click', checkMatch)

    for (let i=0; i<totalClues2; i++) {
        let divClue = document.createElement('div');
        divClue.classList.add('clue-2-'+i);
        divClue.classList.add('click');
        divClue.textContent = 'clue'+i;
        cluesDiv2.appendChild(divClue);
    }
    for (let j=0; j<totalItems2; j++) {
        let divItem = document.createElement('div');
        divItem.classList.add('item-2-'+j);
        divItem.classList.add('click');
        divItem.textContent = 'item'+j;
        itemsDiv2.appendChild(divItem);
    }
    for (let k=0; k<totalUnlocks2; k++) {
        let divUnlock = document.createElement('div');
        divUnlock.classList.add('unlock-2-'+k);
        divUnlock.classList.add('click');
        divUnlock.textContent = 'unlock'+k;
        unlockDiv2.appendChild(divUnlock);
    }

    divGameContainer2.appendChild(cluesDiv2);
    divGameContainer2.appendChild(itemsDiv2);
    divGameContainer2.appendChild(unlockDiv2);

    divMainContainer.prepend(divGameContainer2);

    let gameContainer2 = document.querySelector('.game-container-2');
    gameContainer2.style.display = 'none';

    setMap3();
}
//                END OF LAYER 2                       //

/////////////////////////////////////////////////////////
//              DOM LAYER 3                   //
/////////////////////////////////////////////////////////

let setMap3 = function () {

    //      setting starting variables      //
    let totalClues3 = 5;
    let totalItems3 = 5;
    let totalUnlocks3 = 5;
    let divMainContainer = document.querySelector('.main-container');

    let divGameContainer3 = document.createElement('div');
    divGameContainer3.classList.add('game-container-3');
    divGameContainer3.classList.add('all-game-containers');

    let cluesDiv3 = document.createElement('div');
    cluesDiv3.classList.add('all-clues-3');
    cluesDiv3.addEventListener('click', checkMatch)

    let itemsDiv3 = document.createElement('div');
    itemsDiv3.classList.add('all-items-3');
    itemsDiv3.addEventListener('click', checkMatch)

    let unlockDiv3 = document.createElement('div');
    unlockDiv3.classList.add('all-unlocks-3');
    unlockDiv3.addEventListener('click', checkMatch)

    for (let i=0; i<totalClues3; i++) {
        let divClue = document.createElement('div');
        divClue.classList.add('clue-3-'+i);
        divClue.classList.add('click');
        divClue.textContent = 'clue'+i;
        cluesDiv3.appendChild(divClue);
    }
    for (let j=0; j<totalItems3; j++) {
        let divItem = document.createElement('div');
        divItem.classList.add('item-3-'+j);
        divItem.classList.add('click');
        divItem.textContent = 'item'+j;
        itemsDiv3.appendChild(divItem);
    }
    for (let k=0; k<totalUnlocks3; k++) {
        let divUnlock = document.createElement('div');
        divUnlock.classList.add('unlock-3-'+k);
        divUnlock.classList.add('click');
        divUnlock.textContent = 'unlock'+k;
        unlockDiv3.appendChild(divUnlock);
    }

    divGameContainer3.appendChild(cluesDiv3);
    divGameContainer3.appendChild(itemsDiv3);
    divGameContainer3.appendChild(unlockDiv3);

    divMainContainer.prepend(divGameContainer3);

    let gameContainer3 = document.querySelector('.game-container-3');
    gameContainer3.style.display = 'none';
}
//                END OF LAYER 3                       //

/////////////////////////////////////////////////////////
//              DOM LAYER 4                   //
/////////////////////////////////////////////////////////