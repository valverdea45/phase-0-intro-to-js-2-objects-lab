// Write your solution in this file!
let employee = {
    employee1: {
        name: `Adrian`,
        adress: `637 Schaefer ave`
    },
    employee2: {
        name: `Zaria`,
        adress: `1431 aspen terr`
    },
    employee3: {
        name: `Eli`,
        adress: `400 alma terr`
    }
}

function updateEmployeeWithKeyAndValue(employee, key, value){
   let newEmployee = {... employee}
   newEmployee[key] = value
   return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
};

function deleteFromEmployeeByKey(employee, key){
    let newerEmployee = {... employee}
    delete newerEmployee[key]
    return newerEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}