console.log('dom.js running!')

let currentLayer = 0;
let maxLayer = 3;

let difficulty = '';

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

let setDifficulty = function (event){
    let playerDiff = event.target.textContent.toLowerCase();
    difficulty = playerDiff;
}

let startGame = function (event) {
    // let body = document.querySelector('body');
    // body.style.backgroundImage = 'none';
    // body.style.backgroundColor = 'black';
    setDifficulty(event);
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
    document.querySelectorAll('.sidebar')[3].classList.add('bag-item');

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

    // hiding item 0-0 as it is found in an unlockable
    let item0Zero = document.querySelector('.item-0-0');
    item0Zero.style.display = 'none';
    let item0One = document.querySelector('.item-0-1');
    item0One.style.display = 'none';
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
    let totalClues1 = 4;
    let totalItems1 = 2;
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
    let totalClues2 = 3;
    let totalItems2 = 3;
    let totalUnlocks2 = 1;
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

// *** MAKE MEDALLION 3 hidden by default

let setMap3 = function () {

    //      setting starting variables      //
    let totalClues3 = 2;
    let totalItems3 = 3;
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

    //extra hiding items
    let item2Zero = document.querySelector('.item-2-0');
    item2Zero.style.display = 'none';
    let item2Two = document.querySelector('.item-2-2');
    item2Two.style.display = 'none';
    let item3Zero = document.querySelector('.item-3-0');
    item3Zero.style.display = 'none';


}
//                END OF LAYER 3                       //

/////////////////////////////////////////////////////////
//              DOM LAYER 4                   //
/////////////////////////////////////////////////////////
let setMap4 = function () {

    let divMainContainer = document.querySelector('.main-container');
    let divGameContainer4 = document.createElement('div');
    divGameContainer4.classList.add('game-container-4');
    divGameContainer4.classList.add('all-game-containers');
    divMainContainer.prepend(divGameContainer4);
    let gameContainer4 = document.querySelector('.game-container-4');
    gameContainer4.style.display = 'none';;
    setMap5();
    setMap6();
    setMap7();
}

let setMap5 = function () {

    let divMainContainer = document.querySelector('.main-container');
    let divGameContainer5 = document.createElement('div');
    divGameContainer5.classList.add('game-container-5');
    divGameContainer5.classList.add('all-game-containers');
    divMainContainer.prepend(divGameContainer5);
    let gameContainer5 = document.querySelector('.game-container-5');
    gameContainer5.style.display = 'none';;
}

let setMap6 = function () {

    let divMainContainer = document.querySelector('.main-container');
    let divGameContainer6 = document.createElement('div');
    divGameContainer6.classList.add('game-container-6');
    divGameContainer6.classList.add('all-game-containers');
    divMainContainer.prepend(divGameContainer6);
    let gameContainer6 = document.querySelector('.game-container-6');
    gameContainer6.style.display = 'none';;
}
let setMap7 = function () {

    let divMainContainer = document.querySelector('.main-container');
    let divGameContainer7 = document.createElement('div');
    divGameContainer7.classList.add('game-container-7');
    divGameContainer7.classList.add('all-game-containers');
    divMainContainer.prepend(divGameContainer7);
    let gameContainer7 = document.querySelector('.game-container-7');
    gameContainer7.style.display = 'none';;
}