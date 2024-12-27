// Good to use when you wont know what it will be
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
//Later if you type check it you can reasign it to other variables.
if (typeof userInput === 'string') {
    userName = userInput;
}
// userName = userInput //Throws error; 
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An error occured', 500);
