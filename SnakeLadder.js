console.log("******Welcome to snake and ladder******")

/**
 * Constants
 */
let STARTPOSITION=0
let WINNINGPOSITION=100
let SNAKE=2
let LADDER=1
let NOPLAY=0

/**
 * Variables
 */
let position_Of_Player=0
let win=0

/**
 * Player checking for option-no play,snake or ladder
 */
while(position_Of_Player<WINNINGPOSITION)
{
    //Generating random no
    let randomPosition=Math.floor(Math.random()*6+1);
    let option=Math.floor(Math.random()*3+1)
    switch(option)
    {
        case NOPLAY:
                position_Of_Player=0
                break;
        case LADDER:
                position_Of_Player=(position_Of_Player+randomPosition) 
                win++
                if(position_Of_Player>WINNINGPOSITION)
                {
                    position_Of_Player=position_Of_Player-randomPosition
                }
                break;
        case SNAKE:
                if(position_Of_Player<STARTPOSITION)
                {
                    position_Of_Player=STARTPOSITION
                }
                else
                {
                    position_Of_Player=position_Of_Player-randomPosition
                }
                break;
    }
    console.log(position_Of_Player)
}
console.log("Winning count:"+win)