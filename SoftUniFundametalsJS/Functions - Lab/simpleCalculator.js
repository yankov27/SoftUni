function simpleCalculator(a, b, operator) {

    let result = 0;
    switch (operator) {

        case 'add': result = ((x, y) => { return x + y; })(a, b); break;
        case 'subtract': result = ((x, y) => { return x - y; })(a, b); break;
        case 'multiply': result = ((x, y) => { return x * y; })(a, b); break;
        case 'divide': result = ((x, y) => { return x / y; })(a, b); break;
    }

    console.log(result);
}
simpleCalculator(5, 5, 'multiply')
simpleCalculator(40, 8, 'divide')
