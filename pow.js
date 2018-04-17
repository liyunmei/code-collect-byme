var myPow = function (x, n) {
    if (n >= 0) {
        return pow(Math.abs(n));
    } else {
        return 1 / pow(Math.abs(n));
    }

    function pow(n) {
        var tmp = 0;
        if (n === 0) {
            return 1;
        } else if (n === 1) {
            return x;
        } else if (n % 2 === 1) {
            tmp = pow((n - 1) / 2);
            return tmp * tmp * x;
        } else if (n % 2 === 0) {
            tmp = pow(n / 2);
            return tmp * tmp;
        }
    }
    
}