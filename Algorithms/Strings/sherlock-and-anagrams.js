/*
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function sherlockAndAnagrams(s) {
    // Write your code here
    let count = 0; // Initialize the count of anagram pairs.
    const anagramDict = {}; // Create a dictionary to store sorted substrings.

    for (let length = 1; length <= s.length; length++) {
        // Iterate through different substring lengths.
        for (let startIndex = 0; startIndex <= s.length - length; startIndex++) {
            // Extract a substring of the given length.
            const substring = s.substr(startIndex, length);

            // Sort the characters in the substring to identify anagrams.
            const sortedSubstring = [...substring].sort().join('');

            if (!anagramDict[sortedSubstring]) {
                anagramDict[sortedSubstring] = 1; // Initialize if not seen before.
            } else {
                count += anagramDict[sortedSubstring]; // Increment count and update the dictionary.
                anagramDict[sortedSubstring]++;
            }
        }
    }
    return count; // Return the total count of anagram pairs.
}