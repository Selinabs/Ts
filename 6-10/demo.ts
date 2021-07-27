// class Person{
//     name:string;
//     private age:number;// 私有属性
//     constructor(name:string,age:number){
//         this.name=name;
//         this.age=age;
//     };

//     getAge(){
//         return this.age;
//     }
// }
// let obj=new Person("老范",20);
// // obj.name="小d";
// // obj.age=45;
// console.log(obj.getAge());


// class Person{
//     name:string;
//     protected age:number;// 受保护的属性
//     constructor(name:string,age:number){
//         this.name=name;
//         this.age=age;
//     };
//    protected getAge(){
//         return this.age;
//     }
// }


// class Docker extends Person{
//     getAge1(){
//         return super.getAge;
//     }
// }

// let obj=new Docker("老范",20);
// console.log(obj.getAge1);



// class Person{
//     name:string;
//    private age:number;
//     constructor(name:string,age:number){
//         this.name=name;
//         this.age=age;
//     };

//     getAge(){
//         return this.age;
//     };
//     setAge(age:number){
//         this.age=age;
//         if(age>=0){
//             this.age=age;
//         }
//     }
// }

// let boj=new Person("老范",26);
// boj.age=30;
// boj.age=-30;
// console.log(obj.age);


class Person{
    name:string;
   private age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    };

   get getAge(){//  存取器
        return this.age;
    };
   set setAge(age:number){
        this.age=age;
        if(age>=0){
            this.age=age;
        }
    };
}

let obj=new Person("老范",26);
obj.setAge=12;
console.log(obj.getAge);
