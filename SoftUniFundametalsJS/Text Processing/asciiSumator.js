function asciiSumator(arr) {

    let firstNum = arr[0].charCodeAt(0);
    let secondNum = arr[1].charCodeAt(0);
    let text = String(arr[2]);
    let textL = text.length;
    let sum = 0;

    for (let i = 0; i < textL; i++) {
        let currentNum = text[i].charCodeAt(0);
        if (firstNum < secondNum) {
            if (currentNum > firstNum && currentNum < secondNum) {
                sum += currentNum;
            };
        } else {
            if (currentNum > secondNum && currentNum < firstNum) {
                sum += currentNum;
            };
        };
    };
    console.log(sum);
};
asciiSumator(['a',

    '1',

    'jfe392$#@j24ui9ne#@$'])