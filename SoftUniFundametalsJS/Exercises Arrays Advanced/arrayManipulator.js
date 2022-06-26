function arrayManipulator(arrInt, arrString) {

    for (let i = 0; i < arrString.length; i++) {
        let current = arrString[i].split(' ');
        let command = current.shift();

        let values = current.map(Number);

        let sumPairs = 0;
        let sumPairsArr = [];

        switch (command) {
            case 'add':
                let indexToAdd = values[0];
                let elToAdd = values[1];
                arrInt.splice(indexToAdd, 0, elToAdd);
                break;
            case 'addMany':
                let indexToAddMany = values.shift();
                arrInt.splice(indexToAddMany, 0, [...values].join(', '));
                break;
            case 'contains':
                console.log(arrInt.indexOf(values[0]));
                break;
            case 'remove':
                let indexToRemove = values[0];
                arrInt.splice(indexToRemove, 1);
                break;
            case 'shift':
                for (let i = 0; i < values[0]; i++) {
                    arrInt.push(arrInt.shift());
                }
                break;
            case 'sumPairs':
                if (arrInt.length % 2 !== 0) {
                    arrInt.push(0);
                }

                for (let i = 0; i < arrInt.length; i += 2) {
                    sumPairs = arrInt[i] + arrInt[i + 1];
                    sumPairsArr.push(sumPairs);
                }

                arrInt = [...sumPairsArr];
                break;
            case 'print':
                console.log(`[ ${arrInt.join(', ')} ]`)
                break;
        }
    }
}
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])