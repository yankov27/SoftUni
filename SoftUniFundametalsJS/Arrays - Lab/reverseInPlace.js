function reverseInPlace(arr) {

    let output = '';
    
    for(let i = arr.length - 1; i >= 0; i--) {
        output += arr[i] + ' ';
    }
    console.log(output)
}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])
reverseInPlace(['33', '123', '0', 'dd'])
