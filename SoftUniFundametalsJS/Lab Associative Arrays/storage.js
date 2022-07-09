function storage(data) {

    let map = new Map();

    for (let line of data) {
        let item = line.split(' ')[0];
        let quantity = Number(line.split(' ')[1]);

        if (map.has(item)) {
            let oldQuantity = map.get(item);
            map.set(item, oldQuantity + quantity);
        } else {
            map.set(item, quantity);
        };
    };
    for (let kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    };
};
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])