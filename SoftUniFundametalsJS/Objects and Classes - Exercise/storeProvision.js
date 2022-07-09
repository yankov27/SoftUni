function storeProvision(stocks, delivery) {

    let storeProduct = {};
    let stocksL = stocks.length;
    let deliveryL = delivery.length;

    for (let i = 0; i < stocksL; i += 2) {
        let product = stocks[i];
        storeProduct[product] = Number(stocks[i + 1]);
    };

    for (let i = 0; i < deliveryL; i += 2) {
        let product = delivery[i];
        if (!storeProduct.hasOwnProperty(product)) {
            storeProduct[product] = 0;
        };
        storeProduct[product] += Number(delivery[i + 1]);
    };

    for (const product in storeProduct) {
        console.log(`${product} -> ${storeProduct[product]}`);
    };
};
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])