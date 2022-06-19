function smallestTwoNumbers(arr) {

    let sortedArray = arr.sort((a, b) => {
        return a - b;
    });

    console.log(sortedArray.slice(0, 2).join(' '))
}
smallestTwoNumbers([3, 0, 10, 4, 7, 3])