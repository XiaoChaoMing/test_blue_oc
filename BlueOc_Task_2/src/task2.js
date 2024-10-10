const inputArr = [
  [1, 4, 2, 3, 5],
  [],
  [2],
  [-1, 2, 3, -4, 5],
  [2, 2, 3],
  [2, 3, 3],
];

function sumOfLargestNum(arrNum) {
  const sortNum = arrNum.sort((a, b) => {
    return b - a;
  });
  const result = (sortNum[0] || 0) + (sortNum[1] || 0);
  console.log(result);
  return result;
}

sumOfLargestNum(inputArr);
