function coppyArr() {

    let arr=[100,2,3,4,5,99];
    let stringArr = ['ab', 'gt', 'ra', 'ffd', 'tr']
    let arr2 = arr.slice(0); //copira masiva
    let lastElement = arr.push(); // vzima posledniq element
    let newArr = arr.map((el) => {  //minava prez vseki element ot masiva
        return el * el;
    });
    let evenNum = arr.filter((el) => { // filtrira element
        if (el % 2 === 0) {
            return el;
        }
    })

    let sortArr = arr.sort(function(a,b) {
        return b - a;   //sortirane na masiva
    })

    let sortStringArr = stringArr.sort(function(a,b) {
        return b.length - a.length; //sortira po duljina ot golqmo kum malko(a.length - b.length - ot malko kum golqmo)
    })

    let sortStringArr2 = stringArr.sort(function(a,b) {
        return a.localeCompare(b); //sortira po azbuchen red
    })

    console.log(sortStringArr2)
}
coppyArr()