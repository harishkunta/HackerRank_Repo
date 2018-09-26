function getNode(head, positionFromTail) {
    var temp= head;
    var size=0;
    while(temp!=null)
        {
            size++;
            temp=temp.next;
        }

    var pos=positionFromTail;
     var temp= head;
    for(var i=1;i<size-pos;i++)
        {
            temp=temp.next;
        }
    return temp.data;
}