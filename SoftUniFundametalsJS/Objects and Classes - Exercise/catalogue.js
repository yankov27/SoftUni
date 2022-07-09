function catalogue(arr) {

    let newArr = [];

    for (let key of Object.keys(arr)) {
        let currentRow = arr[key].split(' : ');
        newArr.push(currentRow);
    };
    newArr.sort()
    let groupName = '';
    
    for (let [product, value] of newArr) {
        if (product[0] === groupName) {
            console.log(`  ${product}: ${value}`);
        } else {
            groupName = product[0];
            console.log(product[0]);
            console.log(`  ${product}: ${value}`);
        };
    };
};
catalogue([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
])