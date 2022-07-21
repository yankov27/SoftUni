function passwordGenerator(data) {

    let concWord = data[0] + data[1];
    let word = data[2].toUpperCase();
    let charForSwap = word[0];
    let counter = 0;
    let newWord = '';

    for (let i = 0; i < concWord.length; i++) {
        if (/[aeiou]/gi.test(concWord[i])) {
            newWord += charForSwap;
            counter++;
            if (counter == word.length) {
                charForSwap = word[0];
                counter = 0;
            };
            charForSwap = word[counter];
        } else {
            newWord += concWord[i];
        };
    };
    let password = newWord.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
};
passwordGenerator([

    'ilovepizza', 'ihatevegetables',

    'orange'

])