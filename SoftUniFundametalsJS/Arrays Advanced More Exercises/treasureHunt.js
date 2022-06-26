function treasureHunt(arr) {

    let chest = arr.shift().split('|');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "Yohoho!") {
            break;
        };

        let loot = arr[i].split(' ');
        let command = loot.shift();

        switch (command) {
            case 'Loot':
                for (let el of loot) {
                    if (!chest.includes(el)) {
                        chest.unshift(el);
                    };
                };
                break;
            case 'Drop':
                let elementForMoving = Number(loot[0]);
                if (elementForMoving > 0 && elementForMoving < chest.length) {
                    chest.push(chest.splice(elementForMoving, 1)[0]);
                };
                break;
            case 'Steal':
                let stolenTreasure = [];
                let counter = 0;

                for (let i = 0; i < Number(loot[0]); i++) {
                    if(chest.length > 0) {
                    stolenTreasure.push(chest.pop());
                    };
                };
                console.log(stolenTreasure.reverse().join(', '));
                break;
        };
    };

    let sum = 0;
    for (let el of chest) {
        sum += el.length;
    };

    let averageGain = (sum / chest.length).toFixed(2);

    if (chest.length < 1) {
        console.log(`Failed treasure hunt.`);
    } else {
        console.log(`Average treasure gain: ${averageGain} pirate credits.`)
    };
};
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",

"Loot Wood Gold Coins",

"Loot Silver Pistol",

"Drop 3",

"Steal 3",

"Yohoho!"])