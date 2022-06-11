function charactersInRange(char1, char2) {

    let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let endtChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));

    let charsInRangeArr = [];

    for (let i = startChar + 1; i < endtChar; i++) {
        let currentChar = String.fromCharCode(i);
        charsInRangeArr.push(currentChar);
    }
    console.log(charsInRangeArr.join(' '));
}
charactersInRange('a', 'd');
charactersInRange('#', ':');