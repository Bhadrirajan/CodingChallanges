const arr = [5, 10, -1,-2,4,9,-7,2];
 function moveNegative (arr)
 {
  for(let i=0; i< arr.length; i++)
  {
    for(let j=i+1; j<arr.length; j++)
    {
      if(arr[i] > arr[j])
     {
       [arr[i],arr[j]] = [arr[j],arr[i]]
     }
    }
  }
  console.log(arr)
 }
 moveNegative(arr)