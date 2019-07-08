console.log('layer1-dom.js running!')

let currentLayer = 0;
let maxLayer = 10;

//           INCREASE OR DECREASE MAP LEVEL     //
let decreaseMap = function (){
    for (let i = 0; i<maxLayer; i++) {
        let gameContainerToHide = document.querySelector('.game-container-' + currentLayer);
        let gameContainerToShow = document.querySelector('.game-container-' + (currentLayer-1));
        if (currentLayer === 0) {
            //nothing happens;
        } else if (currentLayer === i) {
            gameContainerToHide.style.display = 'none';
            gameContainerToShow.style.display = 'block';
        }
    }
    currentLayer -= 1;
}

let increaseMap = function (){
    // for (let i = 0; i<maxLayer; i++) {
    //     let gameContainerToHide = document.querySelector('.game-container-' + currentLayer);
    //     let gameContainerToShow = document.querySelector('.game-container-' + (currentLayer+1));
    //     if (currentLayer === maxLayer) {
    //         //nothing happens
    //     } else if (currentLayer === i) {

    //         gameContainerToHide.style.display = 'none';
    //         gameContainerToShow.style.display = 'block';
    //     }
    // }
    setMap2();
    currentLayer += 1;
}

//      SETTING MAP FOR LEVEL 1             //

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

    // setMap2();
}
//               END OF DOM LAYER 1             //

let setMap2 = function () {

    let gameContainer1 = document.querySelector('.game-container-1');
    gameContainer1.style.display = 'none';

    //      setting starting variables      //
    let totalClues2 = 5;
    let totalItems2 = 5;
    let totalUnlocks2 = 5;
    let divMainContainer = document.querySelector('.main-container');

    let divGameContainer2 = document.createElement('div');
    divGameContainer2.classList.add('game-container-2');

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

    // let statsContainer = document.querySelector('.stats-container');

    // divMainContainer.insertBefore(divGameContainer2, statsContainer);

    divMainContainer.prepend(divGameContainer2);

    // let gameContainer2 = document.querySelector('.game-container-2');
    // gameContainer2.style.display = 'none';
}