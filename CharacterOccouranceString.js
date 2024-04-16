//Write a code for Occourance of character in a string
function characterOccurance(str)
{
  let strArray = [...str];
  let characterCount = 0;
  let countArray = [];
  for(let i=0; i<strArray.length; i++)
  {
   for(let j=0; j<strArray.length; j++)
   {
     if(strArray[i] === strArray[j])
     {
      characterCount ++; 
     }
   }
  countArray.push({[`${strArray[i]}`]:characterCount})
  characterCount =0;
  }
  console.log([...countArray])
}
characterOccurance('Bhadrinath')