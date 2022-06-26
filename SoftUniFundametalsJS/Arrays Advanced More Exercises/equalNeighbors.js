function equalNeighbors(arr) {

    let counter = 0;

    for (let row = 0; row < arr.length; row++) {
        for(let col = 0; col < arr[row].length; col++) {
            if (row < arr.length - 1) {
                if (arr[row][col] == arr[row + 1][col]) {
                    counter++;
                };
            };
            if (col < arr[row].length) {
                if (arr[row][col] == arr[row][col + 1]) {
                    counter++;
                };
            };
        };
    };
    console.log(counter);
};
equalNeighbors([['test', 'yo', 'yo', 'ho'],
 ['well', 'done', 'no', '6'],
 ['not', 'done', 'yet', '5']])