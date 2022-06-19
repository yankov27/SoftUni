function sumFirstAndLast(arr) {

    const firstNum = Number(arr[0]);
    const secondNum = Number(arr[arr.length - 1]);

    return firstNum + secondNum
}
console.log(sumFirstAndLast(['20', '30', '40']))
console.log(sumFirstAndLast(['20']))