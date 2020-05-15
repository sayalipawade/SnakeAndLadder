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
let dieNo=0
let result1=0
let result2=0
let randomPosition=0

/**
 * Player checking for option-no play,snake or ladder
 */
function playGame()
{
    while(position_Of_Player<WINNINGPOSITION)
    {
        randomPosition=Math.floor(Math.random()*6+1);
        let option=Math.floor(Math.random()*3)
        switch(option)
        {
            case NOPLAY:
                    position_Of_Player=position_Of_Player
                    break;
            case LADDER:
                    Result=(position_Of_Player+randomPosition) 
                    if(Result>WINNINGPOSITION)
                    {
                        position_Of_Player=position_Of_Player
                    }
                    else
                    {
                        position_Of_Player=position_Of_Player+randomPosition
                    }
                    break;
            case SNAKE:
                    if(position_Of_Player<randomPosition)
                    {
                        position_Of_Player=position_Of_Player
                    }
                    else
                    {
                        position_Of_Player=position_Of_Player-randomPosition
                    }
                    break;
        }
        dieNo++
    }
    return dieNo
}

/**
 * playing the game for two players
 */
player1=playGame()
player2=playGame()

if(player1>player2)
{
    console.log("player1 won")
}
else
{
    console.log("player2 won")
}



