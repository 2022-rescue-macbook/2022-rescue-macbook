//var pythonShell = require('python-shell');
const {spawn} = require('child_process');


async function daoTest() {
    console.log('indexDao running...');
    var dataToSend;

    // Python 코드 실행 (코드 유사도 분석 진행)
    const python = spawn('python', ['main.py']);
    //console.log(python);

    // python.stdin.on('data', function (data) {
    //     console.log('data:', data);
    // })
    //
    // python.stdout.on('data', function (data) {
    //     console.log('data from python...');
    //     console.log(data, data.toString);
    //     dataToSend = data.toString;
    // });

}

module.exports = {
    daoTest,
}