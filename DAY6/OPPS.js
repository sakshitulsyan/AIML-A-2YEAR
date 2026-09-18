class SecA {
    constructor(name, rollNo, mobileNo) {
        this.name = name;
        this.rollNo = rollNo;
        this.mobileNo = mobileNo;
    }

    display() {
        console.log("Name      :", this.name);
        console.log("Roll No   :", this.rollNo);
        console.log("Mobile No :", this.mobileNo);
    }
}

let s1 = new SecA("Rahul", 101, "9870000007");
let s2 = new SecA("Priya", 102, "9876753211");
let s3 = new SecA("Aman", 103, "9876543012");
let s4 = new SecA("Neha", 104, "9876540013");
let s5 = new SecA("Sakshi", 105, "9876003214");

s1.display();
s2.display();
s3.display();
s4.display();
s5.display();