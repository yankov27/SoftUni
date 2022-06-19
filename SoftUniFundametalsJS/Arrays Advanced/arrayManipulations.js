function arrayManipulations(arr) {

    let newArr = arr.shift().split(' ').map(Number);

    for (let i = 0; i < arr.length; i++) {
        let [command, num1, num2] = arr[i].split(' ');
        num1 = Number(num1);
        num2 = Number(num2);

        switch (command) {
            case 'Add': newArr.push(num1);
                break;
            case 'Remove': newArr = newArr.filter(el => el != num1);
                break;
            case 'RemoveAt': newArr.splice(num1, 1);
                break;
            case 'Insert': newArr.splice(num2, 0, num1);
                break;
        }
    }
    console.log(newArr.join(' '));
};
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);