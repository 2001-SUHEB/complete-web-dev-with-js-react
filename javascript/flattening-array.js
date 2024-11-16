function flatten(arr) {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flatten(curr) : curr);
  }, []);
}

const array = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = flatten(array);
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]
