function fib(n) {
    var arr = [0];
    fibo(n, arr);
    return arr;
}

function fibo(n, arr) {
    // Base Case
    if (n <= 1) {
        arr[n] = n;
        return n;
    }

    // If the fib is stored, return it
    if (arr[n] != undefined) return arr[n];
    // Calculates new fib numbers
    arr[n] = fibo(n - 1, arr) + fibo(n - 2, arr);

    return arr[n];
}