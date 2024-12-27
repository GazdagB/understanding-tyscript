var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var btnSum = document.getElementById('btnSum');
function sum(num1, num2) {
    return num1 + num2;
}
btnSum.addEventListener('click', function () {
    console.log(sum(+num1.value, +num2.value));
});
