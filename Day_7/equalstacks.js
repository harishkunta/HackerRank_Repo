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
 * Complete the equalStacks function below.
 */
function sum(h){
    var sum=0;
    for(let i=0;i<h.length;i++) {
        sum=sum+h[i];
    }
    return sum;
}
function equalStacks(h1, h2, h3) {
    /*console.log(l3);
     * Write your code here.
     */
    var l1=sum(h1);
    var p=0,q=0,r=0;
    var l2=sum(h2);
    
    var l3=sum(h3);
  
    var status="";
    var max;
    var value=l1;
    while((l1!=l2)||(l1!=l3)||(l2!=l3)){
        
        max=Math.max(l1, l2, l3); 
     
        
        if(max==l1){
             l1=l1-h1[p++];
            value=l1;
        }
        else if(max==l2){
            l2=l2-h2[q++];
            value=l2;
        }
        else {
             l3=l3-h3[r++];
            value=l3;
        }
       
         if((l1==0)||(l2==0)||(l3==0))
            break;
    }
    if((l1==l2)&&(l1==l3))
        return value;
    else
        return 0;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n1N2N3 = readLine().split(' ');

    const n1 = parseInt(n1N2N3[0], 10);

    const n2 = parseInt(n1N2N3[1], 10);

    const n3 = parseInt(n1N2N3[2], 10);

    const h1 = readLine().split(' ').map(h1Temp => parseInt(h1Temp, 10));

    const h2 = readLine().split(' ').map(h2Temp => parseInt(h2Temp, 10));

    const h3 = readLine().split(' ').map(h3Temp => parseInt(h3Temp, 10));

    let result = equalStacks(h1, h2, h3);

    ws.write(result + "\n");

    ws.end();
}