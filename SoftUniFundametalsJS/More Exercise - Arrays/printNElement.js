function printNElement(arr) {

    const arrL = arr.length - 1;
    const lastElement = arr.pop()
    let counter = 0;
    let result = [];
    for (let i = 0; i < arrL; i++) {
        if (counter == 0) {
            result.push(arr[i]);
            
        }
        if (counter == Number(lastElement)) {
            result.push(arr[i]);
            counter = 0;
        }
        counter++;
    }
    console.log(result.join(' '))
}
printNElement(['5', '20', '31', '4', '20', '2']);
printNElement(['dsa', 'asd', 'test', 'test', '2']);