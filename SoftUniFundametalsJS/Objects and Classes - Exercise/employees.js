function employees(names) {

    for (let name of names) {
        let personInfo = {
            name,
            personalNum: name.length
        };
        console.log(`Name: ${personInfo.name} -- Personal Number: ${personInfo.personalNum}`);
    };
};
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])