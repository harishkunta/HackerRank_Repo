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

// Complete the beautifulTriplets function below.
function beautifulTriplets(d, arr) {
        var beautiful=0;
        for(var i=0;i<arr.length-2;i++) {
            var x=arr[i];
            var flag=0;
            var second=x+d;
            var third=second+d;
            for(var j=i+1;j<arr.length-1;j++) {
                if(arr[j]==second){ 
                    flag++;

                    for(var k=j+1;k<arr.length;k++) {
                        if(arr[k]==third) {
                            flag++;
                        }
                    }
                }

                if(flag==2)
                    break;

            }
            if(flag==2)
                beautiful++;
        }
    return beautiful;
    }

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = beautifulTriplets(d, arr);

    ws.write(result + "\n");

    ws.end();
}
