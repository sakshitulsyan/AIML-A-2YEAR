// Base class
class Employee {
    constructor(id, name, basicSalary) {
        this.id = id;
        this.name = name;
        this.basicSalary = basicSalary;
    }

    calculateSalary() {
        return this.basicSalary;
    }
}

// Derived class
class Manager extends Employee {
    constructor(id, name, basicSalary, incentive) {
        super(id, name, basicSalary); // Initialize parent class
        this.incentive = incentive;
    }

    // Method Overriding
    calculateSalary() {
        return this.basicSalary + this.incentive;
    }
}

// Creating objects
const emp = new Employee(101, "Rahul", 30000);
const mgr = new Manager(201, "Priya", 50000, 10000);

// Display salaries
console.log("Employee Salary: " + emp.calculateSalary());
console.log("Manager Salary: " + mgr.calculateSalary());