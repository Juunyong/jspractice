const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(8080, () => {
    console.log('서버가 http://localhost:8080 에서 실행 중입니다.');
});
