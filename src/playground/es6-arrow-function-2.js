// argument object  - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 100));

// this keyword - no longer bound

const user = {
    name: "mohsen",
    cities: ["yazd", "shiraz", "tehran"],
    printPLacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city);
    },
};

console.log(user.printPLacesLived());

// challenge area

const multiplier = {
    numbers: [5, 6, 7, 10, 50],
    multiplyBy: [2],
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    },
};

console.log(multiplier.multiply());
