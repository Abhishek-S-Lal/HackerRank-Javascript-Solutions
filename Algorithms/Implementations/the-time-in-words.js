/*
 * Complete the 'timeInWords' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER h
 *  2. INTEGER m
 */

function timeInWords(h, m) {
    // Write your code here
    let numbers = [
    'zero',
    'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eightteen', 'nineteen', 'twenty',
    'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five',
    'twenty six', 'twenty seven', 'twenty eight', 'twenty nine'
  ]

  if (m === 0) {
    return numbers[h] + " o' clock"
  }

  let result = ''

  if (m % 30 === 0) {
    result += 'half'
  } else if (m % 15 === 0) {
    result += 'quarter'
  } else {
    let minutes = m < 30 ? numbers[m] : numbers[60 - m]
    result += minutes

    result += m % 15 === 1 ? ' minute' : ' minutes'
  }

  if (m < 31) {
    result += ' past '
  } else {
    result += ' to '
    h++
  }

  result += numbers[h]

  return result
}
