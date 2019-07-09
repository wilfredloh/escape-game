console.log('layers.js running!')
//                  BAG & MESSAGE PROMPTS

// extra global variables (FUN)          //
let burnCounter = 0;
let chairCount = 0;
let sealBroken = false;
let sealCount = 0;

//              ALL MESSAGES BELOW               //
let allClues = {
    layer0: {
        clue0: {
            displayClue() {
                alert(`"A cute-looking toy monkey. It's holding a paper..." \n\n It says: \n\n HELLO tHERE hUMAN, rEAD ME WELL. MY NAMe IS HOWARD THE MONKeY.`);
            }
        },
        clue1: {
            displayClue() {
                let inspect = confirm(`"It's dark outside. There's a writing on the window but it's hard to see clearly..."\n\n Look closer?`);
                if (inspect) {
                    alert(` "At the beginning, there were eight animals..."`);
                }
            }
        },
        clue2: {
            displayClue() {
                alert(`"The painting looks old. It looks like the painter was trying to draw his last seven horses..."`)
            }
        },
        clue3: {
            displayClue() {
                let answer = confirm(`"A cozy fireplace. Wish I could spend more time here..." \n\n Touch fire?`);
                if (answer) {
                    if (burnCounter === 3) {
                        alert('You unlocked a secret item!');
                    } else {
                        alert('You burned yourself!');
                        currentLifePoints -= 20;
                        displayLifePoints();
                    }
                    burnCounter +=1;;
                }
            }
        },
        clue4: {
            displayClue() {
                alert(`"Nothing here..."`)
            }
        }
    },
    layer1: {
        clue0: {
            displayClue() {
                let answer = confirm(`"A shiny vase. There's something moving inside." \n\n Inspect?`);
                if (answer){
                    alert(`It's a spider! You got bit!`);
                    currentLifePoints -= 10;
                    displayLifePoints();
                    event.target.style.display = 'none';
                } else {
                    alert(`"Good call, that spider looks dangerous...`);
                }
            }
        },
        clue1: {
            displayClue() {
                alert(` "Nice carpet..."`);
            }
        },
        clue2: {
            displayClue() {
                alert(`"Looks sturdy. The fire's dying out."`)
            }
        },
        clue3: {
            displayClue() {
                alert(`"Looks sturdy. The fire's dying out."`)
            }
        }
    },
    layer2: {
        clue0: {
            displayClue() {
                let answer = confirm(`"This sofa looks comfortable." \n\n Take a break?`);
                if (answer){
                    alert(`Your HP increased by 1!`);
                    currentLifePoints += 1;
                    displayLifePoints();
                }
            }
        },
        clue1: {
            displayClue(event) {
                let answer = confirm(`"This drawer looks loose. I can break it but it might hurt me..." \n\n Break drawer?`);
                if (answer){
                    alert(`[Broke drawer] \n\n Your life decreased by 10! \n\n"There's a book inside..."`);
                    alert(`You picked up book!`);
                    currentLifePoints -= 10;
                    displayLifePoints();
                    allItems['layer2']['item0']['found'] = true;
                    event.target.style.display = 'none';
                }
            }
        },
        clue2: {
            displayClue() {
                let answer = confirm(`"Another painting. There are some words at the bottom..." \n\n Take a closer look?`);
                if (answer){
                    alert(`Hint: four people, four chairs, four seats. \n\nEeny, meeny, miny, two\nCatch four tiger by the toe\nIf he hollers let three go,\nEeny, meeny, miny, one`);
                }
            }
        }
    },
    layer3: {
        clue0: {
            displayClue() {
                let answer = confirm(`"A cozy fireplace. Wish I could spend more time here..." \n\n Touch fire?`);
                if (answer) {
                    if (burnCounter === 3) {
                        alert('You unlocked a secret item!');
                    } else {
                        alert('You burned yourself!');
                        currentLifePoints -= 20;
                        displayLifePoints();
                    }
                    burnCounter +=1;;
                }
            }
        },
        clue1: {
            displayClue() {
                alert(`"I'm high up. Don't think I can survive the fall from here..."`);
            }
        }
    }
}

let allItems = {
    layer0: {
        item0: {
            name: 'key',
            found: false,
            displayItem(event) {
                alert(`Don't click me!`)
            },
            //      ITEM FROM UNLOCKABLE -- (HIGHSHELF)
            useItem() {
                let horse = allUnlockables['layer0']['unlockable0'];
                if (horse['found']){
                    alert(`You used: ${this.name}!`);
                    this.found = false;
                    horse.unlocked = true;
                } else {
                    alert(`Cannot use ${this.name}!`)
                }
            }
        },
        item1: {
            name: 'paper',
            found: false,
            displayItem(event) {
                alert(`Don't click me!`)
            },
            //      ITEM FROM UNLOCKABLE -- (HORSE)
            useItem() {
                alert(`So many monkeys jumping on the bed,\n TWO fell down and bumped their heads,\n Mama called the doctor and the doctor said,\n No more monkeys jumping on the bed!`)
            }
        },
        item2: {
            name: 'chair',
            found: false,
            displayItem(event) {
                let answer = confirm(`"This chair looks sturdy. Maybe I can use it." \n\n Pick it up?`);
                if (answer) {
                    this.found = true;
                    event.target.style.display = 'none';
                }
            },
            useItem() {
                let highshelf = allUnlockables['layer0']['unlockable1'];
                if (highshelf['found']){
                    alert(`You used: ${this.name}!`);
                    this['found'] = false;
                    highshelf['unlocked'] = true;
                } else {
                    alert(`Cannot use ${this.name}!`)
                }
            }
        },
        item3: {
            name: 'potion0',
            found: false,
            displayItem(event) {
                alert(`You found a potion!\n\n "This might come in handy later..."`);
                this.found = true;
                event.target.style.display = 'none';
            },
            useItem() {
                let answer = confirm(`Use potion?`);
                if (answer) {
                    alert(`Your HP increased by 25!`);
                    currentLifePoints += 25;
                    displayLifePoints();
                    this.found = false;
                }

            }
        }
    },
    layer1: {
        item0: {
            name: 'note',
            found: false,
            displayItem(event) {
                alert(`You picked up a note!`);
                this.found = true;
                event.target.style.display = 'none';
            },
            useItem() {
                alert(`You need to find 3 medallions to unlock the seals!`)
            }
        },
        item1: {
            name: 'potion1',
            found: false,
            displayItem(event) {
                alert(`You picked up a potion!`);
                this.found = true;
                event.target.style.display = 'none';
            },
            useItem() {
                let answer = confirm(`Use potion?`);
                if (answer) {
                    alert(`Your HP increased by 25!`);
                    currentLifePoints += 25;
                    displayLifePoints();
                    this.found = false;
                }
            }
        }
    },
    layer2: {
        item0: {
            name: 'book',
            found: false,
            displayItem(event) {
                alert(`Don't click me!`);
            },
            useItem() {
                let chandelier = allUnlockables['layer3']['unlockable0'];
                if (chandelier['found']){
                    chandelier['unlocked'] = true;
                    alert(`You threw the book!`);
                    chandelier.displayUnlocked();
                    this.found = false;
                } else {
                    alert(`Cannot use ${this.name}!`)
                }
            }
        },
        item1: {
            name: 'medallion1', //find in map layer 2
            found: false,
            displayItem(event) {
                alert(`You found a medallion!`);
                this.found = true;
                event.target.style.display = 'none';
            },
            useItem() {
                let medallion1 = allUnlockables['layer1']['unlockable1'];
                if (medallion1['found']){
                    alert(`You used: ${this.name}! A seal is broken!`);
                    this['found'] = false;
                    medallion1['unlocked'] = true;
                } else {
                    alert(`Cannot use ${this.name}!`)
                }
            }
        },
        item2: {
            name: 'medallion2', // in layer 2 in desk (unlockable 0)
            found: false,
            displayItem(event) {
                alert(`"You found a medallion!"`);
                this.found = true;
            },
            useItem() {
                let seal2 = allUnlockables['layer1']['unlockable2'];
                if (seal2['found']){
                    alert(`You used: ${this.name}! A seal is broken!`);
                    this['found'] = false;
                    seal2['unlocked'] = true;
                } else {
                    alert(`Cannot use ${this.name}!`)
                }
            }
        }
    },
    layer3: {
        item0: {
            name: 'medallion3', //find in map layer 3
            found: false,
            displayItem(event) {
                alert(`You found a medallion!`);
                this.found = true;
                event.target.style.display = 'none';
            },
            useItem() {
                let medallion3 = allUnlockables['layer1']['unlockable3'];
                if (medallion3['found']){
                    alert(`You used: ${this.name}! A seal is broken!`);
                    this['found'] = false;
                    medallion3['unlocked'] = true;
                } else {
                    alert(`Cannot use ${this.name}!`)
                }
            }
        },
        item1: {
            name: 'potion2',
            found: false,
            displayItem(event) {
                alert(`You picked up a potion!`);
                this.found = true;
                event.target.style.display = 'none';
            },
            useItem() {
                let answer = confirm(`Use potion?`);
                if (answer) {
                    alert(`Your HP increased by 25!`);
                    currentLifePoints += 25;
                    displayLifePoints();
                    this.found = false;
                }
            }
        },
        item2: {
            name: 'key2',
            found: false,
            displayItem(event) {
                alert(`You found a key!`);
                this.found = true;
                event.target.style.display = 'none';
            },
            useItem() {
                let desk = allUnlockables['layer2']['unlockable0'];
                if (desk.found) {
                    alert(`You used key to open the desk!`);
                    desk.unlocked = true;
                    this.found = false;
                } else {
                    alert('Cannot use key!');
                }
            }
        }
    }
}

let allUnlockables = {
    layer0: {
        unlockable0: {
            name: 'horse',
            unlocked: false,
            found: false,
            displayUnlocked(number, event) {
                let answer = prompt(`"Just a bunch of old stuff" \n\n drawings\n toys \n paper \n\n What do you want to keep?\n\n (type the exact letters as seen above)`);
                if (answer === 'paper') {
                    // UNLOCKABLE LINKED TO ITEM -- ('OLDPAPER')
                    allItems['layer0']['item1']['found'] = true;
                    event.target.style.display = 'none';
                } else if (answer === 'drawings' || answer === 'toys'){
                    alert(`"I don't have a use for that..."`);
                }
            },
            displayLocked() {
                alert(`"A wooden toy horse... There seems to be a keyhole on its left side ..."`);
            }
        },
        unlockable1: {
            name: 'highshelf',
            unlocked: false,
            found: false,
            displayUnlocked(number, event) {
                let answer = confirm(`"There's something shiny inside. \n\n Take item?`);
                if (answer) {
                    // UNLOCKABLE LINKED TO ITEM -- ('KEY')
                    allItems['layer0']['item0']['found'] = true;
                    event.target.style.display = 'none';
                    //THIS LINE BELOW CAUSES PROBLEMS... Purpose is to try and make display = 'none'
                    //allItems['layer0']['item0'].style.display = 'none';
                }
            },
            displayLocked() {
                alert(`"There seems to be something up there. Maybe with a chair I can reach it..."`);
            }
        },
        unlockable2: {
            name: 'lamplever',
            unlocked: false,
            found: false,
            displayLocked(number, event) { //LOCKED AND UNLOCKED HAPPEN HERE
                let answer = confirm(`"A dusty old lamp..."" \n\n Look under?`);
                if (answer) {
                    let code = prompt(`"Looks like a 4 digit number lock..." \n\n _ _ _ _`);
                    if (code == '8237') {
                        alert(`You turned on the power! It might have unlocked something...`)
                        this.unlocked = true;
                        event.target.style.display = 'none';
                    } else if (code) {
                        alert(`Nothing happened...`)
                    }
                }
            }
        },
        unlockable3: {
            name: 'button',
            unlocked: false,
            found: false,
            displayUnlocked(){
                setMap1();
                currentLayer +=1;
            },
            displayLocked(number, event) { //LOCKED AND UNLOCKED HAPPEN HERE
                let lamplever = allUnlockables['layer0']['unlockable2']['unlocked'];
                let answer = confirm(`"There's a button on the wall... \n\n\ Press button?"`);
                if (lamplever) {
                    if(answer) {
                        alert(`The walls are shifting!!!`);
                        let gameCont0 = document.querySelector('.game-container-0');
                        gameCont0.classList.add('shake1');
                        setTimeout(function(){
                            setMap1();
                            currentLayer +=1;
                            gameCont0.classList.remove('shake1');
                        }, 2000);

                        event.target.style.display = 'none';
                    }
                } else {
                    if (answer){
                        alert(`"Nothing happened...`);
                    }
                }
            }
        }
    },
    layer1: {
        unlockable0: {
            name: 'painting',
            unlocked: false,
            found: false,
            displayLocked(number, event) {
                let answer = prompt(`"The painting looks off..."\n\n Rotate it clockwise by __? (Type in a number)`);
                if (answer === '231'){
                    let answer2 = confirm(`"The painting revealed a lever!" \n\n Pull lever?`);
                    if (answer2 && sealBroken) {
                        let gameCont1 = document.querySelector('.game-container-1');
                        gameCont1.classList.add('shake1');
                        setTimeout(function(){
                            gameCont1.classList.remove('shake1');
                            alert('The main door is now unlocked! There are new places to explore!');
                            event.target.style.display = 'none';
                            maxLayers = 8;
                        }, 2000);
                    } else if (answer2) {
                        alert(`"Nothing happened..."`);
                    }
                } else if (answer){
                    alert(`"Nothing happened..."`);
                }
            }
        },
        unlockable1: {
            name: 'seal1',
            unlocked: false,
            found: false,
            displayUnlocked(number, event) {
                alert(`"You unlocked the seal!"`);
                // UNLOCKABLE LINKED TO ITEM -- ('MEDALLION1')
                event.target.style.display = 'none';
                checkSeal();
            },
            displayLocked() {
                alert(`"The seals are preventing you from entering..."`);
            }
        },
        unlockable2: {
            name: 'seal2',
            unlocked: false,
            found: false,
            displayUnlocked(number, event) {
                alert(`"You unlocked the seal!"`);
                // UNLOCKABLE LINKED TO ITEM -- ('MEDALLION2')
                event.target.style.display = 'none';
                checkSeal();
            },
            displayLocked() {
                alert(`"The seals are preventing you from entering..."`);
            }
        },
        unlockable3: {
            name: 'seal3',
            unlocked: false,
            found: false,
            displayUnlocked(number, event) {
                alert(`"You unlocked the seal!"`);
                // UNLOCKABLE LINKED TO ITEM -- ('MEDALLION3')
                event.target.style.display = 'none';
                checkSeal();
            },
            displayLocked() {
                alert(`"The seals are preventing you from entering..."`);
            }
        }
    },
    layer2: {
        unlockable0: {
            name: 'desk',
            unlocked: false,
            found: false,
            displayUnlocked(number, event) {
                // UNLOCKABLE TO FIND ITEM -- ('MEDALLION2')
                allItems['layer2']['item2'].displayItem();
                event.target.style.display = 'none';
            },
            displayLocked(number, event) {
                alert(`"This drawer is sturdy... I need a key to open it.`);
            }
        }
    },
    layer3: {
        unlockable0: {
            name: 'chandelier',
            unlocked: false,
            found: false,
            displayUnlocked(number, event) {
                alert(`The chandelier rattled and dropped something on the floor!`);
                // UNLOCKABLE TO FIND ITEM -- ('MEDALLION3')
                // find medallion3 and display block
                let medallion3Block = document.querySelector('.item-3-0');
                medallion3Block.style.display = 'block';
                let chandelier = document.querySelector('.unlock-3-0');
                chandelier.style.display = 'none';
            },
            displayLocked(number, event) {
                alert(`"There's something shiny on the chandelier. Maybe if I had something to throw at it..."`);
            }
        },
        unlockable1: { //fourth
            name: 'chair1',
            unlocked: false,
            found: false,
            displayUnlocked(number, event) {

            },
            displayLocked(number, event) {
                let answer = confirm(`"This chair looks comfy..."\n\nSit?`);
                if (answer && chairCount === 111) {
                    alert(`You unlocked the code! \n\n 2 3 1`);
                } else {
                    chairCount = 0;
                }
            }
        },
        unlockable2: { //first
            name: 'chair2',
            unlocked: false,
            found: false,
            displayUnlocked(number, event) {

            },
            displayLocked(number, event) {
                let answer = confirm(`"This chair looks comfy..."\n\nSit?`);
                if (answer) {
                    chairCount = 0;
                    chairCount += 1;
                }
            }
        },
        unlockable3: { //third
            name: 'chair3',
            unlocked: false,
            found: false,
            displayUnlocked(number, event) {

            },
            displayLocked(number, event) {
                let answer = confirm(`"This chair looks comfy..."\n\nSit?`);
                if (answer && chairCount === 11) {
                    chairCount += 100;
                } else {
                    chairCount = 0;
                }
            }
        },
        unlockable4: { //second
            name: 'chair4',
            unlocked: false,
            found: false,
            displayUnlocked(number, event) {

            },
            displayLocked(number, event) {
                let answer = confirm(`"This chair looks comfy..."\n\nSit?`);
                if (answer && chairCount === 1) {
                    chairCount += 10;
                } else {
                    chairCount = 0;
                }
            }
        }
    }
}

let helpers = {
    prompts: {
        // not using this for now
        usePrompt () {
            return prompt('Select an item to use');
        }
    },
    hints: {
        help() {
            alert(`This game requires you to search for clues and items hidden in each location.\n\nRead each clue carefully, as they will be crucial to solving the puzzle at hand.\n\nTo use an item that you have found, click on the image representing your chosen item.\n\nYou may be required to make Yes or No decisions.\nClick on Ok or Cancel to make your choice.`)
        }

    }
}

let invalidItems = {
    missingItem(userInput) {
        alert("You do not have: " + userInput + '!');
    },
    invalidItem() {
        alert('Item does not exist!');
    }
}

let checkSeal = function () {
    let seal1 = allUnlockables['layer1']['unlockable1']['unlocked'];
    let seal2 = allUnlockables['layer1']['unlockable2']['unlocked'];
    let seal3 = allUnlockables['layer1']['unlockable3']['unlocked'];

    sealCount +=1;
    if (seal1 && seal2 && seal3 && sealCount >=3) {
        sealBroken = true;
        alert('You broke all the seals!')
    }
}
//                       END                            //