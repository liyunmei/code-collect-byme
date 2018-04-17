/**
 * 递归， 二分折半， 比如求3的4次方， 可以拆成3的2次方相乘； 3 的5次就是3 ^ 2 相乘再乘2
 * https: //www.cnblogs.com/Liok3187/p/4601161.html
 * @param {*} x 
 * @param {*} n 
 */
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