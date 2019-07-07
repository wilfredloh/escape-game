console.log('display.js running!')
//                      BAG & MESSAGE PROMPTS                           //

let allClues = {
    layer0: {
        clue0: {
            displayClue() {
                alert(`"A cute-looking toy monkey. It's holding a paper..." \n\n It says: HellO my Name is monkEy.`);
            }
        },
        clue1: {
            displayClue() {
                let inspect = prompt(`"It's dark outside. It's hard to see..."\n\n Look closer?`);
                if (inspect === 'y') {
                    alert(` "There's a sign..." \n\n _ _ 5 _ `);
                }
            }
        },
        clue2: {
            displayClue() {
                alert(`"The painting looks old. It looks like the painter was trying to draw seven horses..."`)
            }
        },
        clue3: {
            displayClue() {
                alert(`"A cozy fireplace. Wish I could spend more time here..."`)
            }
        },
        clue4: {
            displayClue() {
                alert(`"Nothing here..."`)
            }
        }
    },
    layer1: {

    }
}

let allItems = {
    layer0: {
        item0: {
            name: 'key',
            found: false,
            //      ITEM FROM UNLOCKABLE -- (HIGHSHELF)
            useItem(number) {
                let horse = allUnlockables['layer0']['unlockable0'];
                if (horse['found']){
                    alert(`You used: ${this.name}. You unlocked: ${horse['name']}.`);
                    this.found = false;
                    horse.unlocked = true;
                } else {
                    alert(`Cannot use ${this.name}!`)
                }
            }
        },
        item1: {
            name: 'oldpaper',
            found: false,
            //      ITEM FROM UNLOCKABLE -- (HORSE)
            useItem() {
                alert(`Five little monkeys jumping on the bed,\n One fell down and bumped his head,\n Mama called the doctor and the doctor said,\n No more monkeys jumping on the bed!`)
            }
        },
        item2: {
            name: 'chair',
            found: false,
            displayItem(number, event) {
                let answer = prompt(`"This chair looks sturdy. Maybe I can use it." \n\n Pick it up?`);
                if (answer === 'y') {
                    this.found = true;
                    event.target.style.display = 'none';
                }
            },
            useItem(number) {
                let highshelf = allUnlockables['layer0']['unlockable1'];
                if (highshelf['found']){
                    alert(`You used: ${this.name}.`);
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
            displayItem(number, event) {
                alert(`You found a potion!\n\n "This might come in handy later..."`);
                this.found = true;
                event.target.style.display = 'none';
            },
            useItem(number) {
                alert(`You used potion!`);
                hp += 50;
                this.found = false;
            }
        }
    },
    layer1: {

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

let allUnlockables = {
    layer0: {
        unlockable0: {
            name: 'horse',
            unlocked: false,
            found: false,
            displayUnlocked(number, event) {
                let answer = prompt(`"Just a bunch of old toys, cartoon drawings and an old piece of paper." \n\n Keep paper?`);
                if (answer === 'y') {
                    // UNLOCKABLE LINKED TO ITEM -- ('OLDPAPER')
                    allItems['layer0']['item1']['found'] = true;
                    event.target.style.display = 'none';
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
                let answer = prompt(`"There's something shiny inside. \n\n Take item?`);
                if (answer === 'y') {
                    // UNLOCKABLE LINKED TO ITEM -- ('KEY')
                    allItems['layer0']['item0']['found'] = true;
                    event.target.style.display = 'none';
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
                let answer = prompt(`"A dusty old lamp..."" \n\n Look under?`);
                if (answer === 'y') {
                    let code = prompt(`"There's a number lock" \n\n _ _ _ _`);
                    if (code == '1754') {
                        alert(`You turned on the power!`)
                        this.unlocked = true;
                        event.target.style.display = 'none';
                    } else if (code) {
                        alert(`Wrong combination!`)
                    }
                }
            }
        },
        unlockable3: {
            name: 'button',
            unlocked: false,
            found: false,
            displayLocked() { //LOCKED AND UNLOCKED HAPPEN HERE
                let lamplever = allUnlockables['layer0']['unlockable2']['unlocked'];
                let answer = prompt(`"There's a button on the wall... \n\n\ Press button?"`);
                if (lamplever) {
                    if(answer === 'y') {
                        alert(`The walls are shifting!!!`)
                        changeMap1();
                    }
                } else {
                    if (answer === 'y'){
                        alert(`"Nothing happened...`);
                    }
                }
            }
        }
    },
    layer1: {

    }
}

let helpers = {
    prompts: {
        usePrompt () {
            return prompt('Select an item to use');
        }
    },
    hints: {
        help() {
            alert("1. To use items, type 'use' in the input box below. \n\n 2. Any time an interaction occurs, type 'y' to agree with the interaction. Click 'cancel' to leave.")
        }

    }
}
//                       END                            //