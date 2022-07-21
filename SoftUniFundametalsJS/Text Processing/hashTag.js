function hashTag(input) {

    let arr = input.split(' ');

    for (let word of arr) {
        if (word.includes('#') && word.length > 1) {
            let wordWhioutHashTag = word.replace("#", "");
            if (/^[a-zA-Z]+$/.test(wordWhioutHashTag)) {
                console.log(wordWhioutHashTag);
            };
        };
    };
};
hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')