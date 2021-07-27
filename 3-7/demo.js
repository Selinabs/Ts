function fun(name) {
}
function fun1(age) {
    console.log(age);
}
// fun1('xdclass')
fun1(123);
function fun2() {
    return 123;
}
var a = fun2();
console.log("a=" + typeof a);
function fun3() {
    // return 'xdclass';
    // return NaN;
    // return null;// ok
    // return undefined;// ok
    // return ;// ok
}
function fun4() {
    throw new Error("提示信息！！");
}
var d = fun4();
console.log("d=" + d);
