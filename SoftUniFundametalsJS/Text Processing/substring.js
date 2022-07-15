function substring(string, num1, num2) {

    let end = num1 + num2;
    let result = (string.substring(num1, end));

    console.log(result);
};
substring('ASentence', 1, 8)