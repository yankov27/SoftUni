function flightSchedule(arr) {

    let statusCheck = arr.pop();
    let changedStatuset = arr.pop();
    let allFligths = arr.pop();
    let flightsForLogs = {};

    allFligths.forEach(el => {
        let [flightsNums, destination] = el.split(' ');
        flightsForLogs[flightsNums] = {
            Destination: destination,
            Status: 'Ready to fly'
        };
    });

    changedStatuset.forEach(el => {
        let [flightsNums, status] = el.split(' ');
        if(flightsForLogs.hasOwnProperty(flightsNums)) {
            flightsForLogs[flightsNums].Status = status;
        };
    });
    
    for(let flight in flightsForLogs) {
        if(flightsForLogs[flight].Status === String(statusCheck)) {
            console.log(flightsForLogs[flight]);
        };
    };
};
flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
	'WN612 Cancelled',
	'WN1173 Cancelled',
	'SK430 Cancelled'],
	['Cancelled']
])