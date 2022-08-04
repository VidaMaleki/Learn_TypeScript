type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null| undefined{
    return id === 0 ? null : {birthday: new Date()}

}

let customer = getCustomer(1);
// if (customer !== null && customer !== undefined)
// optional property access
//console.log(customer?.birthday)
    console.log(customer?.birthday)
