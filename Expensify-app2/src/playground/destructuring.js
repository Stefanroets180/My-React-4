
// Object destructuring


// const person = {
//   name: 'Stefan',
//   age: 34,
//   location: {
//     city: 'Vanderbijlpark',
//     temp: 32
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: '12 Rules for Life',
//   author: 'Jordan Peterson',
//   publisher: {
//     // name: 'Random House Canada Penguin Allen Lane'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // Random House Canada Penguin Allen Lane, Self-Published


// Array destructuring


const address = ['15 Reunert Street', 'Vanderbijlpark', '1911'];
const [, city, province = 'Gauteng'] = address;
console.log(`You are in ${city} ${province}.`);

const item = ['Coffee (Iced)', 'R15.00', 'R17.50', 'R19.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);