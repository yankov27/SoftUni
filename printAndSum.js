function printAndSum(startNumber, endNumber) {
    
    let sum = 0;
    let printLine = "";

    for( let currentNum = startNumber; currentNum <= endNumber; currentNum++) {
        
        sum += currentNum;
        printLine += `${currentNum} `;
    }

    console.log(printLine)
    console.log(`Sum: ${sum}`); 
}
printAndSum(5,10)