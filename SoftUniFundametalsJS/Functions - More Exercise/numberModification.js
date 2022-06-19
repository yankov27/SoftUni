function numberModification(number) {

    while (getAverage(number) < 5) {
        number += '9';
    }
    console.log(number);

    function getSum(num) {
        let numToString = num.toString();
        let sum = 0;
        for (let i = 0; i < numToString.length; i++) {
            sum += Number(numToString[i]);
        }
        return sum;
    }

    function getAverage(num) {
        return getSum(num) / num.toString().length;
    }
}
numberModification(101)