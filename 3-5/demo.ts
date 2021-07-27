let a:unknown;
a=123;
a='xdclass';
a=true;

let b:boolean;
// b=a;
if(typeof a==='boolean'){
    b=a;
}

console.log(b);
console.log(a);