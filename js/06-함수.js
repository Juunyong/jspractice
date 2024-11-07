//function
//함수 선언식
hello1(); // 함수 호이스팅으로 인해 가능 (선언식일 경우에만_)

function hello1() {
    console.log('hello1');
}

function h1() {
    return 'hello';
}
console.log(h1());

function h2() {
    return;
}

console.log(h2()); // undefined

function h3() {
    return 1;
}
console.log(h3());

function sum(x = 0, y = 0) {
    return x + y;
}

console.log(sum(1));

const user = {
    name: 'winter',
    age: 2,
    city: 'seoul',
};

function getName(props) {
    const { name, age } = props;
    console.log(name);
    console.log(`${name}은 ${age}살 입니다.`);
} // 구조 분해 할당

getName(user);

//배열분해

const array = [1, 2, 3];

function getSecond(arr) {
    const [a, b, c] = arr;
    console.log(b);
}

getSecond(array);

function print(num) {
    console.log(num);
}

print(1);

function print(...num) {
    console.log(num);
}

print(1, 2, 3, 4, 5); // ...? 나머지 매개변수 (parameter에 전부 넣지 않고 ...으로 다 받는셈 치는구조)

const hello3 = function () {};
hello3();
const hello4 = () => {
    console.log('hello4');
};
hello4();

//화살표 함수 축약

const a = () => {};
const b = (x) => {}; // 소괄호 생략하기 !! --> 프ㅏ리티어가 넣어줌

const c = (x, y) => {};
const d = (x, y) => x + y;

const e = (x, y) => {
    return x + y;
};

const f = () => ({ name: 'winter' });
const g = () => [1, 2, 3]; //중괄호를 전부 지워 축약해서 사용
