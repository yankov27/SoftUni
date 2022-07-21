function valueOfAstring(data) {

    let text = data[0]
    let command = data[1];
    let result = 0;

    for (let i = 0; i < text.length; i++) {
        if (command === "UPPERCASE") {
            if (/^[A-Z]*$/.test(text[i])) {
                result += text[i].charCodeAt(0);
            };
        } else {
            if (/^[a-z]*$/.test(text[i])) {
                result += text[i].charCodeAt(0);
            };
        };
    };
    console.log(`The total sum is: ${result}`);
};
valueOfAstring(['HelloFromMyAwesomePROGRAM',

    'LOWERCASE'])