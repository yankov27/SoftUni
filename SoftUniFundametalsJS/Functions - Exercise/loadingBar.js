function loadingBar(percentage) {

    if (percentage === 100) {
        console.log(`100% Complete!`)
    } else {
        let completed = `%`.repeat(percentage / 10);
        let uncompleted = '.'.repeat(10 - (percentage / 10));

        console.log(`${percentage}% [${completed}${uncompleted}]`);
        console.log(`Still loading...`);
    }
}
loadingBar(100);