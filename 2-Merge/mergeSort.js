function mergeSort(unsortedArray) {
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }

    // Split array into 2 halves
    let leftUnsortedArray = unsortedArray.slice(0, unsortedArray.length/2);
    let rightUnsortedArray = unsortedArray.slice(unsortedArray.length/2, unsortedArray.length);

    // Sort each half by calling mergeSort recursively
    let leftSortedArray = mergeSort(leftUnsortedArray);
    let rightSortedArray = mergeSort(rightUnsortedArray);

    // Merge the sorted halves back together
    let leftIndex = 0;
    let rightIndex = 0;
    let finalSortedArray = [];

    // for (let i = 0; i < unsortedArray.length; i++) {
        // // Compare current indexed value of left vs. right
        // if (leftIndex < leftSortedArray.length && leftSortedArray[leftIndex] < rightSortedArray[rightIndex]) {
        //     finalSortedArray.push(leftSortedArray[leftIndex]);
        //     leftIndex += 1;
        // } else {
        //     finalSortedArray.push(rightSortedArray[rightIndex]);
        //     rightIndex += 1;
        // }
    // }

    let leftRemaining = leftSortedArray.length >= 1;
    let rightRemaining = rightSortedArray.length >= 1;

    while (leftRemaining || rightRemaining) {

        // Check if any of the arrays have been exhausted
        if (!leftRemaining || !rightRemaining) {
            if (!leftRemaining) {
                finalSortedArray.push(rightSortedArray[rightIndex]);
                rightIndex += 1;
            }
            if (!rightRemaining) {
                finalSortedArray.push(leftSortedArray[leftIndex]);
                leftIndex += 1;
            }
        } else {
            // Compare current indexed value of left vs. right
            if (leftSortedArray[leftIndex] < rightSortedArray[rightIndex]) {
                finalSortedArray.push(leftSortedArray[leftIndex]);
                leftIndex += 1;
            } else {
                finalSortedArray.push(rightSortedArray[rightIndex]);
                rightIndex += 1;
            }
        }

        // Check if we've reached the end of either array
        if (leftIndex >= leftSortedArray.length) {
            leftRemaining = false;
        }
        if (rightIndex >= rightSortedArray.length) {
            rightRemaining = false;
        }
    }

    return finalSortedArray;
}

// Test cases
console.log(mergeSort([1]));
console.log(mergeSort([5, 7, 1]));
console.log(mergeSort([8, 3, 1, 6, 3]));
console.log(mergeSort([9, 8, -6, 5, 5]));