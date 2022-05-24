function sortNumbers(a, b, c) {

    let nums = [a, b, c]
    let sorted = nums.slice().sort((a, b) => b - a);

    console.log(sorted[0]);
    console.log(sorted[1]);
    console.log(sorted[2]);
}
sortNumbers(0, 0, 2)