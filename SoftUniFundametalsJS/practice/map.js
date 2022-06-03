const people = [
    {name : 'Daniel', age: 32, position: 'Devoloper'},
    {name : 'Manuela', age: 35, position: 'Engineer'},
    {name : 'Veselin', age: 31, position: 'Thug'},
];

const ages = people.map(function(person){
    return person.age;
});
const newPeople = people.map(function (person) {
    return {
        firstName: person.name.toUpperCase(),
        oldAge: person.age,
    };
})
console.log(ages);
console.log(newPeople);


