// Good to use when you wont know what it will be
let userInput: unknown; 
let userName : string; 

userInput = 5; 
userInput = 'Max'

//Later if you type check it you can reasign it to other variables.
if(typeof userInput === 'string'){
    userName = userInput;
}

// userName = userInput //Throws error; 

function generateError(message: string, code: number) : never {
    throw {message: message, errorCode: code};
}

const result = generateError('An error occured', 500);