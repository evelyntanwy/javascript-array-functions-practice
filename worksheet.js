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
// console.log(firstName);

//***REDUCE*** [accumulator of items]
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => {
  return acc + cur.mass;
}, 0);
// 0 is from the second parameters therefore we start with 0
// console.log(totalMass);

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => {
  return acc + cur.height;
}, 0);
// console.log(totalHeight);

//3. Get total number of characters by eye color
const eyeColor = characters.reduce((type, count) => {
  const color = count.eye_color;
  if (type[color]) {
    type[color] = type[color] + 1;
  } else {
    type[color] = 1;
  }
  return type;
}, {});
// console.log(eyeColor);
//4. Get total number of characters in all the character names

const charNames = characters.reduce((type, count) => {
  return type + count.name.length;
}, 0);
// console.log(charNames);

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
// compare function
const byMass = characters.sort((elem1, elem2) => {
  return elem1.mass - elem2.mass;
});
// if descending = elem2 - elem1
// console.log(byMass);

//2. Sort by height
const byHeight = characters.sort((elem1, elem2) => {
  return elem1.height - elem2.height;
});
// console.log(byHeight);

//3. Sort by name
const byName = characters.sort((elem1, elem2) => {
  if (elem1.name < elem2.name) return -1;
  return 1;
});

// console.log(byName);

//4. Sort by gender
const byGender = characters.sort((elem1, elem2) => {
  if (elem1.gender === "female") return -1;
  return 1;
});

console.log(byGender);
// opposite will be characterss.reverse

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
