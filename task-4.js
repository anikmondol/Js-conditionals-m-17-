/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/



function scoreChoker(myMark, friendMark){
    if(typeof myMark != 'number' || typeof friendMark != 'number'){
        return 'give me number'
    }else{
        if(myMark >= 80){
            if(friendMark >= 80){
                return "go for a lunch"
            }
            else if(friendMark >= 60){
                return "good luck next time"
            }else if(friendMark >= 40){
                return "message unseen"
            }else{
                return 'block friend'
            }
        }else{
            return "go to home and sleep"
        }
    }
}


console.log(scoreChoker(80, 39));