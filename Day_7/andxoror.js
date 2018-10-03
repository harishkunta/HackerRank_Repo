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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the andXorOr function below.
 */


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const aCount = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

       var size=a.length;

        var max=0;
         var j=0;
         var arr=new Array();
        while(size>=2){

            for(let i=0;i<=a.length-size;i++) {
                arr = a.slice(i+j,i+j+size);

                arr.sort();
                var first=arr[0];
                var second=arr[1]; 
                var value=(first^second);
                if(value>max) {
                    max=value;
                }
            }
            size--;
        }

    ws.write(max + "\n");

    ws.end();
}