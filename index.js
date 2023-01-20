let homeScoreId = document.getElementById('homeScore')
let guestScoreId = document.getElementById('guestScore')
let homeTitle = document.getElementById("homeTitle")
let guestTitle = document.getElementById("guestTitle");

let homeScoreResult = 0
let guestScoreResult = 0

//Start of Adding Score in Home
function add1home(){
    homeScoreResult += 1
    homeScoreId.innerHTML = homeScoreResult
}

function add2home(){
    homeScoreResult += 2
    homeScoreId.innerHTML = homeScoreResult
}

function add3home(){
    homeScoreResult += 3
    homeScoreId.innerHTML = homeScoreResult
}
//End of Adding Score in Home

//Start of Adding Score in Guest
function add1guest(){
    guestScoreResult += 1
    guestScoreId.innerHTML = guestScoreResult
}

function add2guest(){
    guestScoreResult += 2
    guestScoreId.innerHTML = guestScoreResult
}

function add3guest(){
    guestScoreResult += 3
    guestScoreId.innerHTML = guestScoreResult
}
//End of Adding Score in Guest

//Reset All Scores
function newGame(){
    homeScoreResult = 0
    guestScoreResult = 0
    homeScoreId.innerHTML = homeScoreResult
    guestScoreId.innerHTML = guestScoreResult
}