function taxCalculator(arr) {

    let newArr = arr.shift().split('>>');
    let totalTaxes = 0;

    for (let i = 0; i < newArr.length; i++) {

        let currentCommand = newArr[i].split(' ');
        let carType = currentCommand[0];
        let years = Number(currentCommand[1]);
        let km = Number(currentCommand[2]);
        let total = 0;
        let isValiCar = true;

        if (carType === 'family') {
            total = Math.floor(km / 3000) * 12 + (50 - years * 5);
            totalTaxes += total;
        } else if (carType === 'heavyDuty') {
            total = Math.floor(km / 9000) * 14 + (80 - years * 8);
            totalTaxes += total;
        } else if (carType === 'sports') {
            total = Math.floor(km / 2000) * 18 + (100 - years * 9);
            totalTaxes += total;
        } else {
            isValiCar = false;
            console.log(`Invalid car type.`);
        };
        if (isValiCar) {
            console.log(`A ${carType} car will pay ${total.toFixed(2)} euros in taxes.`);
        }
    };
    console.log(`The National Revenue Agency will collect ${totalTaxes.toFixed(2)} euros in taxes.`);
};
taxCalculator(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012'])