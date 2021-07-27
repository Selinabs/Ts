let a:object;
a={};
a = function(){

};
// {}

let b:{
    name:string;
};
b={
    name:"xdclass",
    // age:12;
};
//需求1
// 指定对象必须包含一个name，但是还有age和sex这两个变量
// ?

let c:{
    name:string,
    age?:number,
    sex?:string,
}

c = {
    name:'xdclass',
    age:12,
}

//需求2
//只知道必须有的属性，其他不必须的不知道，怎么办

// let propName:string;

// propName='xdclass';
// propName='牢饭';

let d:{
    name:string,
    [propName:string]:unknown,// 前半段表示任意字符，后半段表示任意类型
}

d = {
    name:'xdclass',
    sayHello(){
        console.log(this.name);
    }
}

console.log(d.name);
if (typeof d.sayHello === 'function'){
    d.sayHello();
}