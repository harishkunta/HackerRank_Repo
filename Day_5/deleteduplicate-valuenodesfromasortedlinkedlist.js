function removeDuplicates(head) {
    var temp=head;
        var node=null;
        while(temp.next!=null){
                
                node=temp.next;
                
                if(temp.data==node.data){
                    if(temp==head){
                        head=temp.next;
                        temp=head;
                    }
                    else{
                    temp.next=node.next;
                    }
                }
                else{
                    temp=temp.next;
                }
            }
        return head;
}