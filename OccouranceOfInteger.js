//Find the occurrence of an integer in the array
const nums = [5, 10, 20, 15, 1, 35, 1, 5, 9, 7, 20, 3, 5];
function occouranceOfInteger(arr) {
  let occ = arr.reduce(
    (acc, curr) => ((acc[curr] = ++acc[curr] || 1), acc),
    {},
  );
  
  console.log(occ);
}
occouranceOfInteger(nums);