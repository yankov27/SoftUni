function deserializeString(input) {

    let result = '';

    for (let i = 0; i < input.length; i++) {
        if (input[i] !== 'end') {
            let char = input[i].split(':')[0];
            let position = input[i].split(':')[1].split('/');
            for (let el of position) {
                result += char;
            };
        };
    };

    for (let i = 0; i < input.length; i++) {
        if (input[i] !== 'end') {
            let char = input[i].split(':')[0];
            let position = input[i].split(':')[1].split('/');
            for (let el of position) {
                let index = Number(el);
                result = result.slice(0, index) + char + result.slice(index + 1);
            };
        };
    };
    console.log(result);
};
deserializeString(['a:0/2/4/6',

    'b:1/3/5',

    'end'])