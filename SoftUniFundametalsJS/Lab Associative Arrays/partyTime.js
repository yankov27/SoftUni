function partyTime(data) {

    let vip = new Set();
    let normal = new Set();
    let double = new Set();
    let counter = 0;

    let isParty = false;

    for (let line of data) {
        if (line === 'PARTY') {
            isParty = true;
            continue;
        };

        if (!isParty) {
            counter++
            if (vip.has(line)) {
                double.add(line);
            };
            if (normal.has(line)) {
                double.add(line);
            };
            let firstChar = Number(line[0]);
            if (isNaN(firstChar)) {
                normal.add(line);
            } else {
                vip.add(line);
            };
        } else {
            counter--
            if (!double.has(line)) {
                normal.delete(line);
                vip.delete(line);
            };
        };
    };

    console.log(counter);

    for (let person of vip) {
        //if (!double.has(person)) {
            console.log(person);
        //};
    };

    for (let person of normal) {
        //if (!double.has(person)) {
            console.log(person);
        //};
    };
};
partyTime(['7IK9YoOh','9NoBUajQ','4Ce8vwPmE','5SVQXQCbc','IK9Yo0h','9NoBUajQ','4Ce8vwPmE','5SVQXQCbc','6tSzE5t0p','PARTY','9NoBUajQ','4Ce8vwPmE','5SVQXQCbc','6tSzE5t0p',])
//partyTime(['7IK9Yo0h','9NoBUajQ','Ce8vwPmE','SVQXQCbc','tSzE5t0p','PARTY','9NoBUajQ','Ce8vwPmE','SVQXQCbc'])