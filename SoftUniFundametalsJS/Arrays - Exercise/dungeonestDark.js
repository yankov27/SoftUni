function dungeonestDark(arr) {

    const string = arr[0].split('|');
    let health = 100;
    let stringL = string.length;
    let coins = 0;
    let roomCounter = 0;
    let totalCoins = 0;

    for (let i = 0; i < stringL; i++) {

        let currentRoom = string[i].split(' ');
        let command = currentRoom[0];
        let num = Number(currentRoom[1]);
        roomCounter++;

        if (command === 'potion') {
            if (health + num > 100) {
                num = 100 - health;
                health = 100;
            } else {
                health += num;
            }
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);


        } else if (command === 'chest') {
            coins = Number(num);
            totalCoins += Number(num);
            console.log(`You found ${coins} coins.`);

        } else {
            health -= Number(num);
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomCounter}`);
                return;
            }

        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${totalCoins}`);
    console.log(`Health: ${health}`);
}
//dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])
//dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])