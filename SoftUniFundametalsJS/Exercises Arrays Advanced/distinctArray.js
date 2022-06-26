function distinctArray(arr) {

    let solve = [];

    for(let i = 0; i < arr.length; i++) {
        if (!solve.includes(arr[i])) {
            solve.push(arr[i]);
        } 
    }
    console.log(solve.join(' '))
}
distinctArray([1, 2, 3, 4, 4, 3])