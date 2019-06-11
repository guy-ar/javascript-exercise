function addDisplay() {
    //alert("hi");
    $(this).children().children("h4.card-title").addClass("dispaly");
    $(this).children().children("h4.card-title").removeClass("no-dispaly");
    
}

function removeDisplay() {
    //alert("hi1");
    $(this).children().children("h4.card-title").addClass("no-dispaly");
    $(this).children().children("h4.card-title").removeClass("dispaly");
}


$(document).ready(function() {

     // load the main.html when document is ready
     $(".content").load("home.html"); 

     // go back to main when brand is clicked
     /*$("#nav-home").click(function() {
     
         // Loading the content of contact.html into to .content class
         $(".content").load("main.html");    
     });*/
    $("#home").click(function() {
      // Loading the content of contact.html into to .content class
      $(".content").load("home.html");    
    });
    
    $("#ex1").click(function() {
        // Loading the content of contact.html into to .content class
        $(".content").load("index-ex1.html");    
    });
    
    $("#ex2").click(function() {
        // Loading the content of contact.html into to .content class
        $(".content").load("index-ex2.html");    
    });
    $("#ex3").click(function() {
        // Loading the content of contact.html into to .content class
        $(".content").load("index-ex3.html");    
    });
 
    $("#ex4").click(function() {
        // Loading the content of contact.html into to .content class
        $(".content").load("index-ex4.html");    
    });
 

    $("div.flg-holder").mouseout(removeDisplay);
    $("div.flg-holder").mouseover(addDisplay);

  });
  




function getInputToSum() {
    var numFirst = parseInt(document.getElementById("inputNumber1").value);
    var numSecond = parseInt(document.getElementById("inputNumber2").value);
    // call to fucntion to sum the 2 numbers 
    var result = sum2Num(numFirst, numSecond);
    
    document.getElementById("result").innerHTML = result;

}

function getInputToFindMax() {
    var numFirst = parseInt(document.getElementById("inputNumber1").value);
    var numSecond = parseInt(document.getElementById("inputNumber2").value);
    // call to fucntion to sum the 2 numbers 
    var result = findMax(numFirst, numSecond);
    
    document.getElementById("result").innerHTML = result;

}


function getInputforSort() {
    var inputArray = [];

    inputArray.push(parseInt(document.getElementById("inputNumber1").value));
    inputArray.push(parseInt(document.getElementById("inputNumber2").value));
    inputArray.push(parseInt(document.getElementById("inputNumber3").value));
    // call to fucntion to sum the 2 numbers 
    var result = sort(inputArray);
    
    
    document.getElementById("result").innerHTML = "Sorted numbers: <br>" + result.toString();

}

function getInputToCountChar() {
    var word = document.getElementById("inputWord").value;
    var character = document.getElementById("inputChar").value;
    // call to fucntion to count the number of characters in the word
    var result = countCharInWord(word, character);
    
    document.getElementById("result").innerHTML = result;

}

function sum2Num(first, second) {
    return first + second;
}

function findMax(first, second) {
    if (first >= second){
        return first;
    } else {
        return second;
    }
    
}

function sort(numArray) {
    var max;
    var resultArray = [];

    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < numArray.length; i++) {
            if (numArray[i] > numArray[i + 1]) {
                var tmp = numArray[i];
                numArray[i] = numArray[i + 1];
                numArray[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return numArray;
}

function countCharInWord(word, char) {
    // go over the word - and for every place check if char exist
    // if so increase the counter
    var count = 0;
    for (var i = 0; i < word.length; i++) {
        if (char === word[i]) {
            count++;
        }
    }
    return count;
}

// Test
/*
console.log(countCharInWord("Word", "o"));
console.log(countCharInWord("Word", "f"));
console.log(countCharInWord("Word", "w"));
console.log(countCharInWord("Wordo", "o"));
console.log(countCharInWord("oWordo", "o"));*/

