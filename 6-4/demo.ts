class Person{
    name:string="老范";
    constructor(){// ts中的构造方法，当类被实例化，构造函数就被调用
        console.log(this.name);
    }
}

let man=new Person;



class Animal{
    name:string;
    constructor(name:string){
        this.name=name;
    }
}

let dog=new Animal("狗");
console.log(dog.name);