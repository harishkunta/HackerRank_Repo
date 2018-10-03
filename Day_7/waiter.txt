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
 * Complete the waiter function below.
 */
function primenum(n,prime) {
    var k=2;
    while(prime.length < n) {
        var count=0;
        for(let j=2;j<k;j++) {
            if(k%j==0)
                count++;
        }
        if(count==0)
            prime.push(k);
        k++;
    }
    console.log(prime);
    return prime;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nq = readLine().split(' ');

    var n = parseInt(nq[0], 10);

    var q = parseInt(nq[1], 10);

    var a = readLine().split(' ').map(numberTemp => parseInt(numberTemp, 10));

    var prime=new Array();
    prime=primenum(q,prime);
    for(var i=0;i<q;i++) {
        var x=new  Array();
        var y=new  Array();
        var k=prime[i];
        for(var j=a.length-1;j>=0;j--) {
            if(a[j]%k==0)
                y.push(a[j]);
            else
                x.push(a[j]);
        }
         for(var j=y.length-1;j>=0;j--){
               ws.write(y[j]+"\n");
           }
        a=x;
        if(i==q-1) {
           
            for(var j=x.length-1;j>=0;j--){
               ws.write(x[j]+"\n");
           }
        }
            
    }

    ws.end();
}