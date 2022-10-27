// Please do not change the name of this function
const findMostRepeated = (arr) => {
  let max = 0;
  let maxKey = "";
  let arrOfMax = [];
  if (!arr.length) {
    return { elements: [], repeats: null };
  }
  let count = {};

  for (const element of arr) {
    if (!count[element]) {
      count[element] = 1;
    } else count[element] += 1;
  }
  for (let word in count) {
    if (count[word] > max) {
      max = count[word];
      maxKey = word;
    } else if (count[word] === max) {
      arrOfMax.push(maxKey);
      arrOfMax.push(word);
    }
  }
  if (arrOfMax.length > 0) {
    return { elements: arrOfMax, repeats: max };
  } else return { elements: [maxKey], repeats: max };
};

module.exports = { findMostRepeated };
