function bitcoinMining(input) {

    let currentInput = 0;
    let dayCounter = 0;
    let moneyEarn = 0;
    let bitCounsCounter = 0;
    let theDayOfFirstBitcoun = 0;

    for (let i = 0; i < input.length; i++) {
        currentInput = input[i];
        dayCounter++;
        if (dayCounter % 3 === 0) {;
            currentInput *= 0.70;
        }
        moneyEarn += currentInput * 67.51;

        while (moneyEarn >= 11949.16) {
            if (theDayOfFirstBitcoun === 0) {
                theDayOfFirstBitcoun = dayCounter;
            }
            moneyEarn -= 11949.16;
            bitCounsCounter++;
        }
    }

    console.log(`Bought bitcoins: ${bitCounsCounter}`);
    if (bitCounsCounter > 0) {
        console.log(`Day of the first purchased bitcoin: ${theDayOfFirstBitcoun}`);
    }
    console.log(`Left money: ${moneyEarn.toFixed(2)} lv.`);
}
bitcoinMining([3124.15, 504.212, 2511.124])