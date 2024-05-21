//selecting elements
var inputbox = document.getElementById("inputbox")
var result = document.getElementById("result")
var guess = document.getElementById("Guesscount")
var noofGuess = 3

//generate random number
var randomnumber = Math.floor(Math.random()*10)+1 //1 to 10
if (randomnumber>5) {
    randomnumber = randomnumber-5
}

//event handler function
function checkthenumber() 
{
    if (inputbox.value == randomnumber) 
        {
        alert('you got right')

result.textContent = "Your are right"        
    }
    else {
        noofGuess=noofGuess-1
        if (noofGuess==0)       
    {
            alert("you lost: "+randomnumber)

    }
        
        Guesscount.textContent ="available guesses:"+noofGuess
result.textContent = "Your are worng"

    }
}
