function add(n1, n2, showResult, prefix) {
    if (prefix === void 0) { prefix = ""; }
    var result = n1 + n2;
    if (showResult) {
        console.log(prefix + result);
    }
    return result;
}
;
var number1 = "5";
var number2 = 2.8;
var printResult = true;
var prefix = "Result: ";
var result = add(Number(number1), Number(number2), printResult, prefix);
console.log(result);
