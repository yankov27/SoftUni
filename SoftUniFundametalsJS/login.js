function login(input) {

    let index = 0;
    let userName = input[index];
    index++;
    let password = userName.split('').reverse().join('');
    let wrongPasswordCounter = 0;

    while (input[index] !== password) {
        wrongPasswordCounter++;
        if (wrongPasswordCounter === 4) {
            console.log(`User ${userName} blocked!`);
            return;
        } else {
            console.log(`Incorrect password. Try again.`);
        }
        index++;
    }
    if (input[index] === password) {
        console.log(`User ${userName} logged in.`)
    }
}
login(['sunny','rainy','cloudy','sunny','not sunny'])