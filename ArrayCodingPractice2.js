const agesOfDogs = [5,2,4,1,15,8,3]
function calcAverageHumanAge(dogsage)
{
  const calcHumanAge = dogsage.map((age)=>age<=2? 2*age : 16+(age*4));
  const filterHumanAges = calcHumanAge.filter(hum => hum >= 18);
  
  const len = filterHumanAges.length;

  
  return filterHumanAges.reduce((acc,cur)=>(acc+cur),0)/len;
}
console.log(calcAverageHumanAge(agesOfDogs))