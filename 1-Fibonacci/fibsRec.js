function fibsRec(num) {
    if (num === 0) {
        return [];
    }

    if (num === 1) {
        return [0];
    }

    if (num === 2) {
        return [0, 1];
    }

    let fibMinus1 = fibsRec(num - 1);
    return fibMinus1.concat(fibMinus1[fibMinus1.length - 2] + fibMinus1[fibMinus1.length - 1]);
}

// Test cases
console.log(`fibsRec(1) result: ${fibsRec(1)}`);
console.log(`fibsRec(2) result: ${fibsRec(2)}`);
console.log(`fibsRec(8) result: ${fibsRec(8)}`);