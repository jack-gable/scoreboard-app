let homeScore = document.getElementById("home")
let guestScore = document.getElementById("guest")

let scoreHome = 0
let scoreGuest = 0

function add1PointHome() {
    scoreHome += 1
    homeScore.textContent = scoreHome
}

function add2PointHome() {
    scoreHome += 2
    homeScore.textContent = scoreHome
}

function add3PointHome() {
    scoreHome += 3
    homeScore.textContent = scoreHome
}

function add1PointGuest() {
    scoreGuest += 1
    guestScore.textContent = scoreGuest
}

function add2PointGuest() {
    scoreGuest += 2
    guestScore.textContent = scoreGuest
}

function add3PointGuest() {
    scoreGuest += 3
    guestScore.textContent = scoreGuest
}