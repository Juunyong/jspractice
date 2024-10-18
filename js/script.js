//script

//selector
//idselector

document.getElementById('id');

//class selector

document.getElementsByClassName('class'); //. or #은 붙히지말것

//tag

document.getElementsByTagName('tag');

//query
document.querySelector('#id'); //# id
document.querySelector('.class'); //.class
document.querySelector('tag'); //tag

//variable

//let 재할당가능

let a = 1;
console.log(a);

a = 2;
console.log(a);

//const 재할당 x

const b = 3;
console.log(b);

//FUNCTION3 3가지 선언 중 1개

function functionname() {
    console.log(a);
    console.log(b);
    console.log('클릭');
}

//함수 호출
functionname();

//객체 선언
const obj = {
    left: '0',
    top: '0',
    BackgroundColor: 'green',
};

//산술 연산자
console.log(a + b); // 3
console.log(a - b); // -1
console.log(a * b); // 2
console.log(a / b); // 0.5
console.log(a % b); // 1
console.log(6 % 6);

console.log(a == b);

//조건문

if (a === 1) {
    a = 3;
    console.log(a);
} else {
    a = a + 11;
    console.log(a);
}
//event
$(document).ready(function () {
    document.querySelector('button').addEventListener('click', function () {
        console.log('click');
        console.log(a);
    });
});

document.querySelector('button').addEventListener('click', function () {
    console.log('click');
    console.log(a);
});

//box 숨기기
