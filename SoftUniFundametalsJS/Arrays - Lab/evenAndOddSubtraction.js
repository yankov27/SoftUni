function evenAndOddSubtraction(numsArr) {

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numsArr.length; i++) {
        if (numsArr[i] % 2 === 0) {
            evenSum += numsArr[i];
        } else {
            oddSum += numsArr[i];
        }
    }

    console.log(evenSum - oddSum)

}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6])
evenAndOddSubtraction([3, 5, 7, 9])
evenAndOddSubtraction([2, 4, 6, 8, 10])