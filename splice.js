//Using the splice() method to remove an element from an array

const animal = ['dog', 'cat', 'bird', 'fish', 'snake', 'lizard', 'tiger'];
const indexOfAnimal = animal.indexOf('tiger');

//Add elephant to the array
animal.splice(animal.length+1,0, 'elephant');
console.log(animal);


//grab all non mammals in the array
const nonMammals = animal.splice(2, 4);

console.log(nonMammals);
console.log(animal);


//combine the two arrays
animal.splice(animal.length+1,0, ...nonMammals)
console.log(animal);