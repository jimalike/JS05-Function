function isPrime(num) {
    for(let d = 2; d < num; d++) {
        if(num % d == 0) {
            return false;
        }
    }   
 return true;
}



