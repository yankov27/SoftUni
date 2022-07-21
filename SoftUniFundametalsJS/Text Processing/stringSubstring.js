function stringSubstring(word, text) {

    text = text.toLowerCase();
    word = word.toLowerCase();
    let arr = text.split(' ');
    let match = false;

    for (let currentWord of arr) {
        if (currentWord == word) {
            console.log(word);
            match = true;
        };
    };
    if (!match) {
        console.log(`${word} not found!`);
    };
};
stringSubstring('javascript',
    'JavaScript is the best programming language')