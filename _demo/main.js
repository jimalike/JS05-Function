function soundOfBird() {
console.log('eieieiei')
console.log('จก')
console.log('กวิ๊กๆๆๆๆๆๆๆ');
}


soundOfBird();
soundOfBird();
soundOfBird();


function isPrime() {
    let n = 5
    let isPrime = true
    for(let i = 2 ; i < n; i++) {
        if(n % i ==0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(n)
}
