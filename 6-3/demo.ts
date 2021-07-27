//关键字class

class Person{
    name!:string;
    age!:number;
}

let man=new Person;//let man=new Person;

man.name="老范";
man.age=30;


console.log(man);


// static

class Animal{
   static readonly nameD:"猫";//readonly 只读不可修改
    say(){
        console.log("动物在叫");
    }
}

let dog=new Animal;

// dog.name="狗";
// console.log(Animal.nameD);
dog.say();