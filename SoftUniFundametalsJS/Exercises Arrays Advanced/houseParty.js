function houseParty(arr) {

    let result = [];

    for (let el of arr) {
        let commnad = el.split(' ');
        let name = commnad[0];

        if (commnad.length === 3) {
            if (result.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                result.push(name);
            }
        } else {
            if (!result.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = result.indexOf(name);
                result.splice(index, 1);
            }
        }
    }
    console.log(result.join('\n'));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])