console.log('running!');
//////////////////////////////////////////////////////////////////////
//                      GLOBAL VARIABLES
//////////////////////////////////////////////////////////////////////

let button = document.querySelector('#start');

//////////////////////////////////////////////////////////////////////
//                      START GAME ON CLICK
//////////////////////////////////////////////////////////////////////

let startGame = function () {
    let container = document.querySelectorAll('.container')[0];

    container.style.display = 'block';
    button.style.display = 'none';
    createEventListeners();
}

button.addEventListener('click', startGame );

//////////////////////////////////////////////////////////////////////
//                      EVENT LISTENERS ON MAP
//////////////////////////////////////////////////////////////////////
let message = '';

let runClick = function (event) {
    for ( let i=0; i<divInside.length; i++ ){
            if ( divInside[i] === event.target ) {
                message = messages[i]['toUser'];
        }
    }
    alert(message)
}

let divInside = document.querySelectorAll('.inside');
let createEventListeners = function () {
    for ( let i=0; i<divInside.length; i++ ) {
        divInside[i].addEventListener('click', runClick);
    }
}
//////////////////////////////////////////////////////////////////////
//                             GAME ENDS
//////////////////////////////////////////////////////////////////////

let messages = [
    {
        toUser: 'This clue will help you answer the box prompt. Answer: AFT4125'
    },
    {
        toUser: 'This clue will confuse you'
    },
    {
        toUser: 'This is a key, added to your inventory'
    },
    {
        toUser: 'You need a key.'
    },
    {
        toUser: 'The box is open! I will now prompt you for a riddle'
    },
    {
        toUser: 'Now that you have answered the riddle, here is what to do next '
    }
]