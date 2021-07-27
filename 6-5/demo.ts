class Animal{
    name:string;
    sleep(){
        console.log(this.name+"在睡觉");
    }

    constructor(name:string){
        this.name=name;
    }
}

class Dog extends Animal{
    hobbit(){
        console.log(this.name+"爱吃骨头");
    }
}

let jm=new Dog("金毛");
jm.hobbit();
console.log(jm.name);