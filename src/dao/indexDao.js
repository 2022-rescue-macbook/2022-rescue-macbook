const spawn = require('child_process').spawn;

async function daoTest() {
    console.log('indexDao running...');
    // Python 코드 실행 (코드 유사도 분석 진행)
    const result = spawn('python', ['./src/dao/main.py']);
    result.stdout.on('data', function (data) {
        console.log(data.toString());
    });
}

module.exports = {
    daoTest,
}