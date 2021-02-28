// global variables
let computerChosen
let userChosen
let result
let userScore = 0
let computerScore = 0
let flag = true


// querySelectors
const displayResult = document.querySelector('#result')
const userChoice = document.querySelector('#user-choice')
const possibleChoices = document.querySelectorAll('.choices')
const computerChoice = document.querySelector('#computer-choice')
const scoreUser = document.querySelector('#user-score')
const scoreComputer = document.querySelector('#computer-score')
const winnerScreen = document.querySelector('.winner')
const winner = document.querySelector('#winner')
const tryAgain = document.querySelector('#try-again')
const tab = document.querySelector('#battle-log')

tab.innerHTML = ''
tab.size = 0


// game function
function game() {
    possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
        if (!flag) return // stop the game
        userChosen = e.target.id
        generatedComputerChoice()
        userChoice.innerHTML = userChosen
        computerChoice.innerHTML = computerChosen
        results()
        scoreUser.innerHTML = userScore
        scoreComputer.innerHTML = computerScore
        displayResult.innerHTML = result
    }))

}




// get a random computer choice
function generatedComputerChoice() {
    let randomNumber = Math.ceil(Math.random() * (3))
    if (randomNumber === 1) {
        return computerChosen = 'rock'
    } else if (randomNumber === 2) {
        return computerChosen = 'paper'
    } else if (randomNumber === 3) {
        return computerChosen = 'scissors'
    }
}

// get Results

function results() {
    if (computerChosen === userChosen && computerChosen != undefined && userChosen != undefined) {
        return result = 'There was a tie! Go ahead.'
    } else if (computerChosen === 'rock' && userChosen === 'paper') {
        userScore++
        return result = 'You Won this round! Paper beats Rock'
    } else if (computerChosen === 'rock' && userChosen === 'scissors') {
        computerScore++
        return result = 'You Lost this round! Rock beats Scissors'
    } else if (computerChosen === 'paper' && userChosen === 'rock') {
        computerScore++
        return result = 'You Lost this round! Paper beats Rock'
    } else if (computerChosen === 'paper' && userChosen === 'scissors') {
        userScore++
        return result = 'You Won this round! Scissors beats Paper'
    } else if (computerChosen === 'scissors' && userChosen === 'rock') {
        userScore++
        return result = 'You Won this round! Rock beats Scissors'
    } else if (computerChosen === 'scissors' && userChosen === 'paper') {
        computerScore++
        return result = 'You Lost this round! Scissors beats Paper'
    }
}


function checkScore() {
    if (userScore == 5 || computerScore == 5) {
        let winnerPlayer = userScore < computerScore ? 'Sorry! Computer' : 'Congratulations! You'
        winnerScreen.style.visibility = 'visible'
        winner.innerHTML = `${winnerPlayer} won the best of 5 rounds!`
        if (flag) {
            tab.style.visibility = 'visible'
            tab.size++
            let item = document.createElement('option')
            item.text = `${winnerPlayer} won the best of 5 rounds! - You ${userScore} x ${computerScore} Computer`
            tab.appendChild(item)
        }
        flag = false
        tryAgain.addEventListener('click', clear)
    }
}

function clear() {
    flag = true
    userScore = 0
    computerScore = 0
    userChoice.innerHTML = ''
    computerChoice.innerHTML = ''
    scoreUser.innerHTML = '0'
    scoreComputer.innerHTML = '0'
    displayResult.innerHTML = ''
    winnerScreen.style.visibility = 'hidden'
}

game()
window.addEventListener('click', checkScore)