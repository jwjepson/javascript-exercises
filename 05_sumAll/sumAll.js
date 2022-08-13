const sumAll = function(num1, num2) {
    sum = 0;
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            sum = i + sum;
        }
    }
    else {
        for (let i = num1; i >= num2; i--) {
            sum = i + sum;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

123,1