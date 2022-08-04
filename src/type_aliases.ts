let employee3:{
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
// this code has problem because for declare another employee you need to write code again
// avoid repeating 
type Employee = {
    readonly id:number,
    name:string, 
    retire: (date: Date) => void
}
let employee_1: Employee = {
    id:1,
    name:'', 
    retire: (date:Date)=>{
        console.log(date)
    }
}