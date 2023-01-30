import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guesses from './Guesses'
import InputField from './InputField';
import { useState } from 'react';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userGuesses, setUserGuesses] = useState([])

  function addToGuesses(guess) {
    const nextGuesses = [...userGuesses, { guess: guess.toUpperCase(), id: Math.random() }]
    setUserGuesses(nextGuesses)
  }

  return <>
    <Guesses userGuesses={userGuesses} />
    <InputField addToGuesses={addToGuesses} />
  </>;
}

export default Game;
