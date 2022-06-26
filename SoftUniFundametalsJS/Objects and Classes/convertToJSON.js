function convertToJSON(name, lastName, hairColor) {

    let obj = {
        name,
        lastName,
        hairColor
    };
    let string = JSON.stringify(obj);
    console.log(string);
};
convertToJSON('George', 'Jones', 'Brown');