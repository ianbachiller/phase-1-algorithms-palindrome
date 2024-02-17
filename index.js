function isPalindrome(word) {
  // Write your algorithm here
  const pal = []; 
  for (let letter = 0; letter < word.length; letter++) {
    pal.unshift(word[letter]);
  }
  const reversedWord = pal.join("");
  return reversedWord === word ? true : false
}
/* 
  Add your pseudocode here

  create an empty array to add each letter from the word as an element

  for letter that is equal to zero; is letter less than the length of the word?; add 1 to the letter value
  add the current letter using bracket notation to the last index of the array
  repeat until letter is no longer less than the length of array

  using join method to join elements of the array pal into a string, store it in the variable reversedWord
  is reversedWord strictly similar to word? if yes, then true. if not, false.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
