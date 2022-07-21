function daysInAmonth(month, year) {
    return new Date(year, month, 0).getDate();
};
console.log(daysInAmonth(1, 2012))