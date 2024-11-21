// variables needed

let homeScore = 0
let guestScore = 0

// assign elements

let homeScoreEl = document.getElementById("score-home")
let guestScoreEl = document.getElementById("score-guest")
homeScoreEl.textContent = homeScore
guestScoreEl.textContent = guestScore

// scoring functions

function addHome(num) {
    homeScore += num
    homeScoreEl.textContent = homeScore
    if (homeScore > guestScore) {
        homeScoreEl.style.border = "1px solid green"
        guestScoreEl.style.border = "none"
    }
    else {
        homeScoreEl.style.border = "none"
    }
}

function addGuest(num) {
    guestScore += num
    guestScoreEl.textContent = guestScore
    if (guestScore > homeScore) {
        guestScoreEl.style.border = "1px solid green"
        homeScoreEl.style.border = "none"
    }
    else {
        guestScoreEl.style.border = "none"
    }
}

function newGame() {
    homeScore = 0
    guestScore = 0
    guestScoreEl.textContent = guestScore
    homeScoreEl.textContent = homeScore
}