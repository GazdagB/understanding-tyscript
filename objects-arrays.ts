/*
const person: {
  name: string;
  age: number;
} = {
  name: "Balazs",
  age: 25,
};
*/

/*
const person : {
    name: string;
    age: number;
    hobbies: string[];
    role: [number,string];
} = {
    name: "Balázs",
    age: 25,
    hobbies: ["Lego","Ice Skating","Rading",],
    role: [2, "admin"]
}
*/

enum Role {ADMIN ,READ_ONLY,AUTHOR};

const person = {
    name: 'Balázs',
    age: 25, 
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}


let favoriteActivities: (string|number)[];

//person.role.push("admin")
//person.role = [0,"unicorn"];
//person.role = ["unicorn", 2];

favoriteActivities = ["Sports", 2]

if(person.role === Role.ADMIN){
    console.log("Yeeeah I'm an admin!");
    console.log(`Admin value: ${Role.ADMIN}`);
    
}

console.log(person);
