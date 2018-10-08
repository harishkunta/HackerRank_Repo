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

// Complete the taumBday function below.
function taumBday(b, w, bc, wc, z) {
     var max,min;
    var actualcost=(b*bc)+(w*wc);
    if(bc>wc) {
         max=bc;
         min=wc;
    }
    else{
        max=wc;
        min=bc;
    }
    var cost=0;
    cost=((b+w)*min);
    if(max==bc)
        cost+=z*b;
    else if(max==wc)
        cost+=z*w;
    if(cost<actualcost)
        return cost;
    else
        return actualcost;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const bw = readLine().split(' ');

        const b = parseInt(bw[0], 10);

        const w = parseInt(bw[1], 10);

        const bcWcz = readLine().split(' ');

        const bc = parseInt(bcWcz[0], 10);

        const wc = parseInt(bcWcz[1], 10);

        const z = parseInt(bcWcz[2], 10);

        let result = taumBday(b, w, bc, wc, z);

        ws.write(result + "\n");
    }

    ws.end();
}
