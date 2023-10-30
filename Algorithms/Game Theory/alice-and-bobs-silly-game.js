/*
 * Complete the 'sillyGame' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER n as parameter.
 */

function sillyGame(n) {
    // Write your code here
    // Create an array to track prime numbers using the Sieve of Eratosthenes algorithm.
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // Count the number of prime numbers up to n.
    let primeCount = isPrime.filter(isPrime => isPrime).length;

    // If the count is even, Bob wins; if it's odd, Alice wins.
    if (primeCount % 2 === 0) {
        return "Bob";
    } else {
        return "Alice";
    }
}
