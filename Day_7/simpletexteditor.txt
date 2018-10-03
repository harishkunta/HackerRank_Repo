'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", _ => {
    _input = _input.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    processData(_input);
});
let currentLine = 0;
function readLine() {
    return _input[currentLine++];
}
function processData(input) {
    //Enter your code here
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);
    var arr=[];
    var s="";
    
    for(let i=0;i<n;i++) {
        var x = readLine().split(' ');
        if(x[0]==1) {
            arr.push(s);
            var str=x[1];
            var str1=s.concat(str);
            s=str1;
        }
        else if(x[0]==2) {
            arr.push(s);
            var j=x[1];
            var res = s.substring(0,s.length-j);
            s=res;
        }
        else if(x[0]==3) {
            ws.write(s.charAt(x[1]-1)+"\n");
        }
        else {
            s=arr.pop();
            
        }
        
    }
     ws.end();

}
