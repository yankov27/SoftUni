function phoneBook(arr) {

    let bookObj = {};

    for(let line of arr) {
        let [name, phoneNumber] = line.split(' ');
        bookObj[name] = phoneNumber;
    };

    for(let key in bookObj) {
        console.log(`${key} -> ${bookObj[key]}`);
    };
};
phoneBook(['Tim 0834212554',
            'Peter 0877547887',
            'Bill 0896543112',
            'Tim 0876566344'])