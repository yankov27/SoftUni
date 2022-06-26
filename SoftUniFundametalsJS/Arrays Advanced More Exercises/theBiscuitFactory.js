function theBiscuitFactory(arr) {

    let biscuits = Number(arr[0]);
    let workers = Number(arr[1]);
    let expectation = Number(arr[2]);

    let biscuitsProduced = 0;
    let dayCounter = 0;
    let every3thDayBiscuits = biscuits * 0.75;

    for (let i = 0; i < 30; i++) {
        dayCounter++;
        if (dayCounter == 3) {
            dayCounter = 0;
            biscuitsProduced += (every3thDayBiscuits * workers);
        } else {
            biscuitsProduced += (biscuits * workers);
        };
        biscuitsProduced = Math.floor(biscuitsProduced);
    };

    let percentageResult = Math.abs((biscuitsProduced - expectation) / expectation * 100);

    console.log(`You have produced ${biscuitsProduced} biscuits for the past month.`);

    if (biscuitsProduced > expectation) {
        console.log(`You produce ${percentageResult.toFixed(2)} percent more biscuits.`);
    } else {
        console.log(`You produce ${percentageResult.toFixed(2)} percent less biscuits.`)
    };
};
theBiscuitFactory([65, 12, 26000])