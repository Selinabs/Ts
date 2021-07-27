class Animal{
    name:string="动物";
    sleep(){
        console.log("动物在睡觉");
    }
}

class Dog extends Animal{
    name:string="狗";
    sleep(){
        console.log("狗在睡觉");
    }
}


let jm=new Dog();
console.log(jm.name);
jm.sleep();