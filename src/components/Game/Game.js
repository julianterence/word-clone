import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessList from './GuessList'
import InputField from './InputField';
import { useState } from 'react';
import GameOver from './GameOver';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([])
  const NUM_OF_GUESSES = guesses.length
  const [numOfGuesses, setNumOfGuesses] = useState(0)
  const [gameWon, setGameWon] = useState(false)
  const [gameLost, setGameLost] = useState(false)

  const WIN_STATEMENT = <p><strong>Congratulations!</strong> Got it in <strong>{NUM_OF_GUESSES} guess{NUM_OF_GUESSES > 1 && `es`}</strong></p>
  const LOSE_STATEMENT = <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>

  function addToGuesses(guess) {
    const nextGuesses = [
      ...guesses,
      { guess: guess.toUpperCase(), id: Math.random() }
    ]
    const nextNumOfGuesses = numOfGuesses + 1

    setGuesses(nextGuesses)
    setNumOfGuesses(nextNumOfGuesses)


    if (checkIfWon(guess)) {
      setGameWon(true)
      return;
    }
    if (nextNumOfGuesses === NUM_OF_GUESSES_ALLOWED) {
      setGameLost(true)
      return;
    }
  }

  function checkIfWon(guess) {
    return checkGuess(guess, answer).every(({ status }) => status === 'correct')
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <InputField addToGuesses={addToGuesses} numOfGuesses={numOfGuesses} />
      {
        (gameWon || gameLost) &&
        <GameOver numOfGuesses={numOfGuesses} variant={gameWon ? 'win' : 'lose'}>
          {gameWon && WIN_STATEMENT}
          {gameLost && LOSE_STATEMENT}
        </GameOver>
      }
    </>
  );
}

export default Game;
