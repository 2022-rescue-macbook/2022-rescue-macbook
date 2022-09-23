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
            code: `import re
                import sys
                
                input = sys.stdin.readline
                
                queue = []
                
                N = int(input())
                point = 0
                
                for i in range(N):
                    command = input()
                    if 'push' in command:
                        data = re.findall("\\d+", command)
                        queue.append(int(data[0]))
                
                    elif 'pop' in command:
                        if (len(queue) - point) <= 0:
                            print("-1")
                        else:
                            print(queue[point])
                            point += 1
                
                    elif 'size' in command:
                        print(len(queue) - point)
                
                    elif 'empty' in command:
                        if (len(queue) - point) <= 0:
                            print("1")
                        else:
                            print("0")
                
                    elif 'front' in command:
                        if (len(queue) - point) <= 0:
                            print("-1")
                        else:
                            print(queue[point])
                
                    elif 'back' in command:
                        if (len(queue) - point) <= 0:
                            print("-1")
                        else:
                            print(queue[-1])
`
        }
        students.push(student);
    }

    res.json(students);

}