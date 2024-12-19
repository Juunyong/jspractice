setTimeout(() => {
    setTimeout(() => {
        console.log('sec');
    }, 2000);
    console.log('frst');
}, 3000);

// promise

const promise = new Promise((resolve, reject) => {
    console.log('make..');
    setTimeout(() => {
        resolve('seccess');
    }, 3000);
    reject('fail');
});
