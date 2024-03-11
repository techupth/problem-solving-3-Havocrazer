// Exercise 2: Single Number

const singleNumber = function (nums) {
  let uniqueNumber = null;
  for (let i = 0; i < nums.length; i++) {
    let isUnique = true;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      uniqueNumber = nums[i];
      break;
    }
  }
  return uniqueNumber;
};

const result1 = singleNumber([2, 2, 1]);
const result2 = singleNumber([4, 1, 2, 1, 2]);
const result3 = singleNumber([1]);
const result4 = singleNumber([4, 1, 2, 1, 2, 4, 5, 6, 7, 5, 6, 7, 3, 3, 8]);

console.log(result1); // 1
console.log(result2); // 4
console.log(result3); // 1
console.log(result4); // 8
