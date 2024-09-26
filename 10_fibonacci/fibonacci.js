const fibonacci = function(num) {
    /** */
    let fib = []
    if (typeof(num) === 'string') {
        num = parseFloat(num)
    }
    if (num === 0) return 0
    if (num < 0) return "OOPS"
    for (let i = 1; i < num+1; i++) {
        if (i === 1 || i === 2) {
            fib.push(1)
        } else {
            fib.push(fib[i-2] + fib[i-3])
        }     
    }
    console.log(fib)
    return fib[fib.length-1]
};

// Do not edit below this line
module.exports = fibonacci;
