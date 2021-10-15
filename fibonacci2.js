let cache = new Map();
cache.set(0, 0)
cache.set(1, 1)

var fib = function(n) {
    let solution

    if (cache.has(n)) {
        solution = cache.get(n)
    } else {
        solution = fib(n-1) + fib(n-2)
    }
    
    cache.set(n, solution)
    return solution
};

console.log(fib(6))