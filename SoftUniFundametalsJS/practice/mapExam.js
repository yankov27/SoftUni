const people = [
    { name: 'Daniel', age: 32, position: 'Devoloper' },
    { name: 'Manuela', age: 35, position: 'Engineer' },
    { name: 'Veselin', age: 31, position: 'Thug' },
];

const names = people.map(function (person) {
    return `<h1>My name is ${person.name}</h1> <h1>I am ${person.age} years old</h1>`;
});

document.body.innerHTML = names.join('');
console.log(names);