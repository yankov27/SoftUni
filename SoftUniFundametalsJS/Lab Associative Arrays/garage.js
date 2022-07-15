function garage(data) {

    let obj = {};

    for (let line of data) {
        let garage = line.split(' - ').shift();
        let carInfo = line.split(' - ').pop();
        if (!obj.hasOwnProperty(garage)) {
            obj[garage] = [];
        };
        obj[garage].push(carInfo);
    };

    for (let [garage, info] of Object.entries(obj)) {
        console.log(`Garage № ${garage}`);
        let set = new Set(info);
        for (let el of set) {
            let arr = el.split(', ')
            let newArr = [];
            for(let el of arr) {
                let logInfo = el.replace(': ', " - ");
                newArr.push(logInfo);
            };
            console.log(`--- ${newArr.join(', ')}`)
        };
    };
};
garage(['1 - color: green, fuel type: petrol',

    '1 - color: dark red, manufacture: WV',

    '2 - fuel type: diesel',

    '3 - color: dark blue, fuel type: petrol'])