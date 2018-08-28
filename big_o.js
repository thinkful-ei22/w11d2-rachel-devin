/* big_o.js
 * Authors: Devin Hero, Rachel Pinto
 * 8/28/2018
 */


//// Even or Odd
// Constant
// O(1)

function isEven(value){
  if (value % 2 == 0){
    return true;
  }
  else
    return false;
}


//// Are you here?
// Polynomial
// O(n^2)

function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
      const el1 = arr1[i];
      for (let j=0; j<arr2.length; j++) {
          const el2 = arr2[j];
          if (el1 === el2) return true;
      }
  }
  return false;
}


//// Doubler
// Linear
// O(n)

function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
      array[i] *= 2;
  }
  return array;
}


//// Naive Search
// Linear
// O(n)

function naiveSearch(array, item) {
  for (let i=0; i<array.length; i++) {
      if (array[i] === item) {
          return i;
      }
  }
}


//// Creating Pairs
// Polynomial
// O(n^2)

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
      for(let j = i+1; j < arr.length; j++) {
          console.log(arr[i] + ", " +  arr[j] );
      }
  }
}


//// Computing Fibonaccis
// Linear
// O(n)

function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}


//// Efficient Search
// Logarithmic
// O(logn)

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = array[currentIndex];

      if (currentElement < item) {
          minIndex = currentIndex + 1;
      }
      else if (currentElement > item) {
          maxIndex = currentIndex - 1;
      }
      else {
          return currentIndex;
      }
  }
  return -1;
}


//// Random Element
// Constant
// O(1)

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


//// Is it Prime?
// Linear
// O(n)

function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
      return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
      if (n % i == 0) return false;
  }
  return true;
}

/******** Recursive ********/


////Counting Sheep
// Linear
// O(n)
function countingSheep(totalSheep) {

  if (totalSheep === 0) {
    return '';
  } else {
    console.log(`${totalSheep} Another sheep jump over the fence`)
    countingSheep(totalSheep - 1)
  }

}

let totalSheep = 10;
countingSheep(10);

////Array Double
// Linear
// O(n)

function double(arr) {
  if (arr.length === 0) {
    return [];
  } else {
    const doubledNum = (arr[0] * 2)
    return [doubledNum, ...double(arr.slice(1))]
  }
}
let input = [2,5,10, 88,12,6236,23,15]
console.log(double(input))
// [4,10,20]

////REVERSE STRING
// Linear
// O(n)

function reverseString(str){
  if(str===''){
    return '';
  }
  const newChar = str[str.length-1];
  return newChar + reverseString(str.slice(0, -1));

}

console.log(reverseString('Reverse This String Hello squirrels'));


////nth Triangular Number
// Linear
// O(n)

function nTriangle(num){
  if(num===1){
    return 1;
  }
  return num + nTriangle(num-1);
}

console.log(nTriangle(10));

////Split String
// Linear
// O(n)

function splitString(str, sep){
  let idx = str.indexOf(sep);
  if (idx === -1){
    return [str];
  }
  return [str.slice(0,idx)]
    .filter(x => x !== "")
    .concat(splitString(str.slice(idx + sep.length), sep));
}
console.log(splitString("I-am-a-string-pls-take-away-these-dashes", "-"))

////Binary
// Logarithmic time
// O(log(n))

const binaryRep = function(input) {
  //base case
  if (input<=0) {
    return '';
  }
  const binaryStr = Math.floor(input%2)
  return binaryRep(Math.floor(input/2)) + binaryStr
}

console.log(binaryRep(42))


////fibonacci
// Linear
// O(n)

const fibseq = length => {
  if (length === 1)
    return [1];
  let arr = fibseq(length - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2] || 1);
  return arr;
};

console.log(fibseq(23));

////factorial
// Linear
// O(n)

function factorial(num) {
  if (num === 0) {
    return 1;
  } 
  return num * factorial(num - 1);
}

console.log(factorial(3));

////Anagram
// Exponential
// O(2^n)

function anagrams(prefix, str) {
    if(str.length <= 1) {
        console.log(`The anagram is ${prefix}${str}`);
    } else {
        for(let i=0; i<str.length; i++) {
            let current = str.substring(i, i+1);
            let previous = str.substring(0, i);
            let afters = str.substring(i+1);
            anagrams(prefix+current, previous+afters);
        }
    }
}

function _anagrams(word) {
  anagrams(' ', word);
}

_anagrams('east');

////Organization
// Linear
// O(n)
let organization = {
	"Zuckerberg": {		
		"Schroepfer": {
			"Bosworth": {
				"Steve":{},
				"Kyle":{},
				"Andra":{}
			},
			"Zhao": {
				"Richie":{},
				"Sofia":{},
				"Jen":{}
			},
			"Badros": {
				"John":{},
				"Mike":{},
				"Pat":{}
			},
			"Parikh": {
				"Zach":{},
				"Ryan":{},
				"Tes":{}
			}
		},
		"Schrage": {
			"VanDyck": {
				"Sabrina":{},
				"Michelle":{},
				"Josh":{}
			},
			"Swain": {
				"Blanch":{},
				"Tom":{},
				"Joe":{}
			},
			"Frankovsky": {
				"Jasee":{},
				"Brian":{},
				"Margaret":{}
			}
		},
		"Sandberg": {
			"Goler": {
				"Eddie":{},
				"Julie":{},
				"Annie":{}
			},
			"Hernandez": {
				"Rowi":{},
				"Inga":{},
				"Morgan":{}
			},
			"Moissinac": {
				"Amy":{},
				"Chuck":{},
				"Vinni":{}
			},
			"Kelley": {
				"Eric":{},
				"Ana":{},
				"Wes":{}
			}
		}
	}
};

  function traverse(organization, depth) {
    let indentation = ' '.repeat(depth * 4);
    Object.keys(organization).forEach(key => {
      console.log(indentation + key);
      traverse(organization[key], depth + 1);
    });
}
traverse(organization, 1);

/******** Iterative ********/


////1. Counting sheep
// Linear
// O(n)

function sheep(num){
  for(let i = num; i > 0; i--){
    console.log(`${i} - Another sheep jump over the fence`);
  }
}


////2. Array Double
// Linear
// O(n)
function arrayDouble(arr){
  let outputArr = [];
  for(let i = 0; i < arr.length; i++){
    outputArr.push(arr[i]*2);
  }
  return outputArr;
}


////3. Reverse String
// Linear
// O(n)

function reverseString(string){
  let inputString = string.split('');
  let outputString = '';
  for(let i = 0; i < string.length; i++){
    outputString += (inputString.pop());
  }
  return outputString;
}


////4. nth Triangle Number
// Linear
// O(n)

function nthNumber(n){
  let res = 0;
  for(let i = 1; i <= n; i++){
    res += i;
  }
  return res;
}


////5. String Splitter
// Linear
// O(n)

function stringSplitter(string, separator) {
  let currWord = '';
  let splitArr =[];

  for(let i = 0; i < string.length; i++){
    if(string[i] === separator){
      splitArr.push(currWord);
      currWord = '';
    }else{
      currWord += string[i];
    }
  }
  splitArr.push(currWord);

  return splitArr;
}


////6. Binary Representation
// Logarithmic
// O(logn)

function convertToBinaryIter(num){
  var binary = '';
  while(num>0){
      let rem = Math.floor(num%2);
      binary = rem + binary;
      num = Math.floor(num/2);
  }
  return binary;
}
console.log(convertToBinaryIter(124)); //1111100


////7. Factorial
// Linear
// O(n)

function factorial2(num){
  let results = 1;
  for(let i = 1; i <= num; i++){
    results = results * i;
  }
  return results;
}

////8. Fibonacci
// Linear
// O(n)

function fibonacci(n) {
  let curNum;
  let fibSequence = [1,1];
  
  if(n === 1){
    return [1];
  }
  if(n === 2){
    return fibSequence;
  }

  for(let i = 3; i <= n; i++){
    curNum = fibSequence[i-2] + fibSequence[i-3];
    fibSequence.push(curNum);
  }

  return curNum;
  // return fibSequence;
}


