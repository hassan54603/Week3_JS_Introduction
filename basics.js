/*
Task: Convert Strings to Numbers / String number ku badal

Do the following:   
   1. Declare a string type variable with the value of "1999" 
   2. Convert the string value of "1999" to a integer value of 1999
   3. Return the result

   HINT: look up the Number method / Raadi Number Method wax la dhaho
*/
// parseInt or number are same methods
let string = "1999";
let number = Number(string);
console.log(number);
// or another method you can use!
/*
Task: Mood Checker

Do the following:   
   1. Write a script that prompts the user for their current mood. / Code qor u soo saaraayo qof meeshuu ku qori lahaa siduu dareemaayo
   2. If the user inputs happy, print 'Yay me too!' to the console, sad print 'Aw cheer up', / Haduu qofka galiyo 'happy', console log samee ah 'Yay me too', haduu 'sad' galiyo, 'Aw Cheer up' console ku qor.
   3. Else just print 'So moody!' / Hadii kale 'So Moody!' soo saar.

*/
// step 1
let mood = prompt("What is your mood today?");
// step 2
if (mood === "happy") {
  console.log("Yay me too!");
} else if (mood === "sad") {
  console.log("Aw cheer up");
} else {
  console.log("So moody!");
}

/*
Task: Odd or Even / kisi ama dhaban

Use conditionals to check if a hardcoded number is odd or even, and then console.log the number is odd or even with the numbers value.

Adigoo 'if/else' isticmaalaayo hubi in nambar uu yahay 'kisi ama dhaban', kadi console log ku samee adigoo sheegaayo midkuu yahay

*/

var num = 16; // You can change this number! / Number-kaan ku bilow

// write your conditions here / Code-kaada halkaan ku qor
if (num % 2 === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task: FIZZBUZZ 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

/*

You're about to do an assignment called "Fizz Buzz", which is one of the classic programming challenges. 

"Fizz Buzz" waa xujo la siiyo markii dadka interview laga qaadaayo. Waa inuu programkaada soo saaro "Fizz", "Buzz" ama "FizzBuzz". 


Write a program that prints the numbers from 1 to 100.

Code qor soo saaraayo inta u dhaxeysa 1 ilaa 100.

But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".

Markii numberka lagu dhufan karo 3, waa inuu soo qoraa "Fizz", haduu numberka lagu dhufan karo 5, waa inuu soo qoraa "Buzz"


For numbers which are multiples of both three and five print "FizzBuzz".

Hadii labadaba (3 iyo 5) lagu dhufan karo, waa inuu soo qoraa "FizzBuzz".

The one hint you'll likely need is / Halka wax ood u baahantahay inaa ogaato:

There is a Javascript operator called "remainder" but often referred to as "modulus" or "modulo". 
It is represented by the percentage sign (%) and it gives you the remainder left over after division. So for example:

Waxaa jiro wax la yiraahdo "modulus" oo Javascript ku jiro, kaas oo uu kuu soo saaraayo haraaga labo number oo la isku dhuftay, sidaan ayuu u qoranyahay:

 6 % 3

Equals zero. Because after dividing 6 by 3, there is zero leftover. Whereas:

Waa ebar, hadii lix loo qaybiyo sadex, waxbo ma soo haraayaan.

6 % 4

Equals 2. Because after dividing 6 by 4, there are 2 left over from the six.

Waa labo, haduu 6 loo qaybiyo 4, lao ayaa soo haraayo.

Knowing this should help you complete this assignment without any issue. Xarafkaa "%" wuxuu kaa cawinayaa inaa haraaga hesho, asaga u isticmaal inaa
ogaato in number ay isku qaybsamaan.


Extra Credit:

Instead of only printing "fizz", "buzz", and "fizzbuzz", add a fourth print statement: "prime". 
You should print this whenever you encounter a number that is prime (divisible only by itself and one).
As you implement this, don't worry about the efficiency of the algorithm you use to check for primes. 
It's okay for it to be slow.


*/
//step 1
for (let i = 1; i <= 100; i++) {
  //step 2
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study next week's content on arrays 
  HINT - try looking up the .includes() method
*/
// youtube aa video aa icaawiyay
function vowelCounter(str) {
  /*add your code here*/
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(vowelCounter("Hello World"));
