function add(n1: number,n2: number, showResult: boolean, prefix: string = ""){
    const result = n1 + n2; 
    if(showResult){
        console.log(prefix + result);
    }
    return result;
};

const number1 = "5"; 
const number2 = 2.8; 
const printResult = true; 
const prefix = "Result: "

const result = add(Number(number1),Number(number2), printResult, prefix)

console.log(result);
