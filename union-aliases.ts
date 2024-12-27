type Combinable = number | string; 
type convertTypes = "as-number" | "as-text"
type User = {name: string, age: number}

const user: User = {
    name: "Balázs",
    age: 25
}

function combine(
  input1: Combinable,
  input2: Combinable,
  convType: convertTypes
) {
    let result: number | string; 
    if(typeof input1 === 'number' && typeof input2 === 'number' || convType === 'as-number'){
        result = Number(input1) + Number(input2);
    } else {
        result = input1.toString() + input1.toString(); 
    }
    return result;
}
