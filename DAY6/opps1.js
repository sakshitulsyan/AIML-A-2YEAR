// Without constructor
class A {
    name = "sara";

    show() {
        console.log("My name is " + this.name);
    }
}

let obj = new A();
obj.show();


// With constructor
class AA {
    constructor(name) {
        this.name = name;
    }

    show() {
        console.log("My name is " + this.name);
    }
}

let obj2 = new AA("ur");
obj2.show();