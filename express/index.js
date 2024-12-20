const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8080); //클라우드 배포에 환경변수의 PORT 사용하거나 로컬 사용

app.get('/', (req, res) => {
    // sendFile() 메서드: 파일을 응답 본문으로 보냄
    res.sendFile(__dirname + '/index.html');
});
app.get('/', (req, res) => {
    // sendFile() 메서드: 파일을 응답 본문으로 보냄
    res.sendFile(__dirname + '/about.html');
});
//posts 경로에서 블로그 글 목록을 가져오는 API
app.get('/posts', (req, res) => {
    res.send('블로그 글 목록');
});

app.put('/posts/:id', (req, res) => {
    res.send(req.params.id + '번 글 추가');
});

app.delete('/posts/:id', (req, res) => {
    res.send(req.params.id + '번 글 삭제');
});
app.listen(app.get('port'), () => {
    console.log('서버가 http://localhost:8080 에서 실행 중입니다.');
});
