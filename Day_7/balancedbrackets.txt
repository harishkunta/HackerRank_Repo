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
class Stack {
    constructor() 
    { 
        this.items = []; 
    } 
    push(element) 
    { 
         this.items.push(element); 
    } 
    pop() 
    { 
        if (this.items.length == 0) 
            return "Underflow"; 
        return this.items.pop(); 
    } 
    peek(){
        return(this.items[this.items.length]-1)
    }
    printStack() 
    {  
        var max=0;
        for (var i = 0; i < this.items.length; i++) {
            if(this.items[i]>max) {
                max=this.items[i];
            }
        }
        return max;
    }
    empty() {
        return this.items.length==0;
    }
    
}

function isBalanced(input) {
    let st=new Stack();
    var status="NO",flag=0,x;
  
     for (var i=0; i<input.length; i++){
                if((input.charAt(i)=='(')||(input.charAt(i)=='[')||(input.charAt(i)=='{')) {
                    st.push(input.charAt(i));   
                 
                }
                else if(st.empty()) {
                    status="NO";
                    flag=1;
                    break;
                }
                else
                {
                    
                 switch (input.charAt(i))
                {
                    case ')':
                             
                             x = st.pop();
                            if (x=='{' || x=='[') {
                                status="NO";
                                flag=1;
                            }
                            break;
                    case ']':
                           
                            x = st.pop();
                            if (x=='{' || x=='(') {
                                flag=1;
                                status="NO";
                            }
                            break;
                    case '}':
                         
                            x =  st.pop();
                            if (x=='(' || x=='[') {
                                status="NO";
                                flag=1;}
                            break;
                }
                }
        }
        if(st.empty()&&(flag==0))
            status="YES";
            
        return(status);
    }
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        let result = isBalanced(s);

        ws.write(result + "\n");
    }

    ws.end();
}