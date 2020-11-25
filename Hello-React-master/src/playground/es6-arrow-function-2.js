//arguments object - no longer bound with arrow functions
const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

//this keyword - no longer bound

const user = {
    name: 'Courtney',
    cities: ['Johannesburg', 'Soweto', 'Germiston'],
    printPlacesLived() {
       return this.cities.map((city) => this.name + ' has lived in ' + city); 
       
      
    }
    };
console.log(user.printPlacesLived());


//this.cities.forEach ((city) => {
//console.log(this.name + ' has lived in ' + city);
//});
//}


//challenge area

//const multiplier = {
    //numbers - array of numbers
    //multiplyBy - single number
    //multiply - return a new array where the number have been multiplied
//};
//console.log(multiplier.multiply())


const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
};
console.log(multiplier.multiply());