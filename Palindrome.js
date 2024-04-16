//Write a code for string is palindrome or not?
const checkPalindrome = (str) =>
{
 let reverse = str.split('').reverse().join('');
 str === reverse ? console.log('The give string is palindrome') : console.log('The give string is not palindrome')
}
checkPalindrome('malayalam')