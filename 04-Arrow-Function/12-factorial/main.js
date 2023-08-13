let sum = (n)=> {
    if(n == 0 || n == 1){
        return 1;
    } else {
        return n * sum(n-1);
    }
}   