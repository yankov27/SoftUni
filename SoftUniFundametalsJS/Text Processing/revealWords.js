function revealWords(word, sentence) {

    let wordToReveal = word.split(', ');
    let sentenceArr = sentence.split(' ');

    for (let word of wordToReveal) {
        for (let currentWord of sentenceArr) {
            if (currentWord.includes('*') && currentWord.length === word.length) {
                sentence = sentence.replace(currentWord, word);
            };
        };
    };
    console.log(sentence);
};
revealWords('great',

    'softuni is ***** place for learning new programming languages')