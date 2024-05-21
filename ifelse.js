var prompt = require("prompt-sync") ()



function guess(guessednumber)
{
var randomnumber = Math.floor(Math.random()*10)+1

if(randomnumber == guessednumber)
{
    console.log("you gussed is right")
}

else
{
    console.log("your guess is wrong ,generated random number is:"+randomnumber)
}

}

var guessednumber= prompt()

guess(guessednumber)

for(count=1;count<=10;count=count+1)
    {
        console.log("star")
    }

    for(count=0;count<=10;count=count+2)
        {
            console.log(count)
        }

   for(count=10;count>=1;count=count-1)    
    {
        console.log(count)

    } 

    for(count=1;count<=10;count=count+1)
        {
            console.log(count+"x3="+count*3)
        }