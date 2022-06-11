function passwordValidator(password) {

    let lengthValidator = false;
    let letterAndDigitsValidator = false;
    let digitsCounterValidator = false;
    let digitsCounter = 0

    if (password.length >= 6 && password.length <= 10) {
        lengthValidator = true;
    }

    if (/^[A-Za-z0-9]+$/.test(password)) {
        letterAndDigitsValidator = true;
    };

    for (let i = 0; i < password.length; i++) {
        if (/^[0-9]+$/.test(password[i])) {
            digitsCounter++;
        };
        if (digitsCounter >= 2) {
            digitsCounterValidator = true;
        };
    };
    if (lengthValidator && letterAndDigitsValidator && digitsCounterValidator) {
        console.log(`Password is valid`);
    };
    if (!lengthValidator) {
        console.log(`Password must be between 6 and 10 characters`);
    };
    if (!letterAndDigitsValidator) {
        console.log(`Password must consist only of letters and digits`);
    };
    if (!digitsCounterValidator) {
        console.log(`Password must have at least 2 digits`);
    };

};
passwordValidator('logI12aaa+')
//passwordValidator('MyPass123')
//passwordValidator('Pa$s$s')