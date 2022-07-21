function cutAndReverse(string) {

    let reverced = string.split('').reverse().join('');
    let firstSlice = reverced.slice(reverced.length / 2);
    let secondSlice = reverced.slice(0, reverced.length / 2);

    console.log(firstSlice);
    console.log(secondSlice);
};
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')