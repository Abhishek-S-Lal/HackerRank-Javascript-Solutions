# HackerRank Javascript Solutions

> The repository contains the solutions to various HackerRank problems solved using javascript programmming language. Each solution includes a reference to the problem statement and is well-documented to explain the logic and approach. Below you can find the documentation of 10 different problems.



## 1. 3D Surface Area


- [View Problem Statement](https://www.hackerrank.com/challenges/3d-surface-area/problem?isFullScreen=false)
- [View Solution](./Algorithms/Implementations/3d-surface-area.js) 

#### Problem Explanation:
The problem is to calculate the surface area of a 3D structure represented by a 2D array A, where each element A[i][j] represents the height of a cell in the structure.

#### Solution Approach:
  >  In this problem, we have to first calculate the top and bottom surface area, i.e 2 x (W x H). We now have to add the area of the end sides and middle sides. We know that end sides are as follows:
 > - the front end is when i = 0 
 >  - the back end is when row = W - 1
 > - the right end is when j = 0
 > - the left end is when j = H - 1
>
> And the middle sides are as follows:
> - When i > 0 and i < W - 1
> - When j > 0 and j < H - 1
>
> So, to calculate the end side surface area, we traverse each element of the array, and add the height, i.e A[i][j] to the area variable.
>
> In the above iteration, we also calculate the area of the all four middle sides(front, back, right and left). For that,we find the differnce in height of the current cell with the height of the previous/next cell and adds it to the area variable. 


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

## 2. Absolute Permutation

- [View Problem Statement](https://www.hackerrank.com/challenges/absolute-permutation/problem?isFullScreen=false)
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
## 3. Climbing the Leaderboard

- [View Problem Statement](https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem)
- [View Solution](./Algorithms/Implementations/climbing-the-leaderboard.js) 

#### Problem Explanation:
  The problem is to find the rank of a new player after their game, given the scores of players on a leaderboard.

#### Solution Approach:
  >  In this problem, we need to first remove the duplicates and sort it in descending order to obtain unique and ranked leaderboard.Initialize a variable j=uniqueRanked.length - 1, to keep track of our position in the uniqueRanked array. 
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
## 4. Extra Long Factorials

- [View Problem Statement](https://www.hackerrank.com/challenges/extra-long-factorials/problem?isFullScreen=false)
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
## 5. Larry's Array

- [View Problem Statement](https://www.hackerrank.com/challenges/larrys-array/problem?isFullScreen=false)
- [View Solution](./Algorithms/Implementations/larrys-array.js) 

#### Problem Explanation:
  This problem is about sorting an array using a specific operation. The task is to determine whether it's possible to sort the array by performing a rotation operation on triplets of adjacent elements. 

#### Solution Approach:
  >  In this problem, the code starts by calculating the inversion count, which is the number of pairs of elements that are out of order in the array. It uses Array.reduce() and a while loop to compare each element with the elements to its right. If a smaller element is found to the right of a larger one, an inversion is counted.
  >
  > After calculating the inversion count, the code checks whether this count is even or odd. If the inversion count is even, it returns "YES". If the inversion count is odd, it returns "NO".
  >
  > When we have an even inversion count, it means that there is an even number of pairs of elements where the smaller element comes after the larger one in the array. We can use left rotations to gradually fix these inversions, which is not possible for odd inversion count.

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

- [View Problem Statement](https://www.hackerrank.com/challenges/the-time-in-words/problem?isFullScreen=false)
- [View Solution](./Algorithms/Implementations/the-time-in-words.js) 

#### Problem Explanation:
  The problem is to convert a given time in hours and minutes into words, specifically describing the time using phrases like "quarter past," "half past," "quarter to," and individual minute and hour words.

#### Solution Approach:
  >  The code starts by defining an array named numbers, which holds words for numbers from zero to twenty-nine.
  >
  > Next, it checks if the given time's minute is equal to zero. In this case, it returns the hour followed by "o' clock."
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
## 8.Lily's Homework

- [View Problem Statement](https://www.hackerrank.com/challenges/lilys-homework/problem?isFullScreen=false)
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
