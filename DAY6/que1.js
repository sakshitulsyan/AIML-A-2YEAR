class Student {
    // Static property
    static totalStudents = 0;

    // Constructor
    constructor(rollNo, name, marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;

        // Increase student count
        Student.totalStudents++;
    }

    // Instance method
    displayResult() {
        console.log("Roll No: " + this.rollNo);
        console.log("Name: " + this.name);
        console.log("Marks: " + this.marks);

        if (this.marks >= 40) {
            console.log("Result: Pass");
        } else {
            console.log("Result: Fail");
        }

        console.log("---------------------");
    }

    // Static method
    static displayTotalStudents() {
        console.log("Total Students: " + Student.totalStudents);
    }
}

// Creating Student objects
let s1 = new Student(101, "Sakshi", 85);
let s2 = new Student(102, "Aman", 35);
let s3 = new Student(103, "Priya", 72);

// Calling instance method
s1.displayResult();
s2.displayResult();
s3.displayResult();

// Calling static method
Student.displayTotalStudents();