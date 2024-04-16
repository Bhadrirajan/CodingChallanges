const arr = [1,2,3,4,5]
k = 5;
function rotateArray(arr,k)
{
 arr.forEach((elements, index)=>{
   while(k > 0){
    const ele = arr.pop(k);
    arr.unshift(ele)
    k--;
   }
 }) 
 console.log(arr)
}
rotateArray(arr,k)