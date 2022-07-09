function schoolGrades(data) {

    let map = new Map();

    for (let line of data) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let setOfGrade = tokens;

        if (!map.has(name)) {
            map.set(name, setOfGrade);
        } else {
            let oldSet = map.get(name);
            for(let grade of setOfGrade) {
                oldSet.push(grade);
            }
            map.set(name, oldSet);
        };
    };

    let sortedArr = Array.from(map.entries()).sort(([a], [b]) => {
        return a.localeCompare(b);
    });
    for (let [key, value] of sortedArr) {
        let sumGrade = 0;
        for(let grade of value) {
            sumGrade += Number(grade);
        };
        let avg = sumGrade / value.length;
        console.log(`${key}: ${avg.toFixed(2)}`);
    };
};
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])