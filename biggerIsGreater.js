/*
 Lexicographical order is often known as alphabetical order when dealing with strings. A string is greater than another string if it comes later in a lexicographically sorted list. [Kuya]

Given a word, create a new word by swapping some or all of its characters. This new word must meet two criteria:

It must be greater than the original word
It must be the smallest word that meets the first condition
Example:
- abcd

The next largest word is abdc.

Complete the function biggerIsGreater below to create and return the new string meeting the criteria. If it is not possible, return no answer.
*/


function biggerIsGreater(word) {
    let arr = word.split('');
    let n = arr.length;

    let i;
    for (i = n - 2; i >= 0; i--) {
        if (arr[i] < arr[i + 1]) {
            break;
        }
    }

    if (i === -1) {
        return 'no answer';
    }

    let j;
    for (j = n - 1; j > i; j--) {
        if (arr[j] > arr[i]) {
            break;
        }
    }

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    for (let left = i + 1, right = n - 1; left < right; left++, right--) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }

    return arr.join('');
}

console.log(biggerIsGreater("dhck"))
