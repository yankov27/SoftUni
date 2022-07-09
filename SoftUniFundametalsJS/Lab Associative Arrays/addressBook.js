function addressBook(data) {

    let obj = {};

    for (let line of data) {
        let [name, address] = line.split(':');
        obj[name] = address;
    };
    let sortedName = Object.entries(obj).sort(([a],[b]) => {
        return a.localeCompare(b);
    });

    for (let [name, address] of sortedName) {
        console.log(`${name} -> ${address}`);
    };
};
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])