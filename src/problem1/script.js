// First way to sum to n
var sum_to_n_a = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

// Second way to sum to n
var sum_to_n_b = function (n) {
    return (n * (n + 1)) / 2;
};

// Third way to sum to n
var sum_to_n_c = function (n) {
    if (n === 0) {
        return 0;
    }

    return n + sum_to_n_c(n - 1);
};
