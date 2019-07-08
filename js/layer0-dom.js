console.log('layer0-dom.js running!')

//      BACKGROUND MUSIC RUNS IMMEDIATELY           //

// ADD START MUSIC ON START GAME, START/STOP BUTTON IN THE GAME ITSELF //
let toggleMusic = function () {
    backgroundMusic.play();
}
let backgroundMusic = document.querySelector('#bg-music');
let bgMusicButton = document.querySelector('#bg-button');
bgMusicButton.addEventListener('click', toggleMusic);

//      ADD ALL ELEMENTS - ON CLICK ' START'            //

let totalClues = 5; // adjust total number of clues
let totalItems = 4; // adjust total number of items
let totalUnlocks = 4; // adjust total number of unlocks

/////////////////////////////////////////////////////////
//      DIFFICULTY AND INTRO  DOM FUNCITON            //
/////////////////////////////////////////////////////////

// let instCont = document.createElement('div');
// let diffCont = document.createElement('div');
let startButton = document.querySelector('#start');

let showDifficulty = function () {
    let introContainer = document.querySelector('.intro-container');
    introContainer.style.display = 'none';

    let diffContainer = document.querySelector('.difficulty-container');
    diffContainer.style.display = 'block';
}

startButton.addEventListener('click', showDifficulty);

/////////////////////////////////////////////////////////
//              MAIN DOM FUNCITON                   //
/////////////////////////////////////////////////////////
let startGame0 = document.querySelectorAll('.difficulty')[0];
let startGame1 = document.querySelectorAll('.difficulty')[1];
let startGame2 = document.querySelectorAll('.difficulty')[2];

let startGame = function () {
    let divMainContainer = document.querySelector('.main-container');
    let divIntroContainer = document.querySelector('.intro-container');

        //           GAME CONTAINER              //

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
        timeStat.appendChild(timeBar)
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
}

// CHANGE THIS LATER ON SO THAT DEPENDING ON THE START, CHANGE THIS
startGame0.addEventListener('click', startGame);
startGame1.addEventListener('click', startGame);
startGame2.addEventListener('click', startGame);
//              END MAIN DOM FUNCTION            //

/////////////////////////////////////////////////////////
//            HEALTH AND TIMER FUNCITONS              //
/////////////////////////////////////////////////////////

let startTime = 10;
let time1 = startTime;
let time2 = 0;

let timeAPM = ': 00 PM'
let timeBPM = ': 30 PM'
let timeAAM = ': 00 AM'
let timeBAM = ': 30 AM'

let runInterval1; // HOUR
let runInterval2; // AM/PM
let runInterval3; //life points

let runCountdown = function () {
    runInterval1 = setInterval(startTimer1, 60000);
    runInterval2 = setInterval(startTimer2, 30000);
    runInterval3 = setInterval(decreaseLifePoints, 5000);
}

// CHANGE THIS TO EASY / MEDIUM OR HARD BUTTON!!!
startGame0.addEventListener('click', runCountdown);
startGame1.addEventListener('click', runCountdown);
startGame2.addEventListener('click', runCountdown);

//              TIMER 1 FOR HOUR       //
let startTimer1 = function () {
    let displayTime1 = document.querySelectorAll('.time')[0];
    let stopTimer = function (){
        clearInterval(runInterval1);
    }
    time1++;
    if (time1 === 12){
        displayTime1.textContent = time1;
        time1 = 0;
    } else if (time1 === 3){
        displayTime1.textContent = 3;
        stopTimer();
        setTimeout(function () {
            alert('You lose!')
        }, 1000);
    } else {
        displayTime1.textContent = time1;
    }
    if (time1 >= 2 && time1 <startTime ){
        displayTime1.style.color = 'red';
    }
}

//              TIMER 2 FOR AM AND PM       //
let startTimer2 = function () {
    let displayTime2 = document.querySelectorAll('.time')[1];
    let stopTimer = function (){
        clearInterval(runInterval2);
    }
    time2++;
    if (time1 < 12 && time1 > 3) {
        if (time2%2 === 0) {
            displayTime2.textContent = timeAPM;
        } else if (time1 < 12) {
            displayTime2.textContent = timeBPM;
        }
    } else {
        if (time2%2 === 0) {
            displayTime2.textContent = timeAAM;
        } else if (time1 < 12) {
            displayTime2.textContent = timeBAM;
        }
    }
    if (time1 === 3){
        stopTimer();
    }
    if (time1 >= 2 && time1 <startTime ){
        displayTime2.style.color = 'red';
    }
}

//                HEALTH DECREASE          //
let decreaseLifePoints = function () {
    let displayLifePoints = document.querySelectorAll('.sidebar')[5];
    let stopTimer = function (){
        clearInterval(runInterval3);
    }
    currentLifePoints--;
    displayLifePoints.textContent = currentLifePoints;
    if (currentLifePoints === 0){
        displayLifePoints.textContent = 0;
        stopTimer();
        setTimeout(function () {
            alert('You lose!')
        }, 1000);
    }
}

    //          END OF DOM!!!                      //