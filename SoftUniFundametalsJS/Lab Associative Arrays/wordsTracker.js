function wordsTracker(data) {

    let map = new Map();
    let words = data.shift().split(' ');

    for (let word of words) {
        map.set(word, 0);
    };
    for (let word of data) {
        if (map.has(word)) {
            let oldValue = map.get(word);
            map.set(word, oldValue + 1);
        };
    };
    let sortedArr = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (let kv of sortedArr) {
        console.log(`${kv[0]} - ${kv[1]}`);
    };
};
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])