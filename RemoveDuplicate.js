//remove duplicate from array
const arr = [1,5,8,5,1,3,6,5,8];
let temp = {};
function findDuplicate(array)
{
  array.forEach((value)=>{
    if(!temp[value])
    {
      temp[value] = value
    }
  })
  console.log(Object.values(temp))
}
findDuplicate(arr);
