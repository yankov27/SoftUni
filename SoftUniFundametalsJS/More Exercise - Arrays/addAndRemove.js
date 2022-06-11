function addAndRemove(arr) {

    let arrL = arr.length;
    let result = [];
    let removeCounter = 0;
    let arrCounter = 0

    for (let i = 0; i < arrL; i++) {
        if (arr[i] === 'add') {
            result.push(i + 1);
            arrCounter = 0;
        } else {
            result.pop()
            arrCounter++
            removeCounter++
        }
    }
    if (removeCounter = arrCounter) {
        console.log(`Empty`);
    } else {
        console.log(result.join(' '))
    }
}
addAndRemove(['add', 'add', 'add', 'add'])
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(['remove', 'remove', 'remove'])