function fun(name){

}

function fun1(age:number){
    console.log(age);
}
// fun1('xdclass')
fun1(123);


function fun2():number{
    return 123;
}

let a=fun2();
console.log("a="+ typeof a);


function fun3():void{// void代表返回值为空
    // return 'xdclass';
    // return NaN;
    // return null;// ok
    // return undefined;// ok
    // return ;// ok
}

function fun4():never{
    throw new Error("提示信息！！");
}

let d=fun4();
console.log("d="+d);