'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
    var i = 0, j = 0;
    var sumforward = 0;
    var sumreverse = 0;
    while(i<=arr.length-1) {
        sumforward=sumforward+arr[i][j];
        i++;
        j++;
    }
    i=0;
    j=arr.length-1;
    while(i<=arr.length-1) {
        sumreverse=sumreverse+arr[i][j];
        i++;
        j--;
    }
   return Math.abs(sumforward-sumreverse);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
