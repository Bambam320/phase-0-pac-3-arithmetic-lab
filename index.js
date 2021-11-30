function add(x,y) {
   
    console.log(x + y);
    return x + y;
}

function subtract(x, y) {
    console.log(x + y);
    return x - y;
}

function multiply(x, y) {
    console.log(x * y);
    return x * y;
}

function divide(x, y) {
    console.log(x / y);
    return x / y;
}

function increment(number) {
    console.log(++number);
    return number++;
}

function decrement(number) {
    console.log(number--);
    return number--;
}

function makeInt(string) {
    parseInt(string,10);
    return parseInt(string,10);
}

function preserveDecimal(string) {
    parseFloat(string);
    return parseFloat(string);
}

console.log(preserveDecimal("2.222"));