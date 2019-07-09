console.log('display.js running!')
/////////////////////////////////////////////////////////
//      TOGGLE MUSIC ON AND OFF             //
/////////////////////////////////////////////////////////

let musicToggle = false;

let backgroundMusic = document.querySelector('#bg-music');
let bgMusicButton = document.querySelector('#bg-button');

let toggleMusic = function () {
    bgMusicButton = document.querySelector('#bg-button');
    if (musicToggle === false) {
        backgroundMusic.play();
        // bgMusicButton.src = "./images/icons/sound-off.png";

        musicToggle = true;

    } else {
        backgroundMusic.pause();
        // bgMusicButton.src = "./images/icons/sound-on.jpg";
        musicToggle = false;
    }
}
bgMusicButton.addEventListener('click', toggleMusic);

/////////////////////////////////////////////////////////
//      DIFFICULTY AND INTRO  DOM FUNCITON            //
/////////////////////////////////////////////////////////

let showDifficulty = function () {
    let introContainer = document.querySelector('.intro-container');
    introContainer.style.display = 'none';

    let diffContainer = document.querySelector('.difficulty-container');
    diffContainer.style.display = 'block';
}

startButton.addEventListener('click', showDifficulty);

let removeStory = function () {
    // let storyContainer = document.querySelector('.story-container');
    let divGameContainer = document.querySelector('.game-container-0');
    let divStatsContainer = document.querySelector('.stats-container');
    storyContainer.style.display = 'none';
    divGameContainer.classList.remove('blur');
    divStatsContainer.classList.remove('blur');
}

/////////////////////////////////////////////////////////
//         GAMEOVER POP UP FOR TIME AND LIFE          //
/////////////////////////////////////////////////////////

let gameOver = function (number) {
    let divGameContainer = document.querySelector('.game-container-0');
    let divStatsContainer = document.querySelector('.stats-container');
    let gameOverContainer = document.querySelector('.gameOver-container');
    let gameOverLifeSound = document.querySelector('#gameover-life-sound');
    let gameOverTimeSound = document.querySelector('#gameover-time-sound');

    console.log('entered gameover function');
    if (number === 1){
        // gameOverContainer.style.backgroundImage = 'none';
        gameOverContainer.classList.add('gameOver-container2');
        gameOverTimeSound.play();
    } else {
        gameOverContainer.classList.add('gameOver-container');
        gameOverLifeSound.play();
    }

    divGameContainer.classList.add('blur1');
    divStatsContainer.classList.add('blur1');
    gameOverContainer.style.display = 'flex';
    gameOverContainer.addEventListener('click', function(){
        location.reload();
    });
}

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
    runInterval1 = setInterval(startTimer1, 120000);
    runInterval2 = setInterval(startTimer2, 60000);
    runInterval3 = setInterval(decreaseLifePoints, 5000);
}

storyContainer.addEventListener('click', runCountdown);

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
            // alert('You lose!');
            gameOver();
        }, 1000);
    } else {
        displayTime1.textContent = time1;
    }

    if (time1 >= 2 && time1 <startTime ){
        displayTime1.style.color = 'red';
        // divGameContainer.classList.add('blur1');
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

//                HEALTH FUNCTIONS          //
let currentLifePoints = 100;

let decreaseLifePoints = function () {
    let stopTimer = function (){
        clearInterval(runInterval3);
    }
    currentLifePoints--;
    displayLifePoints();
    // if (currentLifePoints <= 0){
    //     lifePointBar.textContent = 0;
    //     setTimeout(function () {
    //         gameOverContainer.style.backgroundImage = "url('..images/gameover2.png')";
    //         gameOver();
    //     }, 1000);
    //     stopTimer();
    // }
}
let displayLifePoints = function () {
    let lifePointBar = document.querySelectorAll('.sidebar')[5];
    let stopTimer = function () {
        clearInterval(runInterval3);
    }
    if (currentLifePoints <= 0){
        lifePointBar.textContent = 0;
        setTimeout(function () {
            gameOver(1);
        }, 1000);
        stopTimer();
    } else {
        lifePointBar.textContent = currentLifePoints;
    }
}

/////////////////////////////////////////////////////////
//            INCREASE OR DECREASE MAP LEVEL              //
/////////////////////////////////////////////////////////
console.log('dom.js running!')


let decreaseMap = function (){
    debugger;
    for (let i = 0; i<=maxLayer; i++) {
        let gameContainerToHide = document.querySelector('.game-container-' + currentLayer);
        let gameContainerToShow = document.querySelector('.game-container-' + (currentLayer-1));
        if (currentLayer === 0) {
            // navArrowLeft.classList.remove('left-arrow');
            break;
        } else if (currentLayer === i) {
            gameContainerToHide.style.display = 'none';
            gameContainerToShow.style.display = 'block';
            currentLayer -= 1;
            break;
        }
    }
}

let increaseMap = function (){
    debugger;
    for (let i = 0; i<=maxLayer; i++) {
        let gameContainerToHide = document.querySelector('.game-container-' + currentLayer);
        let gameContainerToShow = document.querySelector('.game-container-' + (currentLayer+1));
        if (currentLayer === maxLayer) {
            // navArrowRight.classList.remove('right-arrow');
            break;
        } else if (currentLayer === i) {
            gameContainerToHide.style.display = 'none';
            gameContainerToShow.style.display = 'block';
            currentLayer += 1;
            break;
        }
    }
}
    //          END OF DOM!!!                      //