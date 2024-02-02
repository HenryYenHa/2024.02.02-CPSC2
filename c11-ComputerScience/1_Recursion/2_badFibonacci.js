function getFibonacci(number){
    if (number < 2)
        return 1;
    return getFibonacci(number-1) + getFibonacci(number-2);
}

var number = 2 // somewhere between 40 and 60 this is going to be super slow! Ctrl-c may be your friend
console.log(`Fib for ${number} is ${getFibonacci(number)}`)