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

// Complete the encryption function below.
function encryption(s) {
    var length=s.length;
    var sqrt= Math.sqrt(length);
    var rows=Math.floor(sqrt);
    var col=Math.ceil(sqrt);
    if(rows*col<length) {
        rows=col;
    }
    var array=new Array(rows);
    for( var i=0;i<rows;i++) {
        array[i]=[];
    }
    var k=0;
    while(k<length) {
        for( var i=0;i<rows;i++) {
            for(var j=0;j<col;j++) {
                array[i].push(s.charAt(k));
                 k++;
            }
        }
       
    }
 
    var result='';
    for( var i=0;i<col;i++) {
        for(var j=0;j<rows;j++) {
            var str=result.concat(array[j][i]);
            result=str;
        }
        var str=result.concat(" ");
        result=str;
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}