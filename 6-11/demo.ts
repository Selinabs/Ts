// 定义一个函数把传入的参数并返回出去
// function cache(prop:string):string{
//     return prop;
// }

// function cache<T>(prop:T):T{// <T> 泛型
//     return prop;
// }
// let a=cache<string>("true");// 泛型约束

// function cache<T,P>(prop:T,flag:P):T{// <T> 泛型
//     return prop;
// }
// let a=cache<string,number>("true",23);

interface myInterface<T>{
    name:T;
}

class Person<T,P> implements myInterface<T>{
    name:T;
    age:P;
    constructor(name:T,age:P){
        this.name=name;
        this.age=age;
    }
}

let obj=new Person<string,number>("老范",30);
console.log(obj);