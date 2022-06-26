function cats(arr) {

    class Cat {
        constructor(name, age) {
            this.name = name,
                this.age = age,
                this.meow = () => {
                    console.log(`${this.name}, age ${this.age} says Meow`);
                };
        };
    };

    let cats = [];

    for (let currentString of arr) {
        let currentData = currentString.split(' ');
        let currenntCat = new Cat(currentData[0], currentData[1]);
        cats.push(currenntCat)
    };
    cats.forEach(cat => cat.meow());
};

cats(['Mellow 2', 'Tom 5']);