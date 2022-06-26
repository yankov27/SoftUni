function sorting(arr) {

    let result = [];

    let sortedArr = arr.sort(function (a, b) {
        return b - a;
    });

    while (arr.length > 0) {
        result.push(arr.shift());
        result.push(arr.pop());

    }
    console.log(result.join(' '))
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])