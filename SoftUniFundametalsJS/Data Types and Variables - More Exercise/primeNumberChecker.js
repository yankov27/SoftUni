function primeNumberChecker(num) {

    let isPrime = true;

    if (num < 1) {
        isPrime = false;
    }
    if (num % 2 == 0 && num > 2) {
        isPrime = false;
    }
    const s = Math.sqrt(num);

    for (let i = 3; i <= s; i += 2) {
        if (num % i === 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        console.log(`true`);
    } else {
        console.log(`false`)
    }
}
primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);