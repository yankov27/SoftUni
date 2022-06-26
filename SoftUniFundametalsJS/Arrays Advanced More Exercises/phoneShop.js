function phoneShop(arr) {

    let arrL = arr.length
    let avaliblePhones = arr.shift().split(', ');
    let newArr = [];
    let lastPhone = [];
    let command = "";
    let currentPhone = '';

    for (let i = 0; i < arrL - 1; i++) {

        command = arr[i].split(' -').shift();
        currentPhone = arr[i].split('- ').pop();

        if (command === 'Add') {

            avaliblePhones.push(currentPhone);

        } else if (command === 'Remove') {
            for (let i = 0; i < avaliblePhones.length; i++) {
                let phoneForCheck = avaliblePhones.shift();
                if (phoneForCheck !== currentPhone) {
                    avaliblePhones.push(phoneForCheck);
                };
            };

        } else if (command === 'Bonus phone') {

            let bonusPhoneI = currentPhone.split(':');

            for (i = 0; i < avaliblePhones.length; i++) {
                if (avaliblePhones[i] !== bonusPhoneI[0]) {
                    newArr.push(avaliblePhones[i])
                } else {
                    newArr.push(avaliblePhones[i]);
                    newArr.push(bonusPhoneI[1]);
                }
            };
            avaliblePhones = newArr;
        } else if (command === 'Last') {
            for (i = 0; i < avaliblePhones.length; i++) {
                if (avaliblePhones[i] !== currentPhone) {
                    newArr.push(avaliblePhones[i])
                } else {
                    lastPhone.push(avaliblePhones[i])
                };
            };
            avaliblePhones = newArr;
            newArr.push(lastPhone)
        } else if (command === 'End') {
            break;
        }
    }
    console.log(newArr.join(', '))
}

phoneShop(["HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - XiaomiNote:Iphone5",
    "End"])