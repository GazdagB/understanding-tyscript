const num1 = document.getElementById("num1")! as HTMLInputElement;
const num2 = document.getElementById("num2")! as HTMLInputElement;

const btnSum = document.getElementById('btnSum')! as HTMLButtonElement;

function sum(num1 : number,num2 : number){
    return num1 + num2;
}


btnSum.addEventListener('click',()=>{
    console.log(sum(+num1.value,+num2.value));
    
})