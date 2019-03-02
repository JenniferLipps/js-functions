// Britney Spears
// Sam Smith
// Tori Amos
// John Doe
// Zoe Ames

const firstName = 'Zoe';
const lastName = 'Ames'
console.log(firstName + lastName);
console.log(`${firstName} ${lastName}`);

const namePrinter = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
}

namePrinter('Zoe', 'Ames');
namePrinter('John', 'Doe');


const nuggetizer = (animal) => {
  return `processed ${animal}`;
};

console.log(nuggetizer("pig"));
console.log(nuggetizer("tofu"));
