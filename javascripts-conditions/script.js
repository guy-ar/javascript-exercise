// Code goes here
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
  });

function readInput(elmId) {
    var num = parseInt(document.getElementById(elmId).value);
    return num;
  }
  
  function showBigger() {
    var numInput = [];
    for (i = 0; i < 2; i++) { 
      numInput[i] = readInput("inputNumber" + (i + 1)) ;
    }
    
    
    if (numInput[0] > numInput[1]) {
      document.getElementById("result").innerHTML = numInput[0];
    } else if (numInput[0] === numInput[1]) {
        document.getElementById("result").innerHTML = numInput[0] + " = " + numInput[1];
    } else {
      document.getElementById("result").innerHTML = numInput[1];
    }
  }
  
  function signOfSum() {
    var numInput = [];
    for (i = 0; i < 2; i++) { 
      numInput[i] = readInput("inputNumber" + (i + 1)) ;
    }
   
    var sum = numInput[0] + numInput[1];
    if (sum >= 0) {
      document.getElementById("result").innerHTML = "+";
    } else if (sum < 0) {
      document.getElementById("result").innerHTML = "-";
    } else {
      document.getElementById("result").innerHTML = "error occured";
    }
  }
  
  
  function sort() {
    var numInput = [];
    for (i = 0; i < 3; i++) { 
      numInput[i] = readInput("inputNumber" + (i + 1)) ;
    }
    var order = "";
    if (numInput[0] >= numInput[1]) {
      if (numInput[1] >= numInput[2]) {
        order = numInput[0] + ", " + numInput[1] + ", " + numInput[2];
      } else if (numInput[0] >= numInput[2]) {
        order = numInput[0] + ", " + numInput[2] + ", " + numInput[1];
      } else {
        order = numInput[2] + ", " + numInput[0] + ", " + numInput[1];
      }
    } else if (numInput[1]>= numInput[2]) {
      if (numInput[0] >= numInput[2]) {
        order = numInput[1] + ", " + numInput[0] + ", " + numInput[2];
      } else {
        order = numInput[1] + ", " + numInput[2] + ", " + numInput[0];
      }
    } else {
      order = numInput[2] + ", " + numInput[1] + ", " + numInput[0];
    }
      
    
    document.getElementById("result").innerHTML = order;
  }
  
  
  
  function showBiggestOf5() {
    var numInput = [];
    for (i = 0; i < 5; i++) { 
      numInput[i] = readInput("inputNumber" + (i + 1)) ;
    }
    var biggest = 0;
    if ((numInput[0] >= numInput[1]) && (numInput[0] >= numInput[2]) && (numInput[0] >= numInput[3]) && (numInput[0] >= numInput[4])) {
      biggest = numInput[0];
    } else if ((numInput[1] >= numInput[2]) && (numInput[1] >= numInput[3]) && (numInput[1] >= numInput[4])) {
        biggest = numInput[1];
    } else if ((numInput[2] >= numInput[3]) && (numInput[2] >= numInput[4])) {
        biggest = numInput[2];
    } else if (numInput[3] >= numInput[4]) {
        biggest = numInput[3];
    } else {
        biggest = numInput[4];
    } 
    document.getElementById("result").innerHTML = biggest;
  }
  
  function showAvg() {
    var numInput = [];
    var avgGrade = 0;
    for (i = 0; i < 5; i++) { 
      numInput[i] = readInput("inputNumber" + (i + 1)) ;
      avgGrade += numInput[i];
    }
     avgGrade = avgGrade/5;
    var evaluation = "";
    if (avgGrade < 60 ) {
      evaluation = "very ppor";
    } else if (avgGrade < 70 ) {
       evaluation = "poor";
    } else if (avgGrade < 80 ) {
       evaluation = "Medium";
    } else if (avgGrade < 90 ) {
      evaluation = "Good";
    } else {
      evaluation = "Very Good";
    }
    console.log("avgGrade = " + avgGrade);
    
    document.getElementById("result").innerHTML = evaluation;
    
  }
  
  function calculateLeapYear() {
    /* The year can be evenly divided by 4;
        If the year can be evenly divided by 100, it is NOT a leap year,
        unless;
        The year is also evenly divisible by 400. 
        Then it is a leap year.
    */
   var year = readInput("inputNumber1");
   if ((year % 4) === 0) {
       if ((year % 100) === 0) {
           if ((year % 400) === 0) {
                // still  leap year
                document.getElementById("result").innerHTML = year + " is a leap year";
                document.getElementById("result").style.color = "blue";
           } else {
               // not leap year
               document.getElementById("result").innerHTML = year + " is not a leap year";
               document.getElementById("result").style.color = "red";
           }

       } else {
           // it is for sure leap year
           document.getElementById("result").innerHTML = year + " is a leap year";
           document.getElementById("result").style.color = "blue";
       }
   } else {
       // not leap year
       document.getElementById("result").innerHTML = year + " is not a leap year";
       document.getElementById("result").style.color = "red";
   }
   
  }
  function isUpperOrLowerCase() {
  // Write a program to check whether a character is uppercase or lowercase alphabet
    var input = document.getElementById("inputText").value;
    if (input.length > 1) {
        // this is not character
        document.getElementById("result").innerHTML = input + " is not a valid input";
        document.getElementById("result").style.color = "red";
        return;
    }
    if ((input <=  "z") && (input >= "a")) {
        // lower case
        document.getElementById("result").innerHTML = input + " is in lower";
    } else if ((input <=  "Z") && (input >= "A")) {
        // upper case
        document.getElementById("result").innerHTML = input + " is in UPPER";
    } else {
        // not alfa char
        document.getElementById("result").innerHTML = input + " is not in lower nor UPPER";
        document.getElementById("result").style.color = "red";
    }
  }

  function calcNotes(){
    // Write a program to count total number of notes in given amount.
    // valid notes:
    // 200 --> notes[0]
    // 100 --> notes[1]
    // 50 --> notes[2]
    // 20 --> notes[3]
    var notes = [0, 0, 0, 0]
    var amount = readInput("inputNumber1");
    // start by checking the higher note
    
    notes[0] = Math.floor(amount / 200);
    leftAmount = amount % 200;
    if (!(leftAmount === 0)) {
        // continue to check for 100 note
        amount = leftAmount;
        notes[1] = Math.floor(amount / 100);
        leftAmount = amount % 100;
        if (!(leftAmount === 0)) {
            // conitnue to check for 50 note
            amount = leftAmount;
            notes[2] = Math.floor(amount / 50);
            leftAmount = amount % 50;
            if (!(leftAmount === 0)) {
                // conitnue to check for 20 note
                amount = leftAmount;
                notes[3] = Math.floor(amount / 20);
                leftAmount = amount % 20;
                // at this stage left amount cannot be changed to notes
            }
        }
    }
    // display the result and left change
    document.getElementById("result").innerHTML = "<h3>200 note:</h3>" +
                                                    notes[0] + 
                                                    "<h3>100 note:</h3>" +
                                                    notes[1] +
                                                    "<h3>50 note:</h3>" +
                                                    notes[2] +
                                                    "<h3>20 note:</h3>" +
                                                    notes[3] +
                                                    "<h3>left change:</h3>" +
                                                    leftAmount;


  }

  function calcElectricityBill() {
      /*
        Write a program to input electricity unit charges and calculate total electricity bill
        according to the given condition:
        ○ For first 50 units $0.50/unit
        ○ For next 100 units $0.75/unit
        ○ For next 100 units $1.20/unit
        ○ For unit above 250 $1.50/unit
        ○ An additional surcharge of 20% is added to the bill
      */
     var amount = readInput("inputNumber1");
     var bill = 0;
     console.log("origianl amount of units: " + amount);
     if (amount > 50) {
         // calculate full 50 units and continue
        bill += 50 * 0.5;
        console.log("bill after first 50 units: " + bill);
        amount -=50;
        console.log("left amount after reducing 50 units: " + amount);
        if (amount > 100) 
        {
            // calcualte full 100 units for 0.75$/unit
            bill += 100 * 0.75;
            console.log("bill after next 100 units: " + bill);
            amount -=100;
            console.log("left amount after reducing 150 units: " + amount);
            if (amount > 100) 
            {
                // calcualte next full 100 units for 1.20$/unit
                bill += 100 * 1.2;
                console.log("bill after next 100 units: " + bill);
                amount -=100;
                console.log("left amount after reducing 250 units: " + amount);
                // the left amount is calcualted per 1.5$/unit
                bill += amount * 1.5;
                console.log("bill after the rest units: " + bill);
                

            } else {
                // calcualte the left amounts per 1.20$/unit
                bill += amount * 1.2;
                console.log("bill with less then 250 units: " + bill);
            }

        } else {
            // calcualte the left amounts per 0.75$/unit
            bill += amount * 0.75;
            console.log("bill with less then 150 units: " + bill);
        }
     } else {
         // in case amount is less then 50:
         bill = amount * 0.5;
         console.log("bill with less then 50 units: " + bill);
     }
     // additional surcharge of 20%
     bill = 1.2 * bill;
     console.log("bill after adding 20%: " + bill);
     document.getElementById("result").innerHTML = "Electricity Bill:" + bill;

  }