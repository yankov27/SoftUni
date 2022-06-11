function factorialDivision(num1, num2) {
    return (factorial(num1) / factorial(num2)).toFixed(2);

    function factorial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
}
console.log(factorialDivision(7, 2))