function equalSums(arr) {

    let foundIndex = 'no';
    let arrL = arr.length;

    for (let i = 0; i < arrL; i++) {

        let leftSum = 0;
        let rightSum = 0;
        for (let l = 0; l < i; l++) {
            leftSum += arr[l];
        }
        for (let r = i + 1; r < arrL; r++) {
            rightSum += arr[r];
        }
        if (leftSum === rightSum) {
            foundIndex = i;
        }
    }
    console.log(foundIndex)
}
equalSums([1, 2, 3, 3])
equalSums([1, 2])
equalSums([1])
equalSums([1, 2, 3])
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])