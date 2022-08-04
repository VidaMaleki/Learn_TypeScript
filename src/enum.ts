// JavaScript way
const small = 1;
const medium = 2;
const large = 3;

//PascalCase
enum Size {Small=1 , Medium , Large}
// if you don't asign value to them by default it will start by zero
// if you put enum Size {Small=1 , Medium , Large} rest of values will be after that like 2, 3
// if your value is string you need to specifiy for each a value
let mySize: Size = Size.Medium;
console.log(mySize);