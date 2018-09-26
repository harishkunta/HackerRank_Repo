function CompareLists(head1, head2) {
    var temp1=head1;
    var temp2=head2;
    var status=true;
    while((temp1!=null)&&(temp2!=null)){
    if(temp1.data!=temp2.data)
     status=false;
    temp1=temp1.next;
    temp2=temp2.next;
    }
    if(!(temp1==null)&&(temp2==null))
        status=false;
return status;

}