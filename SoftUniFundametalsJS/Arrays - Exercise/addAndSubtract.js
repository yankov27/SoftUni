function addAndSubtract(arr) {

    let incomeArrSumm = 0;
    let newArrSumm = 0;
    let arrL = arr.length;

    for (let i = 0; i < arrL; i++) {
        incomeArrSumm += arr[i];

        if (arr[i] % 2 == 0) {
            arr[i] += i
        } else {
            arr[i] -= i;
        }
        newArrSumm += arr[i];
    }
    console.log(arr)
    console.log(incomeArrSumm)
    console.log(newArrSumm)
}
addAndSubtract([5, 15, 23, 56, 35])
addAndSubtract([-5, 11, 3, 0, 2])