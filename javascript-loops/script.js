$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
  });

function calcFizzBuzz() {
/*
 Write a JavaScript program which iterates the integers from 1 to 100. But for
multiples of three print "Fizz" instead of the number and for the multiples of five print
"Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
*/
    for (var i=1; i <= 100; i++){
        // check first if number is diveded by both 3 and 5
        if (((i % 3) === 0) && ((i % 5) === 0)) {
            console.log("FizzBuzz");
        } else if ((i % 3) === 0) {
            // check if number is divided by 3
            console.log("Fizz");
        } else if ((i % 5) === 0) {
            // check if numner is divided by 5
            console.log("Buzz");
        } else {
            // print the number
            console.log(i); 
        }
    }
}

//calcFizzBuzz();

function checkHappyNum() {
    /*
         According to Wikipedia a happy number is defined by the following process :
        "Starting with any positive integer, replace the number by the sum of the squares of its
        digits, and repeat the process until the number equals 1 (where it will stay), or it loops
        endlessly in a cycle which does not include 1. Those numbers for which this process
        ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers
        (or sad numbers)".
        For example, 19 is happy, as the associated sequence is

1^2 + 9^2 = 82,
8^2 + 2^2 = 68,
6^2 + 8^2 = 100,
1^2 + 0^2 + 0^2 = 1.
        Write a JavaScript program to find and print the first 5 happy numbers. 
    */

    // used to count the happy numbers we found 
    var counter = 0;
    var num = 1; // the number to check if it is happy
    var stepsAll = [];
    var result = 0;
    var numStr = "";
    var happyNum = { 
        num: null, 
        steps: []
    };
    var happyNumArr = [];

    while (counter < 20) {
        // push first the value to the array
        var steps = [];
        var temp = num;
        var isFound = false;
        var isDuplicate = false;
        while (!(isDuplicate) && !(isFound)) {
            // continue as long as we did not got already the starting point --> isDuplicate
            // or if we did not reach 1 --> isFound

            // before we start - check if the number is part of happy numbers steps
            //NOT WORKING - NEED TO DEBUG 
            if (stepsAll.includes(num)) {
                // no need to continue - this is happyNumber
                console.log(num, " is Happy Number found in early stage");
                //need to update happy num array with this num
                var happyNum = { 
                    num: null, 
                    steps: []
                };
                happyNum.num = num;
                happyNum.steps = "no steps were calcuated";

                happyNumArr.push(happyNum);
                counter ++;
                isFound = true;
                continue;
                
                
            }
           
            
            numStr = temp.toString();
            if (numStr.length > 1) {
                var digitStr;
                result = 0;
                for (var i = 0; i < numStr.length; i++) {
                    digitStr = numStr[i];
                    temp = parseInt(digitStr, 10);
                    result += temp ** 2;
                }
            } else {
                // it is one digit - just need to get square
                result = temp ** 2;
                temp = result;
            }
            
            
            if (result == 1) {
                // found happy number
                console.log(num, " is Happy Number");
                
                var happyNum = { 
                    num: null, 
                    steps: []
                };
                happyNum.num = num;
                happyNum.steps = steps;

                happyNumArr.push(happyNum);

                // push the steps of happy number to the stepsAll 
                for (var i = 0; i < steps.length; i ++){
                    stepsAll.push(steps[i]);
                }
                
                counter ++;
                isFound = true;
            } else if (steps.includes(result)) {
                // this is not happy number - need to exit
                isDuplicate = true;
                console.log(num, " is Sad Number");
            } else {
                // set the current value and contiue to check it
                steps.push(result); // --> will be used to verify if need to stop as number was alread been tested
                temp = result;
            }
        }
        num++
    }
    console.log(JSON.stringify(happyNumArr));
}


//checkHappyNum();

function splitNumber(numToSplit){
    // this function will get number - use algorithm of divide and modulo and return array with the digits
    var digitArray = [];
    var tempDigit;
    var tempNum;

    while (numToSplit >= 1) {
        tempNum = Math.floor(numToSplit / 10);
        tempDigit = numToSplit % 10;
        digitArray.unshift(tempDigit);
        numToSplit = tempNum;

        /* 371 / 10 = 37; > 1 continue
        371 % 10 = 1 --> insert to digitArray

        37 % 10 = 7 --> insert to digitArray
        37 / 10 = 3 --> > 0 continue

        3 % 10 = 3 --> insert to digitArray
        3 / 10 = 0.3 --> < 1 - stop */

    }
    return digitArray;
}

function getInputToSplit() {
    var numtoSplit = parseInt(document.getElementById("inputNumber1").value);

    // call to splitNumber(numToSplit)
    var resultArray = splitNumber(numtoSplit);
    
    document.getElementById("result").innerHTML = resultArray.toString();

}

/*
Write a JavaScript program to find the armstrong numbers of 3 digits.
Note : An Armstrong number of three digits is an integer such that the sum of the
cubes of its digits is equal to the number itself. For example, 371 is an Armstrong
number since 3**3 + 7**3 + 1**3 = 371. */
function armstrongNum(){
    var armstrongArr = [];
    // loop over numbers from 100 to 999
    for (var num = 100; num < 999; num++){
        // for each number split it to digits
        var tempArr = splitNumber(num);
        var result = 0;
        for (var i = 0; i < tempArr.length; i++) {
            result += tempArr[i] ** 3;
        }
        // check if result is same value as origianl number
        if (num === result){
            console.log(num + " is armstrong number");
            armstrongArr.push(num);

        }
        
    }
     
    return armstrongArr;
}

function presentArmstrongResult() {
    // call to armstrongNum()
    var resultArray = armstrongNum();
    document.getElementById("result").innerHTML = resultArray.toString();
}


function calcGCD(num1, num2){
    /*Write a JavaScript program to compute the greatest common divisor (GCD) of two
    positive integers. **/
    var numGCD;
    // get the diviadors for the first number and second number
    var num1Div = calcDiviadors(num1);
    var num2Div = calcDiviadors(num2);
    if (num1Div.length >= num2Div.length) {
        numGCD = chkCommonNum(num2Div, num1Div);
    } else {
        numGCD = chkCommonNum(num1Div, num2Div);
    }
    return numGCD;
    
}

function calcDiviadors(num){
    // get the diviadors for the given number and return them as array
    var divArray = [];
    console.log("calcDiviadors:: input= " + num);
    // loop on all numbers between 1 and num
    for (var i = 1; i <= num; i++)
    {
        // check if num % i = 0
        if (num % i === 0) {
            // if so add i to divArray
            divArray.push(i);
        }
        
    }
    console.log("calcDiviadors:: output= " + divArray);
    return divArray;
}

/*
console.log(calcDiviadors(54));
console.log(calcDiviadors(97));
console.log(calcDiviadors(108));
*/

function chkCommonNum(smallArr, bigArr) {
    // go over the small list and check  if the highest number exist in the second list
    // if not move to the next value and so on

    console.log("chkCommonNum:: smallArr= " + smallArr);
    console.log("chkCommonNum:: bigArr= " + bigArr);
    var innerIdx = bigArr.length - 1;
    for (var i = smallArr.length - 1; i >= 0; i-- ){
        for (var j = innerIdx; j >= 0; j--) {
            if (smallArr[i] === bigArr[j]) {
                console.log("chkCommonNum:: result= " + smallArr[i]);
                return smallArr[i];
            } else if (smallArr[i] > bigArr[j]) {
                innerIdx = j;
                // break the inner loop
                break;
            }

        }
    }
    // no common number was found
    return 0;
}

/*
var bigArr = [1, 2, 3, 6, 9, 18, 27, 36, 54, 108];
var smallArr = [1, 2, 3, 4, 6, 8, 12, 24];
console.log(chkCommonNum(smallArr, bigArr));*/

function presentGCDResult() {
    var num1 = parseInt(document.getElementById("inputNumber1").value);
    var num2 = parseInt(document.getElementById("inputNumber2").value);

    var result = calcGCD(num1, num2);
    document.getElementById("result").innerHTML = result;
}

function sumMultiples(num1, num2){
    // JavaScript program to sum the multiples of num1 (e.g. 3) and num2 (e.g. 5) under 1000
    // 3*1 + 5*1 + 3*2 + 5*2 +... 3*1000 + 5*1000
    var result = 0;
    for (var i=1; i <=1000; i++){
        result += num1*i + num2*i;
    }
    return result;
}

console.log(sumMultiples(3,5));

function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    var startArr = arr2.slice(0, n);
    var endArr = arr2.slice(n);
    //console.log(startArr);
    //console.log(endArr);
    startArr.splice(startArr.length,0, arr1);
    //console.log(startArr);
    startArr.splice(startArr.length,0, endArr);
    //console.log(startArr);
   
   
    return startArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  frankenSplice([1, 2, 3], [4, 5], 1)
  frankenSplice([1, 2], ["a", "b"], 1)
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)


  function chunkArrayInGroups(arr, size) {
    // Break it up.
    var arr2 = [];
    for (var i=0; i < arr.length/size; i++){
      console.log("i= " + i);
      console.log("size= " + size);
      var tempArr = arr.slice(i * size, (i+1)*size);
      console.log(tempArr);
      arr2[i] = tempArr;
      console.log(arr2);
      console.log("arr2.length= " + arr2.length);
    }
  
    return arr2;
  }
  
  //chunkArrayInGroups(["a", "b", "c", "d"], 2);
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)

  function sumAll(arr) {
      /* Return the sum of those two numbers plus the sum of all the numbers between them.
        The lowest number will not always come first. */
    var min, max;
     if (arr[0] < arr[1]) {
       min = arr[0];
       max = arr[1] 
     } else {
       min = arr[1];
       max = arr[0]; 
     }
     var sum = 0;
     var input = min;
     while (input <= max) {
       sum += input;
       input++;
     }
     return sum;
   }
   
  
  sumAll([1, 4]); //should return 10.
  sumAll([10, 5]); //should return 45.