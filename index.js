// Task 0

let points = [12, 8, 17, 23, 15];

points.forEach((item, index, array) => {
  array[index] = item * 2;
});
// console.log(points);

// Our company does a special bonus and all users get double points. DO NOT MAKE A NEW ARRAY. Change the points array so everyone has double points.

// Task 1:

// Task: Square each number in the array and create a new array with the squared values.
// call this new array squaredNumbers
let numbers = [25, 36, 49, 64, 81];
const squaredNumbers = numbers.map((item) => {
  return Math.pow(item, 2); // square of an element is equal to its power by two i.e x^2
});
// console.log("Squared Numbers:", squaredNumbers);

// Task 2

// Task: We only want groups that are divisible by 3. Filter out numbers that are not divisible by 3 from the array, creating a new array called validGroups

let groupsOfPeople = [8, 15, 24, 31, 42];

const validGroups = groupsOfPeople.filter((item) => {
  if (item % 3 === 0) {
    return true;
  } else {
    return false;
  }
});
// console.log(validGroups);

// Task 3

// Task: I want to see each fruit in the console with an ! after each fruit.

let fruits = ["apple", "banana", "cherry", "date"];
fruits.forEach((item) => {
  //   console.log(`${item}!`);
});

// Task 4

// Task: We only want to show big animal names on our site - filter out animals with names shorter than 4 characters from the array, creating a new array called longNameAnimals

let animals = ["dog", "elephant", "cat", "giraffe", "rabbit"];

const longNameAnimals = animals.filter((name) => {
  if (name.length > 4) {
    return true;
  } else {
    return false;
  }
});
console.log(longNameAnimals);

// Task 5

// Task: I want to have the total of the ages in a variable that I can use many times. Create and update a variable to store the sum of the ages in the array.

let ages = [18, 25, 37, 12, 30];
let sum = 0;
const totalAges = ages.forEach((e) => {
  sum += e;
});
console.log(sum);

// Task 6

// I need an array that has the lengths of each fruit's coresponding fruit in the array. Create a new array called fruitLengths with the modified values.

let myFruits = ["apple", "banana", "cherry", "date"];

const fruitLengths = myFruits.map((item) => {
  return item.length;
});
// console.log(fruitLengths);
