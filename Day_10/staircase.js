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

// Complete the staircase function below.
function staircase(n) {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    for(var i=1;i<=n;i++) {
        for(var j=1;j<=n-i;j++) {
            ws.write(" ");
        }
        for(var j=n-i+1;j<=n;j++) {
            ws.write("#");
        }
        ws.write("\n");
    }

}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
