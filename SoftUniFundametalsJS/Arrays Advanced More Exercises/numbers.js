function numbers(input) {

    let numArr = input.split(' ').map(Number);
    let sum = 0;
    let numCounter = 0;

    for (let i = 0; i < numArr.length; i++) {
        numCounter++;
        sum += numArr[i];
    };

    let averigeNum = (sum / numCounter).toFixed(2);
    let newNumArr = [];

    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] > averigeNum) {
            newNumArr.push(numArr[i])
        };
    };

    newNumArr.sort((a, b) => b - a);
    let result = [];
    let counter = 0;

    for (let i = 0; i < newNumArr.length; i++) {
        if (counter == 5) {
            break;
        };
        result.push(newNumArr[i]);
        counter++;
    };

    if (newNumArr < 1) {
        console.log('No');
    } else {
        console.log(result.join(' '))
    };
};
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')


function numbers2 (input) {

    let numArr = input.split(' ').map(Number);
    let sum = 0;
    for(let el of numArr) {
        sum += el;
    };

    let avg = sum / numArr.length;

    numArr = numArr
    .filter(el => el > avg)
    .sort((a,b) => b - a)
    .slice(0,5);

    return numArr.length > 0 ? numArr.join(' ') : 'No';
}
console.log(numbers2('5 2 3 4 -10 30 40 50 20 50 60 60 51'))