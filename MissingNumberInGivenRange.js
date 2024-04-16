//Write a code for finding the missing number with the given range
const array = [1,2,3,4,5,6,7,8,10]
const findMissingNumber = (array) =>
{
  let range = Math.max(...array);
  let sumOfRange = (range * (range +1))/2;
  let sum =0;
  
  for(let i=0; i<array.length;i++)
  {
    sum = sum + array[i];
  }
  const missingNumber = sumOfRange - sum;
  console.log(missingNumber)
  
}
findMissingNumber(array)