function radioCrystals(inputArr) {

    micronsNeeded = [];
    const finalMicrons = inputArr[0];

    let cutCounter = 0;
    let lapCounter = 0;
    let grindCounter = 0;
    let etchCounter = 0;
    let xRayCounter = 0;

    for (let i = 1; i < inputArr.length; i++) {
        micronsNeeded.push(inputArr[i]);
    }

    for (let j = 0; j < micronsNeeded.length; j++) {
        let element = micronsNeeded[j];
        console.log(`Processing chunk ${element} microns`)
        while ((element / 4) >= finalMicrons) {
            element /= 4;
            cutCounter++;
        };
        if (cutCounter > 0) {
            element = Math.floor(element);
            console.log(`Cut x${cutCounter}`);
            console.log(`Transporting and washing`);
            cutCounter = 0;
        };
        while (element * 0.80 >= finalMicrons) {
            element *= 0.80;
            lapCounter++;
        };
        if (lapCounter > 0) {
            element = Math.floor(element);
            console.log(`Lap x${lapCounter}`);
            console.log(`Transporting and washing`);
            lapCounter = 0;
        };
        while (element - 20 >= finalMicrons) {
            element -= 20;
            grindCounter++;
        };
        if (grindCounter > 0) {
            element = Math.floor(element);
            console.log(`Grind x${grindCounter}`);
            console.log(`Transporting and washing`);
            grindCounter = 0;
        };
        while (element - 2 >= (finalMicrons - 1)) {
            element -= 2;
            etchCounter++;
        };
        if (etchCounter > 0) {
            element = Math.floor(element);
            console.log(`Etch x${etchCounter}`)
            console.log(`Transporting and washing`);
            etchCounter = 0;
        };
        if (element < finalMicrons) {
            element = Math.floor(element);
            element += 1
            xRayCounter++;
        };
        if (xRayCounter === 1) {
            console.log(`X-ray x${xRayCounter}`);
            xRayCounter = 0;
        };
        if (element === finalMicrons) {
            console.log(`Finished crystal ${finalMicrons} microns`)
        };
    };
};
//radioCrystals([1375, 50000])
radioCrystals([1000, 4000, 8100])