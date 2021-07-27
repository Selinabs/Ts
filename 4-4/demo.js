var a;
(function (a) {
    a[a["male"] = 0] = "male";
    a[a["female"] = 1] = "female";
})(a || (a = {}));
;
console.log(a.male);
console.log(a.female);
// 数字枚举
//字符串枚举
var b;
(function (b) {
    b["red"] = "\u7EA2";
    b["yellow"] = "\u9EC4";
    b["blue"] = "\u84DD";
})(b || (b = {}));
console.log(b.red);
console.log(b.yellow);
console.log(b.blue);
