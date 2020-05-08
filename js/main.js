// /*----- constants -----*/
    //1 board 
const board = 
    [[a] [b] [c] [d] [e] [f] [g] [h] [i] [j] [k] [l]]
    console.log(board[0][1])
;

    //2 players
    //6 arrays [mySide]
    //2 arrays [paths] of the arrays [baskets] 
const players = {
    '1': {
        turn: '1',
        path: [[a], [b], [c], [d], [e], [f], [1], [g], [h], [i], [j], [k], [l]],
        mySide: [[a], [b], [c], [d], [e], [f]],
    },
    '2': {
        turn: '-1',
        path: [[g], [h], [i], [j], [k], [l], [2], [a], [b], [c], [d], [e], [f]],
        mySide: [[g], [h], [i], [j], [k], [l]],
    }
};


    //48 elements [stones]
    
// /*----- app's state (variables) -----*/
    //what does the application need to "remember" throughout it's execution?
    
    //player turn
let turn;
    //player array [mancala] length [point total]


    //array [basket] selected
    //array length [basket totals] after element [stone] is added

// /*----- cached DOM references -----*/
    //2 cached arrays [mancalas] for totalling points 

    //1 cached array [hand] representing the array [basket] selected by the player 

// /*----- event listeners -----*/


// /*----- functions -----*/
    //starting the game:
    //init board with 0 elements [stones] in arrays [baskets]
init();
function init() {
    board [null, null, null, null, null, null, null, null, null, null, null, null, null, null];
} 
    //event listener on button [start new game]
    //render 4 elements [stones] in each array [basket] 

    //player turn:
    //highlight arrays [baskets] whose length > 0
        //these are the selectable arrays [mySide]
    //select array [basket]
        //event listener for click 
    //remove elements [stones] from array [basket]  
    //cache elements [stones] in dynamic variable [hand] 
    //add 1 element [stone] to each array [basket] starting with the next closest array [basket] 
        //follow the players path until the cached array [hand] < 1
            ////if player1's last element [stone] populates a previously empty array [basket](only on mySide!)
            ////if there are elements [stones] in the array [basket] visually accross the board [player2 mySide]
            ////move those elements to player1 cached array [mancala]  
    //change turns
    //repeat for player 2 turn

    //ending the game:
    //when either players sum of the arrays [mySide] is < 1
    //the game is over
    //move any remaining elements [stones] in array [mySide] to cached array [mancala]
    //compare the total of each players final array [mancala]
    //if player1 total > player2 total
    //player1 wins
    //else player2 wins
