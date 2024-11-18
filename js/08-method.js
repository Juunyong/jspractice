const str = 'hello';

console.log(str.length);

console.log(str.includes('hello'));

console.log(str.includes('ttyl'));

console.log(str.includes('Hello'));

const str2 = '12345';
console.log(str2.padStart(10, '1'));
console.log(str2.padEnd(10, '0'));
console.log(str2.padEnd(3, '0'));

const str3 = 'season winter fall';
console.log(str3.replace('winter', 'fall')); // 출력만 이렇게 되고 원본은 바뀌지 않는다.

const str5 = 'spring, summer, fall, winter';
console.log(str5.split(', '));

const num = 3.1415926535;
console.log(num.toFixed(2)); // 괄호 안에 숫자로 숫자 끊어줌

const num2 = 100000000;
console.log(num2.toLocaleString() + 'won'); //천단위로 쉼표 넣어줌

Number.isInteger(1);
Number.isInteger(3.1);

Number.isNaN(10);
Number.isNaN(NaN);

console.log(Math.abs(-1));

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInt(1, 10));

const now = new Date();
console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());

const date2 = new Date(2024, 4, 5, 12, 30, 30);
console.log(date2);

const user = [
    { name: 'h', age: 12 },
    { name: 'g', age: 6 },
    { name: 'qq', age: 24 },
];

user.filter((item) => {
    item.age < 10;
});

const h = user.find((item) => {
    return item.name === 'h';
});

console.log(h);

const arr = [1, 2, 3];
arr.forEach((item) => {
    console.log(item);
});

const list = ['l1', 'l2', 'l3'];
arr.forEach((item) => {
    console.log(item);
});
