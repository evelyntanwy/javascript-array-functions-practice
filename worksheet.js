const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP*** [transform each of the item in the array]
//1. Get array of all names
const names = characters.map((elem) => {
  return elem.name;
});
// console.log(names);

//2. Get array of all heights
const heights = characters.map((elem) => {
  return elem.height;
});
// console.log(heights);

//3. Get array of objects with just name and height properties
// console.log(names, heights);

const simplifiedVersion = characters.map((elem) => ({
  name: elem.name,
  height: elem.height,
}));
// console.log(simplifiedVersion);
//4. Get array of all first names
// console.log(Object.value(characters)[0]);
const firstName = characters.map((elem) => elem.name.split(" ")[0]);
console.log(firstName);

//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
const greaterThan100 = characters.filter((elem) => {
  return elem.mass > 100;
});
// console.log(greaterThan100);

//2. Get characters with height less than 200
const heightLessThan200 = characters.filter((elem) => {
  return elem.height < 200;
});
// console.log(heightLessThan200);
//3. Get all male characters
const maleCharacters = characters.filter((elem) => {
  return elem.gender === "male";
});
//console.log(maleCharacters);
//4. Get all female characters
const femaleCharacters = characters.filter((elem) => {
  return elem.gender === "female";
});
// console.log(femaleCharacters);

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
