function pointsValidation(coordinates) {

    const x1 = coordinates[0];
    const y1 = coordinates[1];
    const x2 = coordinates[2];
    const y2 = coordinates[3];

    const x1y1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    const x2y2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    const x1y1x2y2 = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));

    if (x1y1 === Math.trunc(x1y1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (x2y2 === Math.trunc(x2y2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (x1y1x2y2 === Math.trunc(x1y1x2y2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
pointsValidation([3, 0, 0, 4])
pointsValidation([2, 1, 1, 1])