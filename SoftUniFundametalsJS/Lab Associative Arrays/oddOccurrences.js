function oddOccurrences(data) {

    let obj = {};
    let words = data.split(' ');

    for (let word of words) {
        word = word.toLowerCase();
        if (!obj[word]) {
            obj[word] = 0;
        }
        let oldValue = obj[word];
        obj[word] = oldValue + 1;
    };

    let result = '';

    for (let [key, value] of Object.entries(obj)) {
        if (value % 2 !== 0) {
            result += key + ' ';
        };
    };
    console.log(result);
};
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')