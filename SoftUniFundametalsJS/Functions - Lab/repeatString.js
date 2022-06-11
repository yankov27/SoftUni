function repeatString(string, n) {

    let output = "";

    for (let i = 0; i < n; i++) {
        output += string;
    }
    console.log(output)
}
repeatString("abc", 3)
repeatString("String", 2)