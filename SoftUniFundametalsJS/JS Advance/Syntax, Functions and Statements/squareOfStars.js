function squareOfStars(input) {

    for(let i = 0; i < input; i++) {
        let print = '* '.repeat(input);
        console.log(print);
    };
};
squareOfStars(3)