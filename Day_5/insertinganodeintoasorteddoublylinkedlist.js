function sortedInsert(head, data) {
    var temp=head,temp1;
    var node=new DoublyLinkedListNode(data);
    if(temp.data>=data){
        
        node.next=head;
        head=node;
        temp=temp.next;
        return head;
        
    }
    while(temp.next!=null){
        temp1=temp.next;
        if((temp.data<=data)&&(temp1.data>=data)){
            temp.next=node;
            node.prev=temp;
            node.next=temp1;
            temp1.prev=node;
            return head;
        }
        temp=temp.next;
    }
    if(temp.data<data){
        temp.next=node;
        node.prev=temp;
    }
return head;
}