 const employee = {
    name: "Sam",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee, [key]: value};
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const employees = {...employee};
    delete employees[key];
    return employees;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}