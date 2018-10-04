'use strict';
const fs = require('fs');
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    arr.sort();
    var minsum=0, maxsum=0,x=1;
    var len=arr.length;
    for(var i=0;i<4;i++){
        minsum=minsum+arr[i];
    }
    while(x<5){
        maxsum=maxsum+arr[len-x];
        x++;
    }
    ws.write(minsum+" "+maxsum);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
