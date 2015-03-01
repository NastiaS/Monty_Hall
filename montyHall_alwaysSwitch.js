//assumptions: 1) it is not an interactive game;
//2) Goal - the best outcome --> theory of probability dictates: use "always switch" strategy --> 
//if the same door is picked initially by both the comp and the user --> user - loser. 

var counter_loser = 0, counter_winner = 0, times_played = 0;
while (times_played <= 1000){
var comp_choice = Math.floor(Math.random() * 3) + 1;
var user_choice = Math.floor(Math.random() * 3) + 1;
if(comp_choice === user_choice){
    
     counter_loser = counter_loser + 1;
     
}
else {

    counter_winner = counter_winner + 1;
}

	times_played = times_played + 1;
}
console.log("The loosing percent is " + (counter_loser * 0.1).toFixed(1) + " %");
console.log("The winning percent is " + (counter_winner * 0.1).toFixed(1) + " %");

 