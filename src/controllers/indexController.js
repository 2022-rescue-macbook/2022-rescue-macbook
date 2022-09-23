const request = require('request');
const indexDao = require('../dao/indexDao');

console.log('indexController running...');

exports.test = async function (req, res) {
    const data = await indexDao.daoTest();

    // 학생 100 data 더미데이터
    var students = [];

    for (var i = 0; i < 100; i++) {
        var randX = Math.floor(Math.random() * 100) + 1;
        var randY = Math.floor(Math.random() * 100) + 1;
        var randLabel = Math.floor(Math.random() * 3);
        var label = ['A', 'B', 'C'][randLabel];
        var randGroup = Math.floor(Math.random() * 3);
        var group = ['가', '나', '다'][randGroup];

        var student = {
            id: i,
            name: "이름", // 랜덤생성
            x: randX,
            y: randY,
            label: label, // 랜덤생성
            group: group, // 랜덤생성
            code: "대충코드임"
        }
        students.push(student);
    }

    res.json(students)

}