function fibs(num) {
    if (num === 0) {
        return [];
    }

    if (num === 1) {
        return [0];
    }

    let result = [0, 1];

    for (i = 2; i < num; i++) {
        result.push(result[i-2] + result[i-1]);
    }

    return result;
}

// Test cases
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(8));