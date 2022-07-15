function aMinerTask(data) {

    let obj = {};

    for (let i = 0; i < data.length; i += 2) {
        let name = data[i];
        if (!obj.hasOwnProperty(name)) {
            obj[name] = 0;
        };
        obj[name] += Number(data[i + 1]);
    };
    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key} -> ${value}`);
    };
};
aMinerTask([
    'Gold', '155',
    'Silver', '10',
    'Copper', '17',
    'Gold', '155'
])