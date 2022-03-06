// write a program to print the nth fibonacci number,take user input


//take input from user
  
   
   var a= parseInt(prompt('enter a positve number to show fiboacci series: '));

     

    let n1=0, n2=1,nextnum;
      
     console.log(n1);     //here we print first n1 and n2
     console.log(n2);
    
     nextnum=n1+n2;
    
   while(nextnum<=a) {                      //from here we start printing fibonacci series
        console.log(nextnum);               
       
        n1=n2;
        n2=nextnum; 
        nextnum=n1+n2;
}
    
   