function insertNodeAtHead(head, data) {
    var temp=new SinglyLinkedListNode(data);
            if(head==null)
                head=temp;
            else{
               temp.next=head; 
            }
        return temp;

}