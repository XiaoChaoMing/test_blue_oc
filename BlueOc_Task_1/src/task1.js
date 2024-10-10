const Case = [
  ["a", "ab", "abc", "cd", "def", "gh"],
  ["one", "two", "three", "four", "five", "six", "seven"],
  [],
  ["a"],
  [""],
];
const inputArr = ["a", "ab", "abc", "cd", "def", "gh"];

function frequentStrLen(strArr) {
  const strLengthArr = inputArr.map((str) => str.length);
  const count = strLengthArr.reduce((acc, str) => {
    acc[str] = (acc[str] || 0) + 1;
    return acc;
  }, {});

  let max = 0;
  let keyMax;
  for (const key in count) {
    if (count[key] > max) {
      max = count[key];
      keyMax = key;
    }
  }
  const result = strArr.filter((str) => {
    return str.length === parseInt(keyMax);
  });
  console.log(result);
  return result;
}

frequentStrLen(inputArr);
