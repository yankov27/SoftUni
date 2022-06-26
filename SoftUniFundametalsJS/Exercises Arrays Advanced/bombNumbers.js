function bombNumbers(nums, bombNums) {

    let bombNum = bombNums[0];
    let bombPower = bombNums[1];
    let isMatch = false

    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        if (currentNum === bombNum) {
            isMatch = true;
            let lowerRange = i - bombPower;
            let bombCount = 1 + (bombPower * 2);

            while (lowerRange < 0) {
                lowerRange++;
                bombCount--;
            }
            nums.splice(lowerRange, bombCount);
            i--;
        }
    }
    if (isMatch) {
        let sum = 0;

        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
        }
        console.log(sum)
    }
}
bombNumbers([1, 2, 1],
    [2, 1])