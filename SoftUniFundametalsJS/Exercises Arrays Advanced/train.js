function train(arr) {

    let wagonsContaining = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {

        let command = arr[i].split(' ');

        if (command[0] === 'Add') {
            wagonsContaining.push(Number(command[1]));
        } else {
            for (let j = 0; j < wagonsContaining.length; j++) {
                if (wagonsContaining[j] + Number(command[0]) <= maxCapacity) {
                    wagonsContaining[j] += Number(command[0]);
                    break;
                }
            }
        }
    }
    console.log(wagonsContaining.join(' '))
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])