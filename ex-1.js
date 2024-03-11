// Exercise 1: Length of Last Word

const lengthOfLastWord = function (s) {
  const splitWords = s.split(" ");
  const newSplitWords = [];
  for (let i = 0; i < splitWords.length; i++) {
    if (splitWords[i] !== "") {
      newSplitWords.push(splitWords[i]);
    }
  }
  let lastWord = newSplitWords[newSplitWords.length - 1];
  return lastWord.length;
};

const result1 = lengthOfLastWord("Hello World");
const result2 = lengthOfLastWord("   fly me   to   the moon  ");
const result3 = lengthOfLastWord("luffy is still joyboy");

console.log(result1); // 5
console.log(result2); // 4
console.log(result3); // 6
