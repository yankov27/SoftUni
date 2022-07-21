function greatestCommonDivisor(num1, num2) {

    let x = Number(num1);
    let y = Number(num2);

    while (x !== y) {
        if (x > y) {
            x -= y;
        } else {
            y -= x;
        };
    };
    console.log(x);
};
greatestCommonDivisor(2154, 458);