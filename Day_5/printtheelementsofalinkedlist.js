function printLinkedList(head) {
    var temp=head;
            while(temp!=null){
                console.log(temp.data);
                temp=temp.next;
            }

}