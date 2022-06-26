function searchForAnumber(arr1, arr2) {

    let numForCheck = arr2.pop();
    let numsForDeleting = arr2.pop();
    let numsForWork = arr2.pop();

    let newArr = [];
    let counter = 0;

    for (let i = 0; i < numsForWork; i++) {
        newArr.push(arr1[i]);
    };
    for (let y = 0; y < numsForDeleting; y++) {
        newArr.shift();
    };
    for (let j = 0; j < newArr.length; j++) {
        if (numForCheck === newArr[j]) {
            counter++;
        };
    };
    console.log(`Number ${numForCheck} occurs ${counter} times.`);
};
searchForAnumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3])