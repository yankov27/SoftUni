function cocuntStringOccurrences(text, word) {

    let arr = text.split(' ');
    let counter = 0;

    for (let el of arr) {
        if (word === el) {
            counter++;
        };
    };
    console.log(counter);
};
cocuntStringOccurrences('This is a word and it also is a sentence',
    'is')