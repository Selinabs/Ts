type myType=string|number;
let a:myType;
a=123;
//a=true;//报错

//interface   //接口
interface myInterface{
    name:string;
    sleep():void;
}

interface myInterface{
    age:number;
}

let b:myInterface;
b={
    name:"xdclass",
    age:12,
    sleep(){
        console.log("myInterface");
    }
}

console.log(b.name);
b.sleep();


class Person implements myInterface{
    name:string;
    age:number;
    gender:string;
    sleep(){
        console.log(this.name);
    }
    constructor(name:string,age:number,gender:string){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
}

let c=new Person("小D",12,"男");
console.log(c);
c.sleep()