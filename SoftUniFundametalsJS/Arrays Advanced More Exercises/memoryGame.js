function memoryGame(arr) {

    let deleteCommandEnd = arr.pop();
    let sequence = arr.shift().split(' ');
    
    let nums = [];

    for(let el of sequence) {
        let currentNum = Number(el);
        nums.push(currentNum);
    }

    console.log()
}
memoryGame( [
"1 1 2 2 3 3 4 4 5 5", 
"1 0",
"-1 0",
"1 0", 
"1 0", 
"1 0", 
"end"
])