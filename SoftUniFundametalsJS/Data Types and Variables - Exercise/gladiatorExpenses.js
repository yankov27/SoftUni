function gladiatorExpenses(lostFight, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let counterForHelmet = 0;
    let counterForSword = 0;
    let counterForShield = 0;

    let brokenHelmetCounter = 0;
    let brokenSwordCounter = 0;
    let brokenShieldCounter = 0;
    let brokenArmorCounter = 0;

    for (let i = 1; i <= lostFight; i++) {
        counterForHelmet++;
        counterForSword++;

        if (counterForHelmet == 2) {
            brokenHelmetCounter++;
            counterForHelmet = 0;
        }
        if (counterForSword === 3) {
            brokenSwordCounter++;
            counterForSword = 0;
        }
        if (counterForHelmet == 0 && counterForSword == 0) {
            brokenShieldCounter++;
            counterForShield++;
            if (counterForShield == 2) {
                brokenArmorCounter++;
                counterForShield = 0;
            }
        }
    }

    let helmRepearCost = helmetPrice * brokenHelmetCounter;
    let swordRepearCost = swordPrice * brokenSwordCounter;
    let shieldRepearCost = shieldPrice * brokenShieldCounter;
    let armorRepearCost = armorPrice * brokenArmorCounter;
    let totalRepearCost = (helmRepearCost + swordRepearCost + shieldRepearCost + armorRepearCost).toFixed(2);

    console.log(`Gladiator expenses: ${totalRepearCost} aureus`)
}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);