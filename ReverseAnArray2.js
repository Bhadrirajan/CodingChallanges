//Write a program to reverse the array
const array= [5, 10, 20, 15,1,35];
function reverseArray(arr)
{
  const reversedArray =[];
  for(i=arr.length-1; i>=0; i--)
  {
    reversedArray.push(arr[i]);
  }
  console.log(reversedArray);
}
reverseArray(array)