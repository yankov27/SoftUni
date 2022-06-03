function sumEvenNumbers(numsArr) {

    let sum = 0;

    for (let i = 0; i < numsArr.length; i++) {
        if (numsArr[i] % 2 === 0) {
            sum += Number(numsArr[i]);
        }
    }
    console.log(sum)
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
sumEvenNumbers(['3', '5', '7', '9']);
sumEvenNumbers(['2', '4', '6', '8', '10']);