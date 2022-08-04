// with union type we can give function or variable more than one type
//function kgToLbs(weight:number | string) {}

//we can call this function in two ways
// kgToLbs(10)
// kgToLbs("10kg")

function kgToLbs(weight:number | string):number {
     // narrowing
    if (typeof weight === 'number')
        return weight *2.2;
    else {
        return parseInt(weight) * 2.2;
    }
}
//The parseInt() function parses a string argument and 
//returns an integer of the specified radix (the base in mathematical numeral systems).
kgToLbs(10)
kgToLbs("10kg")