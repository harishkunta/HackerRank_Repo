function deleteNode(head, position) {
        var node,temp;
        temp=head;
        if(position==0){
            head=head.next;    
        }
        else{
        for(var i=0;i<position-1;i++){
            temp=temp.next;
        }
        node=temp.next;
        temp.next=node.next;
        }
       
        return head;

}