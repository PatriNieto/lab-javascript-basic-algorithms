// Iteration 1: Names and Input
let hacker1 = "Patri";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Nuriacia";
console.log(`The navigator's name is ${hacker2}`);

let charHacker = 0;

// Iteration 2: Conditionals
if(hacker1.length === hacker2.length){
    charHacker = hacker1.length;
    console.log(`Wow, you both have equally long names, ${charHacker} characters!`);
} else if(hacker1.length < hacker2.length){
    charHacker = hacker2.length;
    console.log(`It seems that the navigator has the longest name, it has ${charHacker} characters.`);
} else if(hacker1.length > hacker2.length) {
    charHacker = hacker1.length;
    console.log(`The driver has the longest name, it has ${charHacker} characters.`);
} else {
    console.log("Don't forget to write the team names");
}

// Iteration 3: Loops
