function lastKnumbersSequence(length, k) {

    let result = [1];

    for (let i = 1; i < length; i++) {
        let siquenceK = result.slice(-k);
        let sum = 0;

        for (let el of siquenceK) {
            sum += el;
        };
        result.push(sum);
    };
    console.log(result.join(' '));
};
lastKnumbersSequence(6, 3)
lastKnumbersSequence(8, 2)