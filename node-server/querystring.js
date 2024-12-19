// querystring.js
const http = require('http');
const url = require('url');
// querystring 모듈을 불러옵니다.
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    // URL 문자열을 URL 객체로 변환
    const parsedUrl = url.parse(req.url);
    // URL 객체에서 쿼리스트링을 객체로 변환
    const query = querystring.parse(parsedUrl.query);

    // 상품 검색 처리
    if (query.category || query.color || query.size) {
        // 검색 조건 메시지 생성
        let searchMessage = '<h2>검색 조건:</h2>';
        if (query.category) searchMessage += `<p>카테고리: ${query.category}</p>`;
        if (query.color) searchMessage += `<p>색상: ${query.color}</p>`;
        if (query.size) searchMessage += `<p>사이즈: ${query.size}</p>`;

        // 검색 결과 메시지 (실제로는 데이터베이스 조회 결과가 들어갈 부분)
        const resultMessage = `
            <h2>검색 결과:</h2>
            <div>
                <h3>상품명: ${query.color} ${query.category}</h3>
                <p>사이즈: ${query.size}</p>
                <p>가격: 89,000원</p>
            </div>
        `;

        // HTML 응답
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <h1>쇼핑몰 상품 검색</h1>
            ${searchMessage}
            ${resultMessage}
        `);
    } else {
        // 검색 조건이 없을 때
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <h1>상품을 검색해주세요</h1>
            <p>예시: /?category=shoes&color=black&size=260</p>
        `);
    }
});

server.listen(8080, () => {
    console.log('8080 포트에서 서버가 실행 중입니다.');
});
