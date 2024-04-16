//Write a program to sort the given array
const array= [5, 10, 20, 15,1,35];
function sortArray(arr)
{
  const sortedArray = arr.sort((a,b)=> a-b);
  console.log(sortedArray)
}
sortArray(array)