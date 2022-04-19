// disable guesses if not in playing state
// create new mwthod that returns a string with a status message from below:

// playing: guesses left: 3
// failed: nice try the word was cat!
// finished : great job you guessed the word!


const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ""
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += "*"
        }
    }) 
    return puzzle
}


Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (this.status !== 'playing') {
        return
    }

    if (isUnique) {
        this.guessedLetters.push(guess)
    }
    
    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }
    this.calculateStatus()
}

Hangman.prototype.calculateStatus = function () {
    const lettersUnguessed = this.word.filter((letter) => !this.guessedLetters.includes(letter))
    const finished = lettersUnguessed.length === 0

    if (this.remainingGuesses <= 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else{
        this.status = 'playing'
    }
}

Hangman.prototype.statusMessage = function () {
    if (this.status === 'playing') {
        return `guesses left: ${this.remainingGuesses}`
    } else if (this.status === 'failed') {
        return `nice try the word was cat!`
    } else 
    return `great job you guessed the word!`
}