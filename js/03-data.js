//data

const { div } = require('three/webgpu');

// 1. string

const string1 = 'hi';
const string2 = 'myname is';
const string3 = `jun ${string1} ${string2}`;

console.log(string3);

const truth = true;
const falsy = false;
console.log(truth);

const userA = {
    name: 'winter',
    age: 2,
};

const userB = {
    name: 'me',
    age: '25',
    parent: userA,
};

console.log(userB.parent);
console.log(userB['parent']);

console.log(userA.name, userA.age);

console.log(`${userA.name}이는 ${userA.age}살입니다.`);

const users = [userA, userB];

console.log(users[1]);
console.log(users[1].name);

const add = () => {
    console.log('add');
};
add();

function Child(props) {
    /* const props = {
        name: 'fall',
        age: '2',
    };*/

    return (
        <div>
            <strong>{props.name}</strong>
            <p>{props.age}살</p>
        </div>
    );
}
