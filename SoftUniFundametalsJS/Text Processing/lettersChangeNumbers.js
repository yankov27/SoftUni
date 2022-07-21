function lettersChangeNumbers(data) {

    let clearData = data.replace(/\s+/g, ',').split(',')
    let frontNum = 0;
    let lastNum = 0;
    let number = 0;
    let result = 0;

    for (let el of clearData) {
        let sum = 0;
        number = Number(el.slice(1, -1));
        if (el[0] === el[0].toUpperCase()) {
            frontNum = el.charCodeAt(0) - 64;
            sum = number / frontNum;
            if (el[el.length - 1] === el[el.length - 1].toUpperCase()) {
                lastNum = Number(el.charCodeAt(el.length - 1) - 64);
                sum -= lastNum;
            } else {
                lastNum = Number(el.charCodeAt(el.length - 1) - 96);
                sum += lastNum;
            };
        } else {
            frontNum = el.charCodeAt(0) - 96;
            sum = number * frontNum;
            if (el[el.length - 1] === el[el.length - 1].toUpperCase()) {
                lastNum = Number(el.charCodeAt(el.length - 1) - 64);
                sum -= lastNum;
            } else {
                lastNum = Number(el.charCodeAt(el.length - 1) - 96);
                sum += lastNum;
            };
        };
        result += sum;
    };
    console.log(result.toFixed(2));
};
lettersChangeNumbers('a1A')