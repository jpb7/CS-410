let result = [];

const insertItem = (item) => {
  // insert item into result
  result.push(item);
  return item;
};

const deleteItem = (item) => {
  // remove the first occurrence of item in result
  for (let i = 0; i < result.length; ++i) {
    if (result[i] == item) {
      result.splice(i, 1);
      return item;
    }
  }
  return null;
};

const lookupItem = (index) => {
  // return the item from result at index, deleting the obtained item
  var item = result[index];
  if (item != null) {
    result.splice(index, 1);
    return item;
  }
  return null;
};

const printItems = () => {
  // return a string of the concatenated item in result, separated by commas
  let out = "";
  for (var item of result) {
    out += item + ", ";
  }
  console.log(out.slice(0, out.length - 2));
};

insertItem(1);
insertItem(2);
insertItem(3);
insertItem(2);
insertItem(1);
console.log(printItems());
// expected: '1, 2, 3, 2, 1'
console.log(lookupItem(1));
// expected: 2
console.log(printItems());
// expected: '1, 3, 2, 1'

deleteItem(1);
console.log(printItems());
// expected: '3, 2, 1'
console.log(lookupItem(2));
// expected: 1
console.log(printItems());
// expected: '3, 2'

deleteItem(-1);
console.log(lookupItem(-1));
// expected: null
