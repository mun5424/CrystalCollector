var startgame = 0; 


$(document).ready(function(){
    var wins = 0;
    var losses = 0;
    var compScore = 0; 
    var myScore = 0; 


    startGame = function() {
         
         resetScores(); 
    }

    resetScores = function() {
        //reset scores. mine to 0 and computer to random
        myScore = 0; 
        $("#my-score").text(0); 
        compScore = getRndInteger(20,120) ;
        $("#computer-score").text(compScore); 

        //give each crystal a random value between 1-12
        $(".crystal").each(function() {
            var randCrytal = getRndInteger(1,12);
               $(this).attr("value", randCrytal);
         });
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }


    $(".crystal").on("click", function() {
        //clear status msg
        $("#status").text(" ");

        var crystal = $(this);
        myScore += parseInt(crystal.attr("value"));
        $("#my-score").text(myScore); 
        if (myScore === compScore)
        {
            resetScores(); 
            $("#wins").text("WINS: " + ++wins); 
            $("#status").text("YOU WIN! ");
        }
        if (myScore > compScore)
        {
            resetScores(); 
            $("#losses").text("LOSSES: " + ++losses); 
            $("#status").text("YOU LOSE! ");
        }
        
      });

      
    startGame();

});