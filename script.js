var num = Math.floor(Math.random(0,100)*100)+1
function CheckNumber(){
    var temp = document.getElementById("num").value;
    var guessnum = parseInt(temp);
    if(temp == "" || guessnum > 100 || guessnum < 1){
        document.getElementById("p1").innerHTML = 'Please enter number between 1-100'
    }
    else{
        if(num == guessnum){
            document.getElementById("p1").innerHTML = 'Yep, You guessed it right!!'
        }
        else if(num < guessnum){
            document.getElementById("p1").innerHTML = 'Please guess smaller number!'
        }
        else if(num > guessnum){
            document.getElementById("p1").innerHTML = 'Please guess greater number!'
        }
    }
}