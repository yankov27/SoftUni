function arrayRotation(arr, rotations) {

    while (rotations > 0) {
        let elementToMove = arr.shift();
        arr.push(elementToMove);
        rotations--;
    }
    console.log(arr.join(' '))
}
arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5)