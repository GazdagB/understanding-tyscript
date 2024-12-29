
const hobbies = ['Sports', 'Cooking']; 
const activeHobbies = ['Hiking', 'Programming']; 

const person = {
    name: "Balázs",
    age: 30
}; 


/*
activeHobbies.push(...hobbies);

console.log(activeHobbies);


const copiedPerson = {...person}

copiedPerson.name = "Max"; 

console.log(person);
console.log(copiedPerson);

*/

/*
const add = (...numbers: number[])=>{

return numbers.reduce((curr, currValue)=>{
    return curr + currValue
}, 0)

}

console.log(add(1,1,1,1,1,5));

*/

const [hobby1,hobby2] = hobbies; 

console.log(hobby1);
console.log(hobby2);

const {name : myName, age} = person; 

console.log(myName);
console.log(age);
