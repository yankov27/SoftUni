function convertToObject(string) {
    
    let obj = JSON.parse(string);
    let keys = Object.entries(obj);

    for(const [key, value] of keys) {
        console.log(`${key}: ${value}`);
    };
};
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')