const name = "pranith"
const repCount = 50

// console.log(name + repCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repCount}`);

const gameplay = new String('Pranih-gitpod-session')

console.log(gameplay[0]);
console.log(gameplay.__proto__);

// console.log(gameplay.length);
// console.log(gameplay.toUpperCase());
console.log(gameplay.charAt(2));
console.log(gameplay.indexOf('r'));


const newString = gameplay.substring(0,5);
// console.log(newString);

const anotherString = gameplay.slice(-1, 8);
// console.log(anotherString);

const newStringOne = "  picinic "
console.log(newStringOne);
console.log(newStringOne.trim());



const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));

console.log(gameplay.split('-'));

  