function processOddNumbers(arr) {

    result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            result.push(Number(arr[i]) * 2)
        };
    };
    reverceResult = result.reverse();
    console.log(reverceResult.join(' '));
}
processOddNumbers([10, 15, 20, 25])