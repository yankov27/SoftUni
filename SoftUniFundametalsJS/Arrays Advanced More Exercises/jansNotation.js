function jansNotation(arr) {

    let numArr = [];
    let commandArr = [];
    let oprationCounter = 0;
    let errorMsg = false;
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        counter++;
        let typeOfElement = typeof (arr[i]);
        if (typeOfElement == 'number') {
            numArr.push(arr[i]);
        } else {
            commandArr.push(arr[i]);
        };
        if (numArr.length > 1 && commandArr.length > 0) {
            for (let i = 0; i < numArr.length; i++) {
                oprationCounter = 0;
                if (numArr.length > 1 && commandArr.length > 0) {
                    let b = numArr.pop();
                    let a = numArr.pop();

                    while (oprationCounter == 0) {
                        let curentCommand = commandArr.shift();
                        if (curentCommand == '*') {
                            numArr.push(a * b);
                        } else if (curentCommand == '/') {
                            numArr.push(a / b);
                        } else if (curentCommand == '+') {
                            numArr.push(a + b);
                        } else if (curentCommand == '-') {
                            numArr.push(a - b);
                        };
                        oprationCounter++;
                    };
                };
            };
        };
    };
    if (numArr.length > 1 && commandArr.length < 1 && arr.length === counter) {
        console.log(`Error: too many operands!`);
        errorMsg = true;
    };
    if (arr.length == 1) {
        if (typeof (arr[0]) == 'number') {
            console.log(`Error: too many operands!`);
        } else {
            console.log(`Error: not enough operands!`);
        };
    } else if (numArr.length < 2 && commandArr.length > 0 && arr.length === counter) {
        console.log(`Error: not enough operands!`);
    } else if (!errorMsg) {
        console.log(numArr.join());
    };
};
jansNotation([3,
    4,
    '+'])