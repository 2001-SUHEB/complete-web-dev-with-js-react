// file2.js

const items = [1, 2, 3];
items.push(4);
// eslint-disable-next-line no-unused-vars
const obj = { key1: "value1", key2: "value2", key3: "value3"};

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

const add = (a, b) => {
  return a+b;
};

console.log(add(3,5));
