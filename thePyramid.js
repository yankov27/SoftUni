function thePyramid(width, increment) {

    let blockNeeded = 0;
    let marbleCounter = 0;
    let stoneCounter = 0;
    let lapisLazuliCounter = 0;
    let goldCounter = 0;
    let stepCounter = 0;
    let pyramidHeightCounter = 0;

    for (let step = width; step >= 1; step -= 2) {
        if (width % 2 !== 0) {

            pyramidHeightCounter++
            stepCounter++;

            if (step === 1) {
                goldCounter += step * step;
            } else {
                if (stepCounter === 5) {
                    stepCounter = 0;
                    blockNeeded = step * step;
                    stoneCounter += (step - 2) * (step - 2);
                    lapisLazuliCounter += (blockNeeded - ((step - 2) * (step - 2)));
                } else {
                    blockNeeded = step * step;
                    stoneCounter += (step - 2) * (step - 2);
                    marbleCounter += blockNeeded - ((step - 2) * (step - 2));
                }
            }
        } else {

            pyramidHeightCounter++;
            stepCounter++;

            if (step === 2) {
                goldCounter += step * step;
            } else {
                if (stepCounter === 5 && step !== 2) {
                    stepCounter = 0;
                    blockNeeded = step * step;
                    stoneCounter += (step - 2) * (step - 2);
                    lapisLazuliCounter += blockNeeded - (step - 2) * (step - 2);
                } else if (step > 2) {
                    blockNeeded = step * step;
                    stoneCounter += (step - 2) * (step - 2);
                    marbleCounter += blockNeeded - (step - 2) * (step - 2);
                }
            }
        }
    }

    let totalStoneNeeded = Math.ceil(stoneCounter * increment);
    let totalMarbleNeeded = Math.ceil(marbleCounter * increment);
    let totalLapisLazuliNeeded = Math.ceil(lapisLazuliCounter * increment);
    let totalGoldNeeded = Math.ceil(goldCounter * increment);
    let finalPyramidHeight = Math.floor(pyramidHeightCounter * increment);

    console.log(`Stone required: ${totalStoneNeeded}`);
    console.log(`Marble required: ${totalMarbleNeeded}`);
    console.log(`Lapis Lazuli required: ${totalLapisLazuliNeeded}`);
    console.log(`Gold required: ${totalGoldNeeded}`);
    console.log(`Final pyramid height: ${finalPyramidHeight}`);
}
thePyramid(555, 1)