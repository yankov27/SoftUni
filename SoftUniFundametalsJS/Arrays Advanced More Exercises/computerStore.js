function computerStore(arr) {

    const clientType = arr.pop();
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if(Number(arr[i] < 0)) {
            console.log("Invalid price!");
            continue;
        };
        sum += Number(arr[i]);
    };
    let taxes = sum * 0.20;
    let totalPrice = sum + taxes;

    if(clientType === 'special') {
        totalPrice *= 0.90;
    };

    if (totalPrice == 0) {
        console.log("Invalid order!");
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    };
};
computerStore([
'regular'
])