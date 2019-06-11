
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

    $("div.flg-holder").mouseout(removeDisplay);
    $("div.flg-holder").mouseover(addDisplay);
   
    
});
  


