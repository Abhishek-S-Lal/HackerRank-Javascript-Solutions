/*
 * Complete the 'steadyGene' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING gene as parameter.
 */

function isSteady(charCount, targetCount) {
    for (let char in charCount) {
        if (charCount[char] > targetCount) {
            return false;
        }
    }
    return true;
}

function steadyGene(gene) {
    // Write your code here
    const n = gene.length;
    const targetCount = n / 4;
    const charCount = { 'A': 0, 'C': 0, 'G': 0, 'T': 0 };

    // Calculate the frequency of each character in the gene
    for (let char of gene) {
        charCount[char]++;
    }

    // Initialize two pointers for the sliding window
    let left = 0;
    let right = 0;
    let minLen = n; // Initialize the minimum length with the maximum possible value

    // While the right pointer is less than the gene length
    while (right < n) {
        // Move the right pointer to the right
        charCount[gene[right]]--;

        // Check if the current window contains enough excess characters to be replaced
        while (isSteady(charCount, targetCount) && left < n) {
            // Update the minimum length
            minLen = Math.min(minLen, right - left + 1);

            // Move the left pointer to the right
            charCount[gene[left]]++;
            left++;
        }

        // Move the right pointer to the right
        right++;
    }

    return minLen;
}