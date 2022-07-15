function companyUsers(data) {

    let obj = {};

    for (let line of data) {
        let [name, id] = line.split(' -> ');

        if (!obj.hasOwnProperty(name)) {
            obj[name] = [];
        };
        obj[name].push(id);
    };
    let sortedName = Object.entries(obj).sort(([a], [b]) => {
        return a.localeCompare(b);
    });

    for (let el of sortedName) {
        console.log(`${el[0]}`);
        let set = new Set(el[1]);
        for (let id of set) {
            console.log(`-- ${id}`);
        };
    };
};
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
)