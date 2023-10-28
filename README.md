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
## 6. Problem B

- [View Problem Statement](https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true)
- [View Solution](./solution.py) 

#### Problem Explanation:
  In this problem, I created a program that takes input for the number of grades to be entered, and then prompts the user to enter each grade. 

#### Solution Approach:
  >  In this problem, I created a program that takes input for the number of grades to be entered, and then prompts the user to enter each grade. 

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
## 7. Problem C

- [View Problem Statement](https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true)
- [View Solution](./solution.py) 

#### Problem Explanation:
  In this problem, I created a program that takes input for the number of grades to be entered, and then prompts the user to enter each grade. 

#### Solution Approach:
  >  In this problem, I created a program that takes input for the number of grades to be entered, and then prompts the user to enter each grade. 

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
## 8. Problem D

- [View Problem Statement](https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true)
- [View Solution](./solution.py) 

#### Problem Explanation:
  In this problem, I created a program that takes input for the number of grades to be entered, and then prompts the user to enter each grade. 

#### Solution Approach:
  >  In this problem, I created a program that takes input for the number of grades to be entered, and then prompts the user to enter each grade. 

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
## 9. Problem E

- [View Problem Statement](https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true)
- [View Solution](./solution.py) 

#### Problem Explanation:
  In this problem, I created a program that takes input for the number of grades to be entered, and then prompts the user to enter each grade. 

#### Solution Approach:
  >  In this problem, I created a program that takes input for the number of grades to be entered, and then prompts the user to enter each grade. 

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
## 10. Problem F

- [View Problem Statement](https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true)
- [View Solution](./solution.py) 

#### Problem Explanation:
  In this problem, I created a program that takes input for the number of grades to be entered, and then prompts the user to enter each grade. 

#### Solution Approach:
  >  In this problem, I created a program that takes input for the number of grades to be entered, and then prompts the user to enter each grade. 

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
