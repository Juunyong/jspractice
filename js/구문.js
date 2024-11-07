function header2(type) {
    if (type === 'type1') return 'print type 1 header';
    if (type === 'type2') return 'print type 2 header';
    return 'print type 3 header';
}
console.log(header2('type1'), header2('type2'), header2('type3'));

//for문
/*
for (i = 0; i < 10; i++) {
    console.log(i);
}
    */
/*
for (i = 9; i > 0; i--) {
    console.log(i);
}*/

for (let j = 9; j > -1; j -= 2) {
    if (j < 4) {
        break;
    }
    console.log(j);
}

const animals = ['dog', 'cat', 'cow'];

for (let animal of animals) {
    console.log(`내가 좋아하는 동물은 ? : ${animal}`);
}

const user3 = {
    name: 'winter',
    age: 2,
    city: 'seoul',
};

for (let a in user3) {
    console.log(a);
    console.log(user3[a]);
}

let k = 1;
let sum = 0;

while (k <= 10) {
    sum += k;
    k++;
    console.log(sum);
}
