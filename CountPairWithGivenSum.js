//Count pairs with given sum
const array = [1, 5, 7, -1, 5]
let k = 6
let c =0;
const countPair =(arr, k)=>{
for(let i=0; i<arr.length; i++)
{
  for(let j=i+1; j<arr.length; j++)
  {
    if(arr[i] + arr[j] === k)
    {
      c++
    }
  }
}
console.log(c)
}
countPair(array, k)