class Hello{
    static name ="example of static ";

    constructor(){
        this.instanceVar="instance variable";
    }

    show(){
        console.log("static variable :" +Hello.name);
        console.log("instance variable:" +this.instanceVar);
    }

}

let h5 =new Hello();
h5.show();