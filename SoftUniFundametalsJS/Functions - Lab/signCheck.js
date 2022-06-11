function signCheck(num1, num2, num3) {

    let arr = [num1, num2, num3];
    let negativeCounter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeCounter++
        }
    }
    if (negativeCounter % 2 == 0) {
        console.log('Positive');
    } else {
        console.log(`Negative`)
    }
}
signCheck(-6,
    -12,
    14)