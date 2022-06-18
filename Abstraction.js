function Employee(name, id, basesalary)
{
this.name = name;
this.id = id;
this.basesalary = basesalary
let monthlyBonus = 1000;

let CalculatefinalSalary = function()
{
    finalSalary = basesalary + monthlyBonus
    console.log('final salary is ' + finalSalary)
}

this.getEmployeeDetails = function()
{
console.log(this.name+ 'has' +this.basesalary)
CalculatefinalSalary()
}

}

let emp1 = new Employee('ali', 20, 2000)
// emp1.name = 'Ali'
// emp1.id = 206370
// emp1.basesalary = 2000
emp1.getEmployeeDetails()
// emp1.CalculatefinalSalary()
