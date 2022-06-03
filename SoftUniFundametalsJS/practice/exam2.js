const number = 1;
const number2 = number;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

let person = {name:'Bob'};
let person2 = person;
person2.name = 'Susy'
console.log(`The name of the first person is ${person.name}`)
console.log(`The name of the second person is ${person2.name}`)