function sumOfOddNumbers(n) {

    let num = 1;
    let sum = 0;

    for(let i = 1; i <= n; i ++ ) {
        console.log(num);
        sum += num;
        num += 2;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5)