var startgame = 0; 


$(document).ready(function(){
    var wins = 0;
    var losses = 0;
    var compScore = 0; 
    var myScore = 0; 


    startGame = function() {
        $(".crystal").each(function() {
            var randCrytal = Math.floor((Math.random() * 12) + 1);
               $(this).attr("value", randCrytal);
         });
         compScore = Math.floor((Math.random() * 102) + 19);
         
         $("#computer-score").text(compScore); 
         $("#my-score").text(0); 
    
    }

    $(".crystal").on("click", function() {
        var crystal = $(this);
        alert(crystal.attr("value"));
        
      });

      
    startGame();

});