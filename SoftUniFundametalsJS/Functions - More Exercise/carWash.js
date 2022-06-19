function carWash(commands) {

    let value = 0;

    for (let command of commands) {

        if (command === 'soap') {
            value += 10;
        } else if (command === 'water') {
            value *= 1.20;
        } else if (command === 'vacuum cleaner') {
            value *= 1.25;
        } else if (command === 'mud') {
            value *= 0.90;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`)
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);