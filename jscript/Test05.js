"use strict";

var vvv={

};

//严格的es5.0不允许使用with
// with(vvv){}

// let a = 100;

// for (let i = 0; i < 10; i++) {
//     a += 1;
//     document.write("" + a)
// }
// var b =parseInt(window.prompt('input'));
// document.write(b+"");

var obj = {
    name: "fkasjfa",
    age: 40,
};
//typeof 可以判断一下类型
// number string boolean object undefined function
document.write(typeof obj);
document.write(JSON.stringify(obj));

var count = 0;
for (let i = 2; i < 100; i++) {
    for (let j = 1; j < Math.sqrt(i); j++) {
        if (i % j === 0) {
            count++
        }
    }
    if (count === 1) {
        document.write(i + " ")
    }
    count = 0;
}

switch (1) {
    case 1:
        console.log("打印成功");
        break;
    case 2:
        break;
    case 3:
        break;
    case 4:
        break;
}

function test(x, y) {
    test.length;
    arguments.length
}

test(10, 11, 12, 13);

//任意数求和
function sum() {
    var total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += Number(arguments[i]);
    }
    document.write(total.toString())
}

sum(1, 2, 3, 4, 5);

//递归算法一定要找到它的出口 递归速度很慢
//递归 !n 计算n的阶乘 抽象规律 !n=n*(n-1)
function mul(n) {
    if (n === 1) {
        return 1;
    }
    return n * mul(n - 1);
}

console.log(mul(10));

//递归 求第n位斐波那契数列 fb(n)=fb(n-1)+fb(n-2)
function fb(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    return fb(n - 1) + fb(n - 2);
}

console.log(fb(10));

//闭包
function demo() {
    let num = 100;

    function a() {
        num++;
        console.log(num);
    }

    function b() {
        num--;
        console.log(num);
    }

    return [a, b];
}

const c = demo();

c[0]();
c[1]();


//立即执行函数，执行完后就销毁
(function (msg) {
    console.log(msg);
}("立即执行函数，执行完后就销毁"));

function test1() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        arr[i] = function () {
            document.write(i + "  ");
        }
    }
    return arr;
}

const arr1 = test1();
for (var j = 0; j < 10; j++) {
    arr1[j]();
}

//对象
var obj = {
    name: "",
    age: 18,
    sex: "1",
    eating: function (food) {
        document.write("我正在吃" + food)
    }
};

var obj1 = {};
obj1.name = "";
obj1.age = 18;
obj1.sex = "1";
obj1.eating = function (food) {

};

//构造函数  相当于构造工厂
function Person() {
    this.name = "";
    this.age = 18;
    this.sex = "1";
    this.eating = function (food) {
        console.log("我正在吃" + food)
    };
}

//是构造函数的原型，可以构造出Person对象的共有属性
//原型属性不可以被构造函数修改
//构造函数修改和创建的只是自己的属性
Person.prototype.sleep = function () {
    console.log("我正在睡觉")
};
Person.prototype.like = "网球";

//构造函数属性 返回构造方法
Person.constructor;

var xiaoming = new Person();
xiaoming.eating("苹果");
xiaoming.sleep();
var xiaohong = new Person();
xiaohong.eating("香蕉");
console.log(xiaohong.like);

//包装类  原始值不可以赋予属性值，之所以可以添加属性值是因为系统进行了包装，
// 但是系统会默认及时销毁，所以即使赋予属性也无效
var num = 123;
var num1 = Number(123);
//Number可以通过运算，但是运算完后就变成原始值，不再是一个对象

var s = "hello world";
var s1 = String("hello world");
console.log(s);

var b = true;
var b1 = Boolean(true);

var r = "abcdef";
for (let i = 0; i < r.length; i++) {
    console.log(r.charCodeAt(i) + "<-->" + r.charAt(i))
}

console.log(Math.ceil(12.01));
console.log(Math.floor(12.01));


//封装 利用Father的属性实现Son的属性
//call的使用
function Father(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

function Son(name, age, sex, liked) {
    Father.call(this, name, age, sex);
    this.liked = liked;
}

console.log(new Son("aaa", 18, "male", "网球").name);


//apply的使用 apply只能传一个实参，而且必须为一个数组列表
function Son2(name, age, sex, liked) {
    Father.apply(this, [name, age, sex]);
    this.liked = liked;
}

console.log(new Son2("aaa", 18, "male", "网球").name);

//bi包方法的封装，防止属性污染

var theName = "luhuanxml";

var method = (function () {
    var theName = "luhuan";

    function modifyName() {
        console.log(theName)
    }

    return function () {
        modifyName();
    }
}());

method();


//循环取对象中的属性和值
var obje = {
    name: "luhuanxml",
    age: 18,
    sex: "male",
    __proto__:{
        lastName:"luhuan"
    }
};

for (var p in obje) {
    if (obje.hasOwnProperty(p)) { //不判断这一句会吧__proto__中的属性打印出来
        console.log(p + ":" + obje[p])
    }
}

//逗号运算符
var n = (1,2); //n=2




