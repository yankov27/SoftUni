function pascalCaseSplitter(string) {

    let arr = [];
    let currentWord = '';
    let firstChar = true

    for (let i = 0; i < string.length; i++) {

        if(firstChar && string[i] === string[i].toUpperCase()) {
            currentWord += string[i];
            firstChar = false;
            continue;
        };

        if (string[i] !== string[i].toUpperCase()) {
            currentWord += string[i];
        } else {
            arr.push(currentWord);
            currentWord = string[i];
        };
    };
    arr.push(currentWord);
    console.log(arr.join(', '));
};
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')