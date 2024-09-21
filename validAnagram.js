// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as *cinema*, formed from *iceman*.
function validAnagram(str1, str2) {
  if(str1 !== str2) {
    return false
  }

  return true
}

console.log(validAnagram('', ''))

module.exports = validAnagram;
