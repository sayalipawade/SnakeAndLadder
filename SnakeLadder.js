console.log("******Welcome to snake and ladder******")

/**
 * Constants
 */
let STARTPOSITION=0

/**
 * Variables
 */
let position_Of_Player=0
let snake=2
let ladder=1
let noPlay=0

/**
 * Generating random no
 */
let randomPosition=Math.floor(Math.random()*6+1);

/**
 * Player checking for option-no play,snake or ladder
 */
let option=Math.floor(Math.random()*3+1)
switch(option)
{
    case noPlay:
        position_Of_Player=0
        break;
    case ladder:
        position_Of_Player=position_Of_Player+randomPosition
        break;
    case snake:
        position_Of_Player=position_Of_Player-randomPosition
        break;
}