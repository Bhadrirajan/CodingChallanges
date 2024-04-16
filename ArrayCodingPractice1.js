const dogsJulia = [3,5,2,12,7];
const dogsKate = [4,1,15,8,3];
const checkDogs = function (julia, kate)
{
  const checkCats= julia.splice(1,2);
  const total = [...checkCats, ...kate]
  total.forEach(function(Dogsage, i)
  {
    const checkage = Dogsage > 3 ? 'adult' : 'puppy' ;
    (checkage == "adult") ? console.log(`Dog number ${i+1} is an adult, and age is ${Dogsage} years old`) : console.log(`Dog number ${i+1} is an still a puppy`)
    
  });
}
checkDogs(dogsJulia, dogsKate);