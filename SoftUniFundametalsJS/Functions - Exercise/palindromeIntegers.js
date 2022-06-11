function palindromeIntegers(input) {

    for (const element of input) {
        let current = String(element);
        let revesed = String(element).split('').reverse().join('');

        if (current === revesed) {
            console.log(`true`);
        } else {
            console.log(`false`);
        }
    }
}
palindromeIntegers([123, 323, 421, 121])
palindromeIntegers([32, 2, 232, 1010])