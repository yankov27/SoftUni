function meetings(data) {

        let obj = {};

        for (let line of data) {
                let [day, name] = line.split(' ');

                if (obj.hasOwnProperty(day)) {
                        console.log(`Conflict on ${day}!`)
                } else {
                        obj[day] = name;
                        console.log(`Scheduled for ${day}`);
                };
        };
        
        for(let [key, value] of Object.entries(obj)) {
                console.log(`${key} -> ${value}`);
        };
};
meetings(['Monday Peter',
        'Wednesday Bill',
        'Monday Tim',
        'Friday Tim'])