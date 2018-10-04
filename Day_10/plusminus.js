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

// Complete the plusMinus function below.
function plusMinus(arr) {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    var positive=0,negative=0, zero=0;
    var posfraction=0,negfraction=0,zerofraction=0;
    var len=arr.length;
    for(var i=0;i<len;i++){
        if(arr[i]<0){
            negative++;
        }else if(arr[i]>0){
            positive++;
        }else{
            zero++;
        }
    }
    posfraction = positive/len;
    negfraction = negative/len;
    zerofraction= zero/len;
    
     ws.write(posfraction+"\n"+ negfraction+"\n"+ zerofraction+"\n");
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
