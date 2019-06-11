function destroyer(arr) {
    console.log(arr);
    for (var i=1, l = arguments.length; i<l; i++){
        console.log(arguments[i]);
        for (var j =0, k=arr.length; j<k; j++)
        {
            if (arr[j] ===  arguments[i]) {
                arr.splice(j, 1); 
                j--;
            }
        }
      console.log(arr);
    }
    
    // Remove all the values
    return arr;
  }
  // input to test
 /* destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); //should return [1, 5, 1].
  destroyer([3, 5, 1, 2, 2], 2, 3, 5); // should return [1].
  destroyer([2, 3, 2, 3], 2, 3); //should return [].
  destroyer(["tree", "hamburger", 53], "tree", 53); //should return ["hamburger"].
  destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"); //should return [12,92,65].
*/


  function whatIsInAName(collection, source) {
    //FUNCTION IS WORKING
  
    // What's in a name?
    var arr = [];
    var srcKeys = Object.keys(source);
    var idx;
    console.log("the source keys: " + srcKeys);
    // Only change code below this line
    for (let key in collection) {
      let isFound = false;    
      let node = collection[key];
      // Node hold the entry in the array
      // get the keys in the node and compare them to source keys
      let nodeKeys = Object.keys(node);
      for (let j = 0, l = srcKeys.length; j < l; j++) {
        if (nodeKeys.indexOf(srcKeys[j]) >=0) {
          // check that vaue match
          console.log(node[srcKeys[j]]);
          console.log(source[srcKeys[j]]);
          if (node[srcKeys[j]] == source[srcKeys[j]]) {
            // the value match
            isFound = true;
            
            // need to check the rest of the source keys
          } else {
            // the value did not match - node is not valid
            isFound = false;
            break;
          }
           

        } else {
          // the node do not match the source
          isFound = false;
          break;
        }

      }
      if (isFound) {
        // the source was fully found in foundKey - need to get the element that hold the key and retrun it
        console.log("found match");
        arr.push(node);
        console.log("arr:" + arr.toString());
        
      }
      
    }
    
    
    // Only change code above this line
    return arr;
  }
  
//  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); // should return [{ first: "Tybalt", last: "Capulet" }].
// whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }); // should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
//whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }); // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
//whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }); //should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
//whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }); // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}); // should return []


function spinalCase(str) {
  // THIS IS WORKING
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var temp = "";
    for (let i=0, l = str.length; i < l; i++)
    {
      if ((str[i] >= "a") && (str[i] <= "z")) {
        temp += str[i];
      } else if ((str[i] >= "A") && (str[i] <= "Z")) {
         // in case missing space - add it
        if ((i > 0) && (temp[temp.length-1] !== "-") ) {
          temp += "-" + str[i].toLowerCase();
        } else {
         temp += str[i].toLowerCase();
        }
      } else if (str[i]=== '-') {
        temp += str[i];
      } else if (str[i]=== " ") {
        temp += "-";
      } else if ((str[i]=== "_")) {
        temp += "-";
      } else {
        console.log(error);  
      }
      console.log(temp);
    }
  
    return temp;
  }
  
    
  
spinalCase("thisIsSpinalTap"); // should return "this-is-spinal-tap".*/
/*spinalCase("The_Andy_Griffith_Show"); // should return "the-andy-griffith-show".
spinalCase("AllThe-small Things"); // should return "all-the-small-things".

spinalCase("This Is Spinal Tap"); // should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap"); // should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show"); // should return "the-andy-griffith-show".

spinalCase("Teletubbies say Eh-oh"); // should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things"); // should return "all-the-small-things".*/


function translatePigLatin(str) {
  let i =0;
  let temp = "";
  if (isVowel(str[0])) {
    return str + "way"; 
  } else {
    while(i < str.length && !isVowel(str[i])) {
      i++;
    }
    temp = str.slice(0, i);
    str = str.slice(i, str.length);
    console.log(str+temp +  "ay");
    return str + temp  + "ay";
  }
}

function isVowel(char){
  if ((char.toUpperCase() == "A") || 
      (char.toUpperCase() == "E") ||
      (char.toUpperCase() == "I") ||
      (char.toUpperCase() == "O") ||
      (char.toUpperCase() == "U")) {
        return true;
      } else {
        return false;
      }
}
translatePigLatin("consonant");
translatePigLatin("california"); //should return "aliforniacay".
translatePigLatin("paragraphs"); //should return "aragraphspay".
translatePigLatin("glove"); //should return "oveglay".
translatePigLatin("glrve"); //eglrvay//Should handle words where the first vowel comes in the end of the word.

function copyMachine(arr, num) {
  // duplicate arr * num times
  let newArr = [];
  while (num >= 1) {
    // change code below this line
    newArr = [...newArr, [...arr]];
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray


let this2Array = ['sage', 'rosemary', 'parsley', 'thyme'];

let that2Array = ['basil', 'cilantro', ...this2Array, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']


// way to check if object has property:
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  }
};

users.hasOwnProperty('Alan');
'Alan' in users;
// both return true

// Iterate Through the Keys of an Object with a for...in Statement
for (let user in users) {
  console.log(user);
};

// logs:
//Alan
//Jeff

// the key is not giving the value but the object[key] is giving the value
// and in the example below - we have object inside object - check how to retreive the data:
let users2 = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  // change code below this line
  var cnt = 0;
  for (let user in users2){
    console.log(user);
    console.log(users2[user]);
    for (let key in users2[user]) {
      console.log(key);
      if (key == "online") {
        if (users2[user][key]) {
          cnt++;
          console.log("online = true");
        }

      }
      
    } 
  }
  return cnt;
  // change code above this line
}

console.log(countOnline(users));

// GENERATE ARRAY OF ALL Object keys - for example  all keys in users object:
Object.keys(users);


function ifPrime(num) {
  
  for (let i = 2; i < num; i++){
    if ((num % i) == 0) {
      // not a prime
      return true;
    }
  }
  return true;
}


function sumPrimes(num) {
// THIS IS WORKING
  let primeArr = [num+1];
  let primSumArr = [num+1];
  let sum = 0;
  // first set all indicators to false
  for (let i =0; i <= num; i++) {
    primeArr[i] = true;
  }
  
  let p = 2;
  while (p <= num) {
    if (primeArr[p]) {
      // go over all multiples of p till numm - and mark them as not prime
      for (let j = 2; j * p <= num; j++) {
        primeArr[p * j] = false;
      }
    }
    p++;
  }

  
  // at this point all numbers marked as prime= true on the array
  // so we are left to go over the arrat and sum the indexes that are prime
  for (let i = 2; i <= num; i++){
    if (primeArr[i]) {
      console.log("prime number: " + i);
      sum += i;
      primSumArr[i] = sum;
      console.log("temp sum: " + sum);
    }
  }
  
  num = sum;
  console.log("the sum is: " + sum);
  return num;
}

sumPrimes(977);
sumPrimes(10);

function diffArray(arr1, arr2) {
  let newArr = [];
  let bigArr = [];
  let smallArr = [];
  let commonLen = 0;
  let len1 = arr1.length;
  let len2 = arr2.length;
  if (len1 > len2) {
    commonLen = len2;
    bigArr = arr1;
    smallArr = arr2;
  } else if (len1 == len2) {
    commonLen = len1;
    // in such case only one pass till common len
  } else {
    commonLen = len1;
    bigArr = arr2;
    smallArr = arr1;
  }
  for (let i = 0; i < commonLen; i++) {
    // go over the attributes in both arrays and check if each exist on the otherone
    let temp = arr1[i];
    if ((arr2.indexOf(temp) == -1) && (newArr.indexOf(temp) == -1)) {
      // node do not exist in both - push to unique arr
      newArr.push(temp);
    }
    temp = arr2[i];
    if (arr1.indexOf(temp) == -1) {
      // node do not exist in both - push to unique arr
      newArr.push(temp);
    }
 
  }
  // now go over the left items on the big arr
  // check first if arr1 and arr2 have same lenth
  if (len1 != len2){
    for (let i = 0; i < bigArr.length; i++) {
      // go over the all items on the big array and check if exist in other array
      let temp = bigArr[i];
      if ((smallArr.indexOf(temp) == -1) && (newArr.indexOf(temp) == -1)) {
        // check also if node was inserted
        newArr.push(temp);
      }
    }
  }
  // Same, same; but different.
  
    return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Constructor for Person
var Person = function(firstAndLast) {
   
  // Complete the method below and implement the others similarly
  /*
  this.getFullName = function() {
    return this.getFirstName() + " " + this.getLastName();
  };*/

  this.getFirstName = function() {
    return this.fName;
  };
  
  this.getLastName = function() {
    return this.lName;
  };
  
  this.setFirstName = function(first){
    this.fName = first;
  };
  
  this.setLastName = function(last){
    this.lName = last;
  };
  /*
  this.setFullName = function(firstAndLast){
    let nameArr = firstAndLast.split(" ");
    this.fName = nameArr[0];
    this.lName = nameArr[1];
    

  };*/
  this.setFullName(firstAndLast);
  
};

Person.prototype.setFullName = function(firstAndLast) {
  let nameArr = firstAndLast.split(" ");
  this.fName = nameArr[0];
  this.lName = nameArr[1];
}

Person.prototype.getFullName = function() {
  return this.getFirstName() + " " + this.getLastName();
}

var bob = new Person('Bob Ross');
bob.getFullName();

console.log(Object.keys(bob).length); // should return 6.
console.log(bob instanceof Person); // should return true.
console.log(bob.firstName); // should return undefined.

console.log(bob.lastName); // should return undefined.
console.log(bob.getFirstName()); // should return "Bob".
console.log(bob.getLastName()); // should return "Ross".

console.log(bob.getFullName());// should return "Bob Ross".

bob.setFirstName("Haskell");
console.log(bob.getFullName());// should return "Haskell Ross" after

bob.setLastName("Curry");
console.log(bob.getFullName()); // should return "Haskell Curry" after .

bob.setFullName("Haskell Curry");
console.log(bob.getFullName());// should return "Haskell Curry" after .

bob.setFullName("Haskell Curry");
console.log(bob.getFirstName());// should return "Haskell" after .

bob.setFullName("Haskell Curry");
console.log(bob.getLastName()); // should return "Curry" after .