console.log('layer1-dom.js running!')

let showNewMap = function () {
    //     add an arrow on the right
    // when clicked, run changeMap() funciton

// can do it in two ways -->
// 1. change by clicking right
// 2. change by going black, then cannot go back (eg:'the walls are shifting!')
}
let changeMap0 = function (){

}
let changeMap1 = function () {
    let totalClues1 = 5;
    let totalItems1 = 5;
    let totalUnlocks1 = 5;
    let divMainContainer = document.querySelector('.main-container');

    let gameContainer0 = document.querySelector('.game-container');
    gameContainer0.style.display = 'none';

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

}