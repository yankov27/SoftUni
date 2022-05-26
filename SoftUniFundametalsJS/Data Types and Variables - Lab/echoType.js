function echoType(input) {

    let typeInput = typeof(input);
    if (typeInput === "string") {
        console.log(typeInput);
        console.log(input);
    } else if (typeInput === "number") {
        console.log(typeInput);
        console.log(input);  
    } else {
        console.log(typeInput);
        console.log(`Parameter is not suitable for printing`);
    }
}
echoType(18)