/*
 * Complete the 'activityNotifications' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY expenditure
 *  2. INTEGER d
 */

function activityNotifications(expenditure, d) {
    let countMap = {};
    let notifications = 0;

    // Initialize the count map with the first 'd' elements
    expenditure.slice(0, d).forEach((item) => {
        if (!countMap[item]) {
            countMap[item] = 0;
        }
        countMap[item]++;
    });

    for (let i = 0; i < expenditure.length - d; i++) {
        if (i !== 0) {
            countMap = updateCountMap(countMap, expenditure[i - 1], expenditure[i + d - 1]);
        }

        const median = getMedian(countMap, d);
        const currentExpenditure = expenditure[i + d];

        if (currentExpenditure >= median * 2) {
            notifications++;
        }
    }

    return notifications
}

function updateCountMap(countMap, prevValue, newValue) {
    // Update the count map with new and previous values
    countMap[prevValue]--;

    if (countMap[prevValue] === 0) {
        delete countMap[prevValue];
    }

    if (!countMap[newValue]) {
        countMap[newValue] = 0;
    }

    countMap[newValue]++;

    return countMap;
}

function getMedian(countMap, windowSize) {
    let index = 0;
    const values = Object.keys(countMap);
    let lower = 0;
    let upper = 0;
    let pivot = windowSize % 2 === 0 ? (windowSize / 2) + 1 : (windowSize + 1) / 2;

    while (pivot > 0) {
        const value = values[index];
        pivot -= countMap[value];

        if (1 > pivot) {
            lower = value;
        }

        if (!upper && 2 > pivot) {
            upper = value;
        }

        index += 1;
    }

    if (windowSize % 2 === 0) {
        return (Number(lower) + Number(upper)) / 2;
    } else {
        return lower;
    }
}