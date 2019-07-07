console.log('layer0-dom.js running!')
//      ADD ALL ELEMENTS - ON CLICK ' START'              //

let totalClues = 5; // adjust total number of clues
let totalItems = 5; // adjust total number of items
let totalUnlocks = 5; // adjust total number of unlocks

let startButton = document.querySelector('#start');

//              MAIN DOM FUNCITON                   //
let startGame = function () {
    let divMainContainer = document.querySelector('.main-container');
    let divIntroContainer = document.querySelector('.intro-container');

    //              GAME CONTAINER                 //

    let divGameContainer = document.createElement('div');
    divGameContainer.classList.add('game-container');

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
    // m = 2 because there are 2 bars in each stat-wrap
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
    let statsArray = ['Action', '', 'Bag', '', 'Life', '', 'Time', '12 AM'];
    for (let n=0; n<statsArray.length; n++) {
        let currentStat = document.querySelectorAll('.sidebar')[n]
        currentStat.textContent = statsArray[n];
    }
    // creating INPUT BAR                           //
    let inputDiv = document.querySelectorAll('.sidebar')[1];
    let input = document.createElement('input');
    input.id = 'input';
    inputDiv.appendChild(input);
    input.addEventListener('change', getUserInput);
    // creating INPUT BAR                           //
    let displayBar1 = document.querySelectorAll('.sidebar')[3];
    let displayBar2 = document.querySelectorAll('.sidebar')[5];
    displayBar1.classList.add('bar');
    displayBar2.classList.add('bar');
    // remove START BUTTON AND HEADER                      //
    let introContainer = document.querySelector('.intro-container');
    introContainer.style.display = 'none';

}

startButton.addEventListener('click', startGame);


//              HEALTH AND TIMER FUNCITON                   //

let health = 100;
let time = 10;
let runInterval;

let runCountdown = function () {
    let displayHealth = document.querySelectorAll('.sidebar')[5];
    let displayTime = document.querySelectorAll('.sidebar')[7];
    // let board = document.getElementById('board');
    // let h1 = document.getElementsByTagName('h1')[0];
    displayTime.textContent = time;
    // board.insertBefore(displayTimer, h1);
    runInterval = setInterval(startTimer, 1000)
}
startButton.addEventListener('click', runCountdown);

let startTimer = function () {
    let displayHealth = document.querySelectorAll('.sidebar')[5];
    let displayTime = document.querySelectorAll('.sidebar')[7];

    let stopTimer = function (){
        clearInterval(runInterval);
    }
    time++;
    if (time === 3){
        stopTimer();
    }
    displayTime.textContent = time;
    // if (moveHappened === true) {
    //     stopTimer();
    //     moveHappened = false;
    //     timer = 5;
    //     runCountdown();
    // } else if (timer === 0) {
    //     alert('You lose!')
    //     stopTimer();
    // } else if (timer > 0) {
    //     timer -= 1;
    //     displayTimer.textContent = timer;
    // }
    console.log(time);
}

    //          END OF DOM!!!                      //