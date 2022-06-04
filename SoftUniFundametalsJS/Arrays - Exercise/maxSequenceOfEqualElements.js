function maxSequenceOfEqualElements(arr) {

    let arrL = arr.length;
    let theLongestSequence = [];

    for (let i = 0; i < arrL; i++) {
        let curentSequence = [];
        for (let j = i; j < arrL; j++) {
            if (arr[i] === arr[j]) {
                curentSequence.push(arr[i])
            } else {
                break;
            }
        }
        if (curentSequence.length > theLongestSequence.length) {
            theLongestSequence = curentSequence;
        }
    }
    console.log(theLongestSequence.join(' '))
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])
maxSequenceOfEqualElements([4, 4, 4, 4])
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])