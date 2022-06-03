function ReverseAnArrayOfNumbers(n, numsArr) {

    let newArr = [];
    for(let i = 0; i < n; i++) {
        newArr.push(numsArr[i])
    }
    let output ='';

    for(let i = newArr.length - 1; i >= 0; i--) {
        output += newArr[i] + " ";
    }
    console.log(output)
}
ReverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])
ReverseAnArrayOfNumbers(4, [-1, 20, 99, 5])
ReverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47])