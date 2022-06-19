function firstAndLastKNumbers(arr) {

    const k = Number(arr.shift());
    const firstK = arr.slice(0,k).join(" ");
    const lastK = arr.slice((arr.length-k),arr.length).join(" ");

    console.log(firstK);
    console.log(lastK);
}
firstAndLastKNumbers([2, 7]);
firstAndLastKNumbers([3, 6, 7, 8, 9])
