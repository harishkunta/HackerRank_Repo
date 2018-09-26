'use strict';

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



function main() {
    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);
    var str='';
    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    
    let arr=[];
    for(var j=d;j<n;j++)
        arr.push(a[j]);
    for(var j=0;j<d;j++)
        arr.push(a[j]);
    for (var i = 0; i < n; i++) {
            str=str+arr[i]+" "}
    console.log(str);
    
}
