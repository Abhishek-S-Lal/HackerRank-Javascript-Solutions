/*
 * Complete the 'morganAndString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function morganAndString(a, b) {

    let ans = '';
    let idxA = 0;
    let idxB = 0;

    while (idxA < a.length && idxB < b.length) {
        if (a[idxA] < b[idxB]) {
            ans += a[idxA++];
        } else if (a[idxA] > b[idxB]) {
            ans += b[idxB++];
        } else {
            const [k, aIdx, bIdx] = compare(a, b, idxA, idxB);
            if (k < 0) {
                ans += a.substring(idxA, aIdx);
                idxA = aIdx;
            } else if (k > 0) {
                ans += b.substring(idxB, bIdx);
                idxB = bIdx;
            } else {
                ans += a[idxA++];
            }
        }
    }

    if (idxA < a.length) {
        ans += a.substring(idxA);
    }

    if (idxB < b.length) {
        ans += b.substring(idxB);
    }

    return ans;
}

function compare(a, b, idxA, idxB) {
    const len1 = a.length - idxA;
    const len2 = b.length - idxB;
    const lim = Math.min(len1, len2);

    let k = 0;
    while (k < lim) {
        const c1 = a[idxA++];
        const c2 = b[idxB++];
        if (c1 !== c2) {
            return [c1.charCodeAt(0) - c2.charCodeAt(0), idxA, idxB];
        }
        k++;
    }

    if (len1 > len2) return [-1, idxA, idxB];
    if (len1 < len2) return [1, idxA, idxB];

    return [0, idxA, idxB];
}