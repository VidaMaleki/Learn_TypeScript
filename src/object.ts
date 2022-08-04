let employee =  {id:1}
//employee.name = "Vida"
//in javascript we can add this way to our object 
//but in typescript it's not accepting since it thinks that you need to add only numbers
//we can use this way insted
let employee1:{
    id:number,
    name:string
} = {id:1, name:''}

employee1.name = "Vida"
// we can use ? after name? to be optional but all employee needs name


//read only
//sometimes you need to make certain property read only
// typescript will not let us to modify accidently 
let employee2:{
    readonly id:number,
    name:string, 
    retire: (date: Date) => void
} = {
    id:1,
    name:'', 
    retire: (date:Date)=>{
        console.log(date)
    }
}