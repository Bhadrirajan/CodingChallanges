//Find the minimum and maximum element in an array
const array= [5, 10, 20, 15,1,35];
function minAndMax(arr)
{
  const sortedArray = arr.sort((a,b)=>console.log(`${a} and ${b}`));
  console.log(sortedArray)
  
  const min = sortedArray[0];
  const max = sortedArray[sortedArray.length -1];
  console.log(`min value is ${min}`);
  console.log(`max value is ${max}`);
}
minAndMax(array)