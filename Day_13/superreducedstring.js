'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the superReducedString function below.
function superReducedString(s) {
    var arr=[];
    for(var i=0;i<s.length;i++) {
        arr.push(s[i]);
    }
    var len=arr.length;
    for(var i=0;i<len;i++) {
        if(arr[i] == arr[i+1]) {
           arr.splice(i,2);  
            len=arr.length;
            i=-1;
        }
    }
    if(arr.length==0) {
        return "Empty String"
    }else { 
        var string="";
       for( var i in arr)
       string = arr.join("");
    }
    return string;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = superReducedString(s);

    ws.write(result + '\n');

    ws.end();
}
