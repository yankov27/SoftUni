function nMatrix(steps) {

    let matrix = [];

    for(let i = 0; i < steps; i++) {

        let row = [];

        for(let j = 0; j < steps; j++) {
            row.push(steps);
        }
        matrix.push(row.join(' '));
    };
    console.log(matrix.join('\n'));
};
nMatrix(7)