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
    age:number;
    sleep(){
        //super 代表父类-》超类
        super.sleep();
    }
    constructor(name:string,age:number){
        super(name);
        this.age=age;
    }
}

let jm=new Dog("金毛",12);
jm.sleep;
console.log(jm);