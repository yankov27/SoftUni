function wordOccurrences(data) {

    let map = new Map();

    for (let line of data) {
        let item = line;
        let quantity = 1;

        if (map.has(item)) {
            let oldQuantity = map.get(item);
            map.set(item, oldQuantity + quantity);
        } else {
            map.set(item, quantity);
        };
    };
    let sortedArr = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (let kvp of sortedArr) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    };
};
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])