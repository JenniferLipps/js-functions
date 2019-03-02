// // Britney Spears
// // Sam Smith
// // Tori Amos
// // John Doe
// // Zoe Ames

// const firstName = 'Zoe';
// const lastName = 'Ames'
// console.log(firstName + lastName);
// console.log(`${firstName} ${lastName}`);

// const namePrinter = (firstName, lastName) => {
//     console.log(`${firstName} ${lastName}`);
// }

// namePrinter('Zoe', 'Ames');
// namePrinter('John', 'Doe');


// const nuggetizer = (animal) => {
//   return `processed ${animal}`;
// };

// console.log(nuggetizer("pig"));
// console.log(nuggetizer("tofu"));

const dogBreed = (dogName) => {
  return `My favorite dog is the ${dogName}.`;
};

// console.log(dogBreed("Bernese Mountain Dog"));

const nuggetizer = (animal) => {
   return `Processed ${animal}.`;
 };

// const dogBreedDiv = document.getElementById('dog-breeds');
// dogBreedDiv.innerHTML = dogBreed('Bernese Mountain Dog');

// const nuggetizerDiv = document.getElementById('nuggetizer');
// nuggetizerDiv.innerHTML = nuggetizer('tofu');
// nuggetizerDiv.innerHTML += nuggetizer('seitan');

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += textToPrint;
};

printToDom('dog-breeds', dogBreed('German Shepard'));
printToDom('nuggetizer', nuggetizer('bear'));
printToDom('nuggetizer', nuggetizer('kitten'));
printToDom('nuggetizer', 'mmmmm');