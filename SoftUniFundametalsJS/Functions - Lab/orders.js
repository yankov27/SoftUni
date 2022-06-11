function orders(currentOrder, quantity) {

    let total = 0;

    switch (currentOrder) {
        case "coffee":
            total = quantity * 1.50;
            break;
        case "water":
            total = quantity;
            break;
        case "coke":
            total = quantity * 1.40;
            break;
        case "snacks":
            total = quantity * 2.00;
            break;
    }
    console.log(total.toFixed(2))
    
}
orders("water", 5)
orders("coffee", 2)
