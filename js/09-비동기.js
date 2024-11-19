const a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('first sync');
            resolve();
        }, 1000);
    });
};

const b = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('sec sync');
            resolve();
        }, 1000);
    });
};
const c = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('3rd sync');
            resolve();
        }, 1000);
    });
};
const d = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('4 sync');
            resolve();
        }, 1000);
    });
};
/*
a().then(() => {
    console.log('a success');
    b().then(() => {
        console.log('b success');
        c().then(() => {
            console.log('c success');
            d().then(() => {
                console.log('d success');
            });
        });
    });
});
*/
/*
a().then(() => {
    b().then(() => {
        c().then(() => {
            d();
        });
    });
});
*/
a()
    .then(() => {
        return b();
    })
    .then(() => {
        return c();
    })
    .then(() => {
        d();
    });

Promise.all([a(), b(), c(), d()]).then(() => {
    console.log('모두 완료');
});

// userId 매개변수를 받아 사용자 정보를 가져오는 함수를 구현합니다.
const getUser = (userId) => {
    // Promise 객체를 반환합니다. resolve 함수를 사용하여 비동기 작업이 완료되면 결과를 반환합니다.
    return new Promise((resolve) => {
        // fetch 함수를 사용하여 JSONPlaceholder API를 호출합니다.
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            // fetch 함수가 성공적으로 호출되면 response 객체를 반환합니다.
            // json 메서드를 사용하여 response 객체를 JSON 형태로 변환합니다.
            .then((res) => res.json())
            // response 객체가 성공적으로 변환되면 data 객체를 반환합니다.
            .then((data) => resolve(data));
    });
};

getUser(1)
    // getUser 함수가 성공적으로 호출되면 data 객체를 반환합니다.
    .then((data) => {
        console.log(`사용자 ID 1의 이름은 ${data.name} 입니다.`);
        return getUser(2);
    })
    .then((data) => {
        console.log(`사용자 ID 2의 이름은 ${data.name} 입니다.`);
        return getUser(3);
    })
    .then((data) => {
        console.log(`사용자 ID 3의 이름은 ${data.name} 입니다.`);
    });

const main = async () => {
    await a();
    b();
};
