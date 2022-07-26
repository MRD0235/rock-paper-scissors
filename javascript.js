let computerWins = 0
let playerWins = 0
let tieResults = 0

const addonPara = document.createElement('p')
const addonDiv = document.createElement('div')
const body = document.querySelector('body')
const div = document.querySelector('#results')
const buttons = document.querySelectorAll('button:not([id=reset])')
const resetBtn = document.querySelector('#reset')

resetBtn.addEventListener('click', resetGame)

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // console.log(button.id)
        outputMessage = playGame(button.id)
        div.textContent = outputMessage
        body.appendChild(div)
        // console.log(computerWins)
        // console.log(playerWins)
        // console.log(tieResults)
        addonPara.textContent = `Computer: ${computerWins} Player: ${playerWins} Tie: ${tieResults}`
        div.appendChild(addonPara)
        if (computerWins === 5) {
            addonDiv.textContent = "The computer wins!"
            div.appendChild(addonDiv)
            resetGame()
            computerWins = 0
            playerWins = 0
            tieResults = 0
        } else if (playerWins === 5) {
            addonDiv.textContent = "The player wins!"
            div.appendChild(addonDiv)
            resetGame()
            computerWins = 0
            playerWins = 0
            tieResults = 0
        }
    })
})

function resetGame() {
    div.textContent = ""
    addonPara.textContent = "" 
    computerWins = 0
    playerWins = 0
    tieResults = 0
}

function playGame(playerInput) {
    let playerSelection = playerInput
    let computerSelection = getComputerChoice()
    let gameWinner = playRound(playerSelection, computerSelection)
    let outputMessage
    switch(gameWinner) {
        case "tie":
            outputMessage = "The game ended in a tie"
            tieResults++
            break
        case "computer":
            outputMessage = "The computer won the game :("
            computerWins++
            break
        case "player":
            outputMessage = "The player won the game!"
            playerWins++
            break
    }
    //console.log(outputMessage)
    return outputMessage
}

function getComputerChoice() {
    let random = Math.floor(Math.random()*3) + 1
    switch(random) {
        case 1: return "rock"
        case 2: return "paper"
        case 3: return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    let winner
    if (playerSelection === "rock") {
        winner = (computerSelection == "rock") ? "tie" : 
            (computerSelection == "paper") ? "computer" :
            (computerSelection == "scissors") ? "player" : "error"
    } else if (playerSelection === "paper") {
        winner = (computerSelection == "rock") ? "player" : 
            (computerSelection == "paper") ? "tie" :
            (computerSelection == "scissors") ? "computer" : "error"
    } else if (playerSelection === "scissors") {
        winner = (computerSelection == "rock") ? "computer" : 
            (computerSelection == "paper") ? "player" :
            (computerSelection == "scissors") ? "tie" : "error"
    }
    return winner
}