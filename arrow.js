


// all answers will display in python tutor but console not print kindly check




//a) print odd numbers arrow function
var arr = (num) =>{
let odds = num.filter(n => n%2)
return odds;
}
console.log(arr([1,2,3,4,5,6,7,8,9,10,11,12]));


// b) convert all strings to title caps in string arry
// arrow function

var titleCase=(str) => {
  return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}

console.log(titleCase('[iron man]'));




// c) sum of all numbers in array
// anonumous funtion

var numbers= (num) => {
  let sum=0;
  for(let i of num){
    sum=sum+i;
  }
  return sum;
}
  console.log(numbers([10,20,30,40,50,60,70,80,90]));




// d) prime numbers
// arrow function

var sortprime= (num) =>{

  var prime_num1 = [],
      prime_num2 = [];
  for (var i = 0; i <= num; i++) {
    prime_num2.push(true);
  }
  for (var i = 2; i <= num; i++) {
    if (prime_num2[i]) {
      prime_num1.push(i);
      for (var j = 1; i * j <= num; j++) {
        prime_num2[i * j] = false;
      }
    }
  }

  return prime_num1;
}

console.log (sortprime(10));



// e) all polindromes in array
// anonumous function

var palindrome=  (arr, n) =>
  {
      // Initialise flag to zero.
      let flag = 0;
      var n=arr.length;
   
      // Loop till array size n/2.
      for (let i = 0; i <= n / 2 && n != 0; i++) {
   
          // Check if first and last element are different
          // Then set flag to 1.
          if (arr[i] != arr[n - i - 1]) {
              flag = 1;
              break;
          }
      }
   
      // If flag is set then print Not Palindrome
      // else print Palindrome.
      if (flag == 1)
          console.log("Not Palindrome",arr);
      else
          console.log("Palindrome",arr);
  }
   
   console.log (palindrome([ 1, 2, 3, 2, 1,5 ]));