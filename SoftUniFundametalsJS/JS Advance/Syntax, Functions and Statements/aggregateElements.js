function aggregateElements(data) {

    let sum = data[0] + data[1] + data[2];
    let secondSum = 1 / data[0] + 1 / data[1] + 1 / data[2];
    let concat = data.join('');

    console.log(sum);
    console.log(secondSum);
    console.log(concat);
};
aggregateElements([2, 4, 8, 16])