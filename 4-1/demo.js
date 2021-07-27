var a;
a = {};
a = function () {
};
// {}
var b;
b = {
    name: "xdclass"
};
//需求1
// 指定对象必须包含一个name，但是还有age和sex这两个变量
// ?
var c;
c = {
    name: 'xdclass',
    age: 12
};
//需求2
//只知道必须有的属性，其他不必须的不知道，怎么办
// let propName:string;
// propName='xdclass';
// propName='牢饭';
var d;
d = {
    name: 'xdclass',
    sayHello: function () {
        console.log(this.name);
    }
};
console.log(d.name);
if (typeof d.sayHello === 'function') {
    d.sayHello();
}
