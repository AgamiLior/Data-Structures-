function findFloor(arr, num) {
    const length = arr.length;

    if (arr[0] > num) {
        return -1;
    }
    if (arr[length - 1] <= num) {
        return arr[length - 1];
    }

    let midIndex;
    let midValue;

    let left = 0;
    let right = length - 1;

    let floor = -1;

    while (left <= right) {
        midIndex = Math.floor((left + right) / 2);
        midValue = arr[midIndex];

        if (midValue === num) {
            return num;
        }

        if (midValue > num) {
            right = midIndex - 1;
        } else {
            left = midIndex + 1;
            floor = midValue;
        }
    }

    return floor;
}

module.exports = findFloor