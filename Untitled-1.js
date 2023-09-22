var str="hdfgv";
console.log(str[0],str[2],str[4]);

console.log(60*60)

var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num += 1;
num -=1;
console.log(num);

num=3;
console.log(num);

var a=10;var b=2;
console.log('a+b=' + (a+b));
console.log('a*b=' + (a*b));
console.log('a/b=' + (a/b));

var c = 15, d = 2;
var result = c + d;
console.log(result);

var a=10,
    b=2,
    c=5;

console.log(a+b+c)

var a=17, b=10
var c = a-b
var d = 7
var result = c + d
console.log(result)

hour = 60*60
day = 24*hour
month = day*31
console.log(hour)
console.log(day)
console.log(month)

var hour = 15, minute=30, second=10
console.log(`${hour}:${minute}:${second}`) 

var num = 5
num *= num
console.log(num)

console.log([1, 2, 3,4, 5,6,7,8, 9, 10].filter(num=> {if(num % 2 == 0) return num}).reduce((total, num)=> total + Math.sqrt(num), 0))

console.log(1.15 + 2.30)

var x=5;
console.log(x++);

console.log([ ] + false - null + true )

var y = 1;
var x = y = 2;
console.log(x);

console.log( [ ] + 1 + 2)

var a6 = 5 % 3
var a7 = 3 % 5
var a8 = 5 + '3'
var a9 = '5' - 3
var a10 = 75 + 'кг'
console.log(a6)
console.log(a7)
console.log(a8)
console.log(a9)
console.log(a10)

var height = 23, width = 10
var s = 0.5 * height * width
console.log(s)

var heightC = 10, dC = 4
var v = heightC * (dC/2)* (dC/2) * 3.14
console.log(v)

var S = 2000000, p = 10, years = 5
var over = 0
for(var i = 0; i < years; i++)
{
    over += S * (p / 100)
    S = S * (p/1 + 1)
}

console.log(over)

var str = "Привет",
    num = 123,
    flag = true,
    txt = "true"

console.log(typeof(str))
console.log(typeof(num))
console.log(typeof(flag))
console.log(typeof(txt))

var str = "Привет",
    num = 123,
    flag = true,
    txt = "true"

console.log(typeof(str))
console.log(typeof(num))
console.log(typeof(flag))
console.log(typeof(txt))

console.log(-1 * num)