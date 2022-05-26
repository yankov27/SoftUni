function requiredReading(totalPage, pagePerHour, totalDays) {

    let totalHoursNeeded = totalPage / pagePerHour;
    let hourPerDayNeeded = totalHoursNeeded / totalDays;

    console.log(hourPerDayNeeded)

}
requiredReading(212, 20, 2)
requiredReading(432, 15, 4)