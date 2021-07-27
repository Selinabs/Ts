abstract class Animal{
    name:string="抽象类";
    abstract sleep():void;
    //抽象方法特点
    //没有方法体，没有实现
}

//let dog=new Animal;
//抽象类只能被继承，不能初始化一个实例
//子类继承抽象类，必须重写抽象类中所有的抽象方法，如果不重写，那这个类也应该是抽象类

// class Dog extends Animal{
//     sleep(){

//     }
// }

abstract class Dog extends Animal{
    abstract bark():void;
}

class JM extends Dog{
    sleep(){};
    bark(){};
}