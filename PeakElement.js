//Find a peak element which is not smaller than its neighbors
const array= [5, 10, 20, 15];
function findPeak(arr)
{
  for(let i=0; i<arr.length; i++)
  {
    if(i != 0 || i != arr.length -1)
    {
      arr[i] > arr[i -1] && arr[i] > arr[i +1] ? console.log(arr[i]) : null
    }
  }
}
findPeak(array)