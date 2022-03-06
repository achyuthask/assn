



    var a = parseInt(prompt("enter a positive number"));
    let isprime = true;

      if (a==1) {
      alert("1 is neither prime nor composite number")
       }
     else if (a>1) {
            for(let i = 2; i<a ; i++){
               if(a % i == 0) {
                isprime = false;
                break;
         }
      }
    } 
      if (isPrime) {
        console.log("{a} is a prime number");
    } else {
        console.log("{a} is a not prime number");
    }

