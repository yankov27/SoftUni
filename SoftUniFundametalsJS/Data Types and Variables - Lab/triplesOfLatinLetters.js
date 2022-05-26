function triplesOfLatinLetters(n) {

    for (let a = 0; a < n; a++) {
        const firstLetter = String.fromCharCode(97 + a);
        for (let b = 0; b < n; b++) {
            const secondLetter = String.fromCharCode(97 + b);
            for (let c = 0; c < n; c++) {
                const thirdLetter = String.fromCharCode(97 + c);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}
triplesOfLatinLetters(3)
//triplesOfLatinLetters(2)