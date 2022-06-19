function listOfProducts(arr) {

    let sortedArray = arr.sort();
    let n = 0;

    for (let product of arr) {
        n++;
        console.log(`${n}.${product}`);
    };
};
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])