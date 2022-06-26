function airPollution(map, forces) {

    let currentMap = map.map(number => number.split(' ').map(Number));

    while (forces.length > 0) {
        let currentCase = forces.shift();
        let currentForce = currentCase.split(' ')[0];
        let currentValue = Number(currentCase.split(' ')[1]);

        if (currentForce === 'breeze') {
            currentMap = breeze(currentMap, currentValue);
        } else if (currentForce === 'gale') {
            currentMap = gale(currentMap, currentValue);
        } else if (currentForce === 'smog') {
            currentMap = smog(currentMap, currentValue);
        };
    };

    function breeze(currentMap, currentValue) {
        for (let i = 0; i < currentMap.length; i++) {
            let currentArea = currentMap[currentValue][i];
            if (currentArea - 15 >= 0) {
                currentMap[currentValue][i] -= 15;
            } else {
                currentMap[currentValue][i] = 0;
            }
        }
        return currentMap;
    }

    function gale(currentMap, currentValue) {
        for (let i = 0; i < currentMap.length; i++) {
            let currentArea = currentMap[i][currentValue];
            if (currentArea - 20 >= 0) {
                currentMap[i][currentValue] -= 20;
            } else {
                currentMap[i][currentValue] = 0;
            }
        }
        return currentMap;
    }

    function smog(currentMap, currentValue) {
        for (let row = 0; row < currentMap.length; row++) {
            for (let col = 0; col < currentMap.length; col++) {
                currentMap[row][col] += currentValue;
            }
        }
        return currentMap;
    }

    let poluttedAreasCounter = 0;
    let result = `Polluted areas: `;

    for (let row = 0; row < currentMap.length; row++) {
        for (let col = 0; col < currentMap.length; col++) {
            let currentValue = currentMap[row][col];
            if (currentValue >= 50) {
                result += `[${row}-${col}], `;
                poluttedAreasCounter++;
            }
        }
    }
    if (poluttedAreasCounter > 0) {
        console.log(result.slice(0, -2));
    } else {
        console.log('No polluted areas');
    }
}
airPollution(['5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25'])