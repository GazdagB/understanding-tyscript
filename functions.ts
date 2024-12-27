function add(n1: number, n2: number) : number{
    return n1 + n2;
}

function printResult(num: number): void{
    console.log('Result: '  + num);   
}

function addAndHandle(n1: number, n2: number, cb: (num: number) =>  void){
const result = n1 + n2; 
cb(result); 
}

let combineValues: (a: number, b: number) => number; 

combineValues = add;
addAndHandle(5,20, (number)=>{
    console.log(number);
})
// combineValues(printResult) //Compile Error

printResult(combineValues(5,1));