function spiceMustFlow(yeild) {

    let dayCounter = 0;
    let spicesCounter = 0;

    while (yeild >= 100) {
        dayCounter++;
        spicesCounter += yeild - 26;
        yeild -= 10
    }
    console.log(dayCounter);
    if (spicesCounter >= 26) {
        console.log(spicesCounter - 26);
    } else {
        console.log(spicesCounter);
    }
}
spiceMustFlow(111)
spiceMustFlow(450)