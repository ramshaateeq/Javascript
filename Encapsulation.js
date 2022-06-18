class Employee
{
    setEmployeeDetails(name, age, id)
    {
        this.name = name;
        this.age  = age;
        this.id   = id;
    }

    getEmployeeName()
    {
        return this.name;
    }

    getEmployeeage()
    {
        return this.age;
    }

    getEmployeeid()
    {
        return this.id;
    }
}

EmployeeObject = new Employee();
EmployeeObject.setEmployeeDetails('ramsha', '28', '206370')
console.log(EmployeeObject.getEmployeeName())
console.log(EmployeeObject.getEmployeeage())
console.log(EmployeeObject.getEmployeeid())
    

