function reversePrint(head) {
             var temp=head;
            var arr=new Array(1000);
            var i=0;
            while(temp!=null){
                arr[i]=temp.data;
                i++;
                temp=temp.next;
            }
            for(var j=i-1;j>=0;j--)
                console.log(arr[j]);

}