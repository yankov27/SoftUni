function oddAndEvenSum(num) {

    let oddSum = 0;
    let evenSum = 0;
    let numberAsString = num.toString();

    for(let char of numberAsString) {
        let currentNum = Number(char);
        if(currentNum % 2 == 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);