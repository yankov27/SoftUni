function condenseArrayToNumber(arr) {
    while (arr.length > 1) {
        let newArr = Array(arr.length - 1);
        for (let i = 0; i < arr.length - 1; i++) {
            newArr[i] = Number(arr[i]) + Number(arr[i + 1]);
        }
        arr = newArr;
    }
    console.log(arr[0]);
}

condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);