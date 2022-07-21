function sameNumbers(input) {

    let string = String(input)
    let firstNum = string[0];
    let inputL = string.length;
    let sum = Number(firstNum);
    let isSame = true;

    for (let i = 1; i < inputL; i++) {
        let currentNum = Number(string[i]);
        if (firstNum == currentNum) {
            sum += currentNum;
        } else {
            isSame = false;
            sum += currentNum;
        };
    };
    console.log(isSame);
    console.log(sum);
};
sameNumbers(1234)