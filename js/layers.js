console.log('layers.js running!')
//                  BAG & MESSAGE PROMPTS

// extra global variables (FUN)          //
let burnCounter = 0;

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
                    if (burnCounter === 4) {
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
                    if (burnCounter === 4) {
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
    layer2: {
        clue0: {
            displayClue() {
                let answer = confirm(`"This sofa looks comfortable." \n\n Sit?`);
                if (answer){
                    alert(`You sat on the chair!`);
                    currentLifePoints -= 10;
                    displayLifePoints();
                    event.target.style.display = 'none';
                } else {
                    alert(`"Good call, that spider looks dangerous...`);
                }
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
            name: 'potion',
            found: false,
            displayItem(event) {
                alert(`You found a potion!\n\n "This might come in handy later..."`);
                this.found = true;
                event.target.style.display = 'none';
            },
            useItem() {
                alert(`You used: ${this.name}!`);
                currentLifePoints += 50;
                displayLifePoints();
                this.found = false;
            }
        }
    },
    layer1: {

    }
}



let allUnlockables = {
    layer0: {
        unlockable0: {
            name: 'horse',
            unlocked: false,
            found: false,
            displayUnlocked(number, event) {
                let answer = prompt(`"Just a bunch of old stuff: \n\n drawings\n toys \n paper \n\n What do you want to keep?\n\n (type the exact letters as seen above)`);
                if (answer === 'paper') {
                    // UNLOCKABLE LINKED TO ITEM -- ('OLDPAPER')
                    allItems['layer0']['item1']['found'] = true;
                    event.target.style.display = 'none';
                } else if (answer === 'drawings' || answer === 'toys'){
                    alert(`"Maybe I shouln't take that..."`);
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
            displayLocked() { //LOCKED AND UNLOCKED HAPPEN HERE
                let lamplever = allUnlockables['layer0']['unlockable2']['unlocked'];
                let answer = confirm(`"There's a button on the wall... \n\n\ Press button?"`);
                if (lamplever) {
                    if(answer) {
                        alert(`The walls are shifting!!!`)
                        setMap1();
                        currentLayer +=1;
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
        }
    },
    layer2: {
        unlockable0: {
            name: 'sofa',
            unlocked: false,
            found: false,
            displayLocked(number, event) { //LOCKED AND UNLOCKED HAPPEN HERE
                let answer = confirm(`"This sofa looks comfortable..."" \n\n Sit?`);
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
        unlockable1: {
            name: 'desk',
            unlocked: false,
            found: false,
            displayLocked(number, event) { //LOCKED AND UNLOCKED HAPPEN HERE
                alert(`"This sofa looks comfortable..."" \n\n Sit?`);
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
//                       END                            //