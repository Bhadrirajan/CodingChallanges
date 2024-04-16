//Reverse a string
const str = "BHADRI";
let temp = "";
function reverseStr(string) {
  const array = [...string];
  array.forEach((value) => {
    console.log(value);
    temp = value + temp;
  });

  console.log(temp);
}
reverseStr(str);
