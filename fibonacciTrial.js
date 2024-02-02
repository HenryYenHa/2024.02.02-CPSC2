function fib(number) {
  if (number <= 1) {
    return 1;
  } else {
    return fib(number - 1) + fib(number - 2);
  }
}
let n = 8;
console.log(`F@:${n} , ${fib(n)}`);
