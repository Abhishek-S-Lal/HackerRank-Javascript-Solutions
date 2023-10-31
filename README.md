# HackerRank Javascript Solutions

> The repository contains the solutions to various HackerRank problems solved using javascript programmming language. Each solution includes a reference to the problem statement and is well-documented to explain the logic and approach. 

## Problems I have solved to reach 20K rank from 50K rank👇

## 1. 3D Surface Area


- [View Problem Statement](https://www.hackerrank.com/challenges/3d-surface-area/problem)
- [View Solution](./Algorithms/Implementations/3d-surface-area.js) 

#### Problem Explanation:
The problem is to calculate the surface area of a 3D structure represented by a 2D array A, where each element A[i][j] represents the height of a cell in the structure. Given, the board is divided into cells of size 1 x 1.

#### Solution Approach:
  >  In this problem, we have to first calculate the top and bottom surface area, i.e. 2 x (W x H). We now have to add the area of the end sides and middle sides. We know that the end sides are as follows:
 > - the front end is when i = 0 
 >  - the back end is when row = W - 1
 > - the right end is when j = 0
 > - the left end is when j = H - 1
>
> And the middle sides are as follows:
> - When i > 0 and i < W - 1
> - When j > 0 and j < H - 1
>
> So, to calculate the end side surface area, we traverse each element of the array, and add the height, i.e. A[i][j] to the area variable.
>
> In the above iteration, we also calculate the area of all four middle sides(front, back, right and left). For that, we find the difference in the height of the current cell with the height of the previous/next cell and add it to the area variable. 


#### Sample Input to the function

```
[[1, 3, 4],
[2, 2, 3],
[1, 2, 4]] //2D array A denoting height of each cell.
```

#### Sample Output from the function

```
60 //total visible surface area
```

---

## 2. Climbing the Leaderboard

- [View Problem Statement](https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem)
- [View Solution](./Algorithms/Implementations/climbing-the-leaderboard.js) 

#### Problem Explanation:
  The problem is to find the rank of a new player after their game, given the scores of players on a leaderboard.

#### Solution Approach:
  >  In this problem, we need to first remove the duplicates and sort them in descending order to obtain a unique and ranked leaderboard. Initialize a variable j=uniqueRanked.length - 1, to keep track of our position in the uniqueRanked array. 
  > 
  > For each item in the player's array, we check whether it is greater than the uniqueRanked[j], if yes, we decrement j until we find the right spot.
  >
  > Once we find the right rank, we add 2 to 'j' because the leaderboard is 1-based, and push it to an array.
  > 
  > Finally we return an array containing the ranks for each player in 'playerRanks.'

#### Sample Input to the function

```
[100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120] //ranked, player
//ranked[n] -> the leaderboard scores
//player[m] -> the player's scores
```

#### Sample Output from the function

```
[6, 4, 2, 1] //the player's rank after each new score
```
---

## 3. Extra Long Factorials

- [View Problem Statement](https://www.hackerrank.com/challenges/extra-long-factorials/problem)
- [View Solution](./Algorithms/Implementations/extra-long-factorials.js) 

#### Problem Explanation:
  The problem is to calculate and output the factorial of a large number, typically greater than 20, which may result in very large integers.

#### Solution Approach:
  >  In this problem, we begin with the result set to 1. Then, we iterate through a loop, starting from 1 and continuing up to the given number. During each iteration, we multiply the current result by the value of the iterator. This gradually builds up the factorial value.
  >
  > To handle large integers effectively, we can use a library like BigInt. BigInt allows us to work with arbitrarily large integers, ensuring that we can accurately compute the factorial for numbers that exceed the typical integer range.
  > 
  > Once the loop completes, we return the final result as the computed factorial value for the given input number.

#### Sample Input to the function

```
20 //n -> an integer
```

#### Sample Output from the function

```
2432902008176640000 //factorial of 20
```
---

## 4. Absolute Permutation

- [View Problem Statement](https://www.hackerrank.com/challenges/absolute-permutation/problem)
- [View Solution](./Algorithms/Implementations/absolute-permutation.js) 

#### Problem Explanation:
  The problem is to find a permutation of the first n natural numbers such that the absolute difference between each number and its index is equal to k.

#### Solution Approach:
  >  In this problem, we have to first check if k=0, then we can return the original array of first n numbers. 
  > 
  > Since, we want the difference between each number and its position in the list to be exactly 'k, we need to move each number either 'k' positions to the left or 'k' positions to the right. 
  > 
  > So, we need to check if it is divisible by 2*k because if 'n' is not divisible by 2 times 'k', it means there aren't enough numbers to create this special pattern, then we can return [-1]
  >
  > If it's possible, we create a new list where each number is either moved 'k' positions to the left or 'k' positions to the right, so that the difference between each number and its position in the new list is exactly 'k.'Then, we return this new list as the answer.

#### Sample Input to the function

```
2, 1  //n, k
//n -> the upper bound of natural numbers to consider
//k ->  the absolute difference between each element's value and its index
```

#### Sample Output from the function

```
[1, 2] //the array containing lexicographically smallest permutation
```

---

## 5. Larry's Array

- [View Problem Statement](https://www.hackerrank.com/challenges/larrys-array/problem)
- [View Solution](./Algorithms/Implementations/larrys-array.js) 

#### Problem Explanation:
  This problem is about sorting an array using a specific operation. The task is to determine whether it's possible to sort the array by performing a rotation operation on triplets of adjacent elements. 

#### Solution Approach:
  >  In this problem, the code starts by calculating the inversion count, which is the number of pairs of elements that are out of order in the array. It uses Array.reduce() and a while loop to compare each element with the elements to its right. If a smaller element is found to the right of a larger one, an inversion is counted.
  >
  > After calculating the inversion count, the code checks whether this count is even or odd. If the inversion count is even, it returns "YES". If the inversion count is odd, it returns "NO".
  >
  > When we have an even inversion count, it means that there is an even number of pairs of elements where the smaller element comes after the larger one in the array. We can use left rotations to gradually fix these inversions, which is not possible for an odd inversion count.

#### Sample Input to the function

```
[3, 1, 2] //INTEGER_ARRAY A
```

#### Sample Output from the function

```
YES
```

---
## 6. The Time in Words

- [View Problem Statement](https://www.hackerrank.com/challenges/the-time-in-words/problem)
- [View Solution](./Algorithms/Implementations/the-time-in-words.js) 

#### Problem Explanation:
  The problem is to convert a given time in hours and minutes into words, specifically describing the time using phrases like "quarter past," "half past," "quarter to," and individual minute and hour words.

#### Solution Approach:
  >  The code starts by defining an array named numbers, which holds words for numbers from zero to twenty-nine.
  >
  > Next, it checks if the given time's minute is equal to zero. In this case, it returns the hour followed by "o'clock."
  >
  > For other times, it constructs the result by considering three possibilities: "half," "quarter," or the number of minutes. It calculates the number of minutes and appends "minute" or "minutes" accordingly. 
  > 
  > It also determines whether the time is "past" or "to" the next hour and adjusts the hour accordingly and returns the result.


#### Sample Input to the function

```
7, 15 //h,m
//h -> the hour of the day
//m ->  the minutes after the hour
```

#### Sample Output from the function

```
quarter past seven //time string as described
```

---
## 7. Forming a Magic Square

- [View Problem Statement](https://www.hackerrank.com/challenges/magic-square-forming/problem)
- [View Solution](./Algorithms/Implementations/magic-square-forming.js) 

#### Problem Explanation:
  The problem is to find the minimum cost required to convert a given 3 x 3 matrix into a magic square.

#### Solution Approach:
  >  In this problem, we need to first set up an array of all the 8 possible 3 x 3 magic squares. Then we need to find the cost of conversion of the given matrix to magic square by performing cost += s[i][j] - magicSquare[i][j]. For each of the 8 iterations of the magic squares, save the minimum cost in a variable and return it

#### Sample Input to the function

```
[[4, 8, 2],
[4, 5, 7],
[6, 1, 6]] //2D array 3 x 3 matrix.
```

#### Sample Output from the function

```
4 //minimum cost
```

---
## 8. Lily's Homework

- [View Problem Statement](https://www.hackerrank.com/challenges/lilys-homework/problem)
- [View Solution](./Algorithms/Sorting/lilys-homework.js) 

#### Problem Explanation:
  In Lily's homework problem, the goal is to make an array of distinct integers beautiful by swapping its elements any number of times. An array is considered beautiful when the sum of absolute differences between adjacent elements is minimized. The task is to calculate and return the minimum number of swaps required to achieve this beautiful arrangement.

#### Solution Approach:
  >  In this problem, we first employs a helper function called minimumSwaps, which sorts a copy of the original array, keeps track of the indices of each element in the sorted array, and iterates through the original array to count swaps required to move elements to their correct positions.
  >
  > First, the function calculates the minimum swaps needed to sort the array in ascending order. Then, it creates a reversed the input array and computes the minimum swaps to sort it in descending order. Then the function will return the smaller value by comparing the minimum swaps for both ascending and descending order.

#### Sample Input to the function

```
[[1, 3, 4],
[2, 2, 3],
[1, 2, 4]] //2D array A denoting height of each cell.
```

#### Sample Output from the function

```
60 //total visible surface area
```

---
## 9. Bigger is Greater

- [View Problem Statement](https://www.hackerrank.com/challenges/bigger-is-greater/problem)
- [View Solution](./Algorithms/Implementations/bigger-is-greater.js) 

#### Problem Explanation:
  The problem is about finding the lexicographically smallest string that is greater than the given string.

#### Solution Approach:
  > It starts by converting the input string into an array of individual characters
  >
  > We need to identify the rightmost character that is not in increasing order from right to left. This character, tracked using the index i, is the first one that can be modified to create a lexicographically greater string. 
  >
  >If no such character is found, it means the input string is already the largest possible, and the function returns 'no answer'.
  >
  > Once the character at index i is found, the function then searches for the smallest character to the right of it that is larger than the character at position i - 1, marked by the index j. 
  >
  >By swapping these characters and reversing the substring to the right of position i - 1, the function constructs the lexicographically smallest greater string possible. It then returns this modified string as the result.

#### Sample Input to the function

```
hefg //w -> a word
```

#### Sample Output from the function

```
hegf //the smallest lexicographically higher string possible
```

---
## 10. Common Child

- [View Problem Statement](https://www.hackerrank.com/challenges/common-child/problem)
- [View Solution](./Algorithms/Strings/common-child.js) 

#### Problem Explanation:
  The problem is to find the length of the longest common subsequence between two strings.

#### Solution Approach:
  > We, first creates a two-dimensional array called dp to store the length of the common child. The dimensions of this array are (n+1) x (m+1), where n and m represent the lengths of the input strings s1 and s2. 
  >
  > Then we use nested loops to iterate through both input strings. During each iteration, the function compares the characters at the current positions of the strings. 
  >
  > If a match is found, it increments the value in the dp array at the corresponding position by one, effectively extending the length of the common subsequence. 
  >
  > If the characters don't match, the function selects the maximum value from either the previous row or the previous column in the dp array. 
  >
  > Ultimately, the length of the longest common subsequence is identified in the cell dp[n][m] of the array, and this value is returned as the result of the function.

#### Sample Input to the function

```
HARRY, SALLY //s1, s2
```

#### Sample Output from the function

```
2 // length of the longest string which is a common child of the input strings
```

---

## 11. Fraudulent Activity Notifications

- [View Problem Statement](https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem)
- [View Solution](./Algorithms/Sorting/fraudulent-activity-notifications.js) 

---
## 12. Sherlock and Anagrams

- [View Problem Statement](https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem)
- [View Solution](./Algorithms/Strings/sherlock-and-anagrams.js) 

---
## 13. Bear and Steady Gene

- [View Problem Statement](https://www.hackerrank.com/challenges/bear-and-steady-gene/problem)
- [View Solution](./Algorithms/Strings/bear-and-steady-gene.js) 

---
## 14. Morgan and a String

- [View Problem Statement](https://www.hackerrank.com/challenges/morgan-and-a-string/problem)
- [View Solution](./Algorithms/Strings/morgan-and-a-string.js) 

---
## 15. Almost Sorted

- [View Problem Statement](https://www.hackerrank.com/challenges/almost-sorted/problem)
- [View Solution](./Algorithms/Implementations/almost-sorted.js) 

---
## 16. Matrix Layer Rotation

- [View Problem Statement](https://www.hackerrank.com/challenges/matrix-rotation-algo/problem)
- [View Solution](./Algorithms/Implementations/matrix-rotation-algo.js) 

---
## 17. Encryption

- [View Problem Statement](https://www.hackerrank.com/challenges/encryption/problem)
- [View Solution](./Algorithms/Implementations/encryption.js) 

---
## 18. The Grid Search

- [View Problem Statement](https://www.hackerrank.com/challenges/the-grid-search/problem)
- [View Solution](./Algorithms/Implementations/the-grid-search.js) 

---
## Problems I have solved to reach 10K rank from 20K rank👇

## 1. Minimum absolute difference in an array

- [View Problem Statement](https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem)
- [View Solution](./Algorithms/Greedy/minimum-absolute-difference-in-an-array.js) 

#### Problem Explanation:
  The problem is to find the smallest absolute difference between any two distinct elements in an array.

#### Solution Approach:
  >  In this problem, we need to first sort the array to find the minimum differnce between adjacent elements. We initialize a variable min to store the minimum value. 
  >
  Then, we iterate through the sorted array, starting from the second element (index 1), and for each pair of adjacent elements, we calculate the absolute difference using Math.abs with the previous element. If this calculated difference is smaller than the current min, we update min with the new value. 
  >
  > Finally, we return the value of min as the result.

#### Sample Input to the function

```
[3, -7, 0] //arr
```

#### Sample Output from the function

```
3 //the minimum absolute difference found
```

---
## 2. Marc's Cakewalk

- [View Problem Statement](https://www.hackerrank.com/challenges/marcs-cakewalk/problem)
- [View Solution](./Algorithms/Greedy/marcs-cakewalk.js) 

#### Problem Explanation:
  The problem is to optimize the order in which Marc consumes cupcakes and determine the minimum number of miles Marc must walk while consuming cupcakes with calorie values from an array. The condition is that if Marks eat j cupcakes, he has to walk 2^j * c miles.

#### Solution Approach:
  >  In this problem, first we need to sort the calorie array in descending order so that Mark consumes the highest calorie cupcakes first. Then a variable is initialized to keep track of the minCalorie.
  >
  > Now the array is iterated and for each cupcake, it calculates the calories consumed by given equation and add it to the minCalorie variable.
  >
  > Finally, we return the value of minCalorie as the result.

#### Sample Input to the function

```
[5, 10, 7] //calorie[n]
```

#### Sample Output from the function

```
44 //the minimum miles necessary
```

---
## 3. Grid Challenge

- [View Problem Statement](https://www.hackerrank.com/challenges/grid-challenge/problem)
- [View Solution](./Algorithms/Greedy/grid-challenge.js) 

#### Problem Explanation:
  In this problem we want to check if it's possible to sort rows of a grid in non-decreasing order, with the condition that columns can be rearranged to achieve this, by swapping elements within each column.

#### Solution Approach:
  >  The solution begins by sorting each row of the grid in lexicographically increasing order, which ensures that the elements within each row are in non-decreasing order. 
  >
  >Then, it checks if each column is in lexicographically increasing order by iterating through the columns and rows, comparing the current element with the one above it. 
  >
  >If any column violates the non-decreasing order condition, the function returns "NO" 
  >
  >If all columns satisfy the condition, the function returns "YES"

#### Sample Input to the function

```
['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'] //grid[n]
```

#### Sample Output from the function

```
YES
```

---
## 4. Luck Balance

- [View Problem Statement](https://www.hackerrank.com/challenges/luck-balance/problem)
- [View Solution](./Algorithms/Greedy/luck-balance.js) 

#### Problem Explanation:
The task in the Luck Balance problem is to maximize the luck balance by strategically selecting and losing luck through contests. Each contest has an associated luck value, and the player can choose to participate in contests with a positive luck value or lose luck by skipping them. However, there's a constraint on the number of important contests that can be won. The goal is to find the optimal combination of contests to maximize the luck balance while staying within the limit of important contests won.

#### Solution Approach:
  >  First, we separate important and unimportant contests while summing up the total luck. Then we sorts the important contests in ascending order. >
  >
  > Then, we calculates the maximum number of important contests that can be lost without exceeding the allowed number k. 
  >
  > We, then use a for loop to iteratively deduct twice the luck from the sorted important contests up to this maximum loss, effectively reducing the total luck. 
  >
  >Finally, it returns the updated total luck 

#### Sample Input to the function

```
3, [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]] //k, contests

//k ->  the number of important contests Lena can lose

//contests -> a 2D array of integers where each contests[i] contains two integers that represent the luck balance and importance of the i'th contest
```

#### Sample Output from the function

```
29 //the maximum luck balance achievable
```

---
## 5. Maximum Perimeter Triangle

- [View Problem Statement](https://www.hackerrank.com/challenges/maximum-perimeter-triangle/problem)
- [View Solution](./Algorithms/Greedy/maximum-perimeter-triangle.js) 

#### Problem Explanation:
In this problem,  an array of stick lengths is given, and the task is to find and print the lengths of the longest possible side, second-longest possible side, and shortest possible side of a non-degenerate (possible) triangle. If no valid triangle can be built, print -1.

#### Solution Approach:
  >  We first sorts the sticks in non-decreasing order. Then, we iterates through the sorted sticks, checking if three consecutive sticks can form a valid triangle (satisfying the triangle inequality). 
  >
  > If a valid triangle is found with a greater perimeter than the current maximum, it updates the maximum perimeter and stores the triangle's sides.
  >
  > If no valid triangle is found, it returns [-1] to indicate that it's impossible to form a triangle with the given sticks.

#### Sample Input to the function

```
[1, 1, 1, 3, 3] //sticks[n]
```

#### Sample Output from the function

```
[1, 3, 3] // the side lengths of the chosen triangle in non-decreasing order or -1
```

---
## 6. Candies

- [View Problem Statement](https://www.hackerrank.com/challenges/candies/problem)
- [View Solution](./Algorithms/Greedy/candies.js) 

---
## 7. Beautiful Pairs

- [View Problem Statement](https://www.hackerrank.com/challenges/beautiful-pairs/problem)
- [View Solution](./Algorithms/Greedy/beautiful-pairs.js) 

---
## 8. Sherlock and The Beast

- [View Problem Statement](https://www.hackerrank.com/challenges/sherlock-and-the-beast/problem)
- [View Solution](./Algorithms/Greedy/sherlock-and-the-beast.js) 

---
## 9. Priyanka and Toys

- [View Problem Statement](https://hackerrank.com/challenges/priyanka-and-toys/problem)
- [View Solution](./Algorithms/Greedy/priyanka-and-toys.js) 

---
## 10. Largest Permutation

- [View Problem Statement](https://www.hackerrank.com/challenges/largest-permutation/problem)
- [View Solution](./Algorithms/Greedy/largest-permutation.js) 

---
## 11. Mark and Toys

- [View Problem Statement](https://www.hackerrank.com/challenges/mark-and-toys/problem)
- [View Solution](./Algorithms/Greedy/mark-and-toys.js) 

---
## 12.Greedy Florist

- [View Problem Statement](https://www.hackerrank.com/challenges/greedy-florist/problem)
- [View Solution](./Algorithms/Greedy/greedy-florist.js) 

---
## 13. Max Min

- [View Problem Statement](https://www.hackerrank.com/challenges/angry-children/problem)
- [View Solution](./Algorithms/Greedy/angry-children.js) 

---
## 14. Jim and the Orders

- [View Problem Statement](https://www.hackerrank.com/challenges/jim-and-the-orders/problem)
- [View Solution](./Algorithms/Greedy/jim-and-the-orders.js) 

---
## 15. Permuting Two Arrays

- [View Problem Statement](https://www.hackerrank.com/challenges/two-arrays/problem)
- [View Solution](./Algorithms/Greedy/two-arrays.js) 

---
## 16. Game of Stones

- [View Problem Statement](https://www.hackerrank.com/challenges/game-of-stones-1/problem)
- [View Solution](./Algorithms/Game%20Theory/game-of-stones-1.js) 

---
## 17. Tower Breakers

- [View Problem Statement](https://www.hackerrank.com/challenges/tower-breakers-1/problem)
- [View Solution](./Algorithms/Game%20Theory/tower-breakers-1.js) 

---
## 18. A Chessboard Game

- [View Problem Statement](https://www.hackerrank.com/challenges/a-chessboard-game-1/problem)
- [View Solution](./Algorithms/Game%20Theory/a-chessboard-game-1.js) 

---
## 19. Introduction to Nim Game

- [View Problem Statement](https://www.hackerrank.com/challenges/nim-game-1/problem)
- [View Solution](./Algorithms/Game%20Theory/nim-game-1.js) 

---
## 20. Misère Nim

- [View Problem Statement](https://www.hackerrank.com/challenges/misere-nim-1/problem)
- [View Solution](./Algorithms/Game%20Theory/misere-nim-1.js) 

---
## 21. Nimble Game

- [View Problem Statement](https://www.hackerrank.com/challenges/nimble-game-1/problem)
- [View Solution](./Algorithms/Game%20Theory/nimble-game-1.js) 

---
## 22. Alice and Bob's Silly Game

- [View Problem Statement](https://www.hackerrank.com/challenges/alice-and-bobs-silly-game/problem)
- [View Solution](./Algorithms/Game%20Theory/alice-and-bobs-silly-game.js) 

---
## 23. Poker Nim

- [View Problem Statement](https://www.hackerrank.com/challenges/poker-nim-1/problem)
- [View Solution](./Algorithms/Game%20Theory/poker-nim-1.js) 

---
## 24. A stones game

- [View Problem Statement](https://www.hackerrank.com/challenges/half/problem)
- [View Solution](./Algorithms/Game%20Theory/half.js) 

---
## 25. Lonely Integer

- [View Problem Statement](https://www.hackerrank.com/challenges/lonely-integer/problem)
- [View Solution](./Algorithms/Bit%20Manipulation/lonely-integer.js) 

---
## 26. Maximizing XOR

- [View Problem Statement](https://www.hackerrank.com/challenges/maximizing-xor/problem)
- [View Solution](./Algorithms/Bit%20Manipulation/maximizing-xor.js) 

---
## 27. Sum vs XOR

- [View Problem Statement](https://www.hackerrank.com/challenges/sum-vs-xor/problem)
- [View Solution](./Algorithms/Bit%20Manipulation/sum-vs-xor.js) 

---
## 28. Flipping bits

- [View Problem Statement](https://www.hackerrank.com/challenges/flipping-bits/problem)
- [View Solution](./Algorithms/Bit%20Manipulation/flipping-bits.js) 

---
## 29. Non-Divisible Subset

- [View Problem Statement](https://www.hackerrank.com/challenges/non-divisible-subset/problem)
- [View Solution](./Algorithms/Implementations/non-divisible-subset.js) 

---
## 30. Organizing Containers of Balls

- [View Problem Statement](https://www.hackerrank.com/challenges/organizing-containers-of-balls/problem)
- [View Solution](./Algorithms/Implementations/organizing-containers-of-balls.js) 

---

