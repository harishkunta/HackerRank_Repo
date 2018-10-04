'use strict';
const fs = require('fs');
process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
let currentLine = 0;
function readLine() {
    return _input[currentLine++];
}
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end",  _ => {
    _input = _input.trim().split('\n').map(str => str.trim());
   processData(_input);
});
function processData(input) {
    //Enter your code here
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    var nq = parseInt(readLine(), 10);
    var arr=[];
    for(let i=0;i<nq;i++) {
        var q = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
         if(q[0]==1) {
            arr.push(q[1]);
        }
        else if(q[0]==2) {
          arr.splice(arr.indexOf(q[1]),1);
        }
        else {  
              ws.write(Math.min.apply(null,arr)+"\n");
            }
    } 
}    