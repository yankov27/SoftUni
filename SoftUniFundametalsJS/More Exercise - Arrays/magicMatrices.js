function magicMatrices(arr) {

    let arrL = arr.length;
    let isTrue = true;

    for (let i = 0; i < arrL - 1; i++) {
        let sumROne = arr[i].reduce((a, b) => a + b, 0);
        let sumRTwo = arr[i + 1].reduce((a, b) => a + b, 0);
        let sumCOne = 0;
        let sumCTwo = 0;

        for (let j = 0; j < arrL; j++) {
            sumCOne += arr[i][j];
            sumCTwo += arr[i + 1][j];
        }

        if (sumROne !== sumRTwo || sumCOne !== sumCTwo) {
            isTrue = false;
        }
    }

    if (!isTrue) {
        console.log(`false`);
    } else {
        console.log(`true`);
    }

}

magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]])
magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]])