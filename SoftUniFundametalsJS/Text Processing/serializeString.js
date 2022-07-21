function serializeString(input) {
    let string = input[0];
    let letters = [];

    for (let i = 0; i < string.length; i++) {
        if (!letters.includes(string[i])) {
            letters.push(string[i]);
        };
    };

    while (letters.length > 0) {
        let char = letters.shift();
        let index = [];
        for (let i = 0; i < string.length; i++) {
            if (char === string[i]) {
                index.push(i);
            };
        };
        console.log(char + ':' + index.join('/'));
    };
};
serializeString(['abababa'])