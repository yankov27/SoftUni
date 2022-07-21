function replaceRepeatingChars(string) {

    let result = '';
    let lastChar = '';

    for (let i = 0; i < string.length; i++) {

        let currentChar = string[i];

        if (currentChar !== lastChar) {
            result += currentChar;
            lastChar = currentChar;
        };
    };
    console.log(result);
};
replaceRepeatingChars('a')