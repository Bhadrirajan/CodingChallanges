//Write a program to sort the given array
const array= [5, 10, 20, 15,1,35];
function sortArray(arr)
{
let temp =0;
 for(let i=0; i<arr.length; i++)
 {
   for(let j=0; j<(arr.length); j++)
   {
     if(arr[j] > arr[j+1])
   {
     temp =arr[j];
     arr[j] = arr[j+1];
     arr[j+1] = temp
   }
   }
 }
 console.log(arr)
}
sortArray(array)