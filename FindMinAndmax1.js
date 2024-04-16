//Find the minimum and maximum element in an array
const array= [5, 10, 20, 15,1,35];
function minAndMax(arr)
{
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  console.log(`min value is ${min}`);
  console.log(`max value is ${max}`);
}
minAndMax(array);