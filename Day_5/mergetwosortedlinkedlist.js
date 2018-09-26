function mergeLists(a, b) {
          var result=null;
          if (a == null) 
                return(b); 
            else if (b==null) 
                return(a); 

           if (a.data <= b.data) 
            { 
                result = a; 
                result.next = mergeLists(a.next, b); 
            } 
            else
            { 
                result = b; 
                result.next = mergeLists(a, b.next); 
            } 
            return(result); 

}