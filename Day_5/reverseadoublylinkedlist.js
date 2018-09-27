function reverse(head) {
    var current=head,temp;
    
    while (current !=  null) 
     { 
       temp = current.prev; 
       current.prev = current.next; 
       current.next = temp;               
       current = current.prev; 
     }      
       if(temp != null ) 
        head= temp.prev; 
    return head;

}