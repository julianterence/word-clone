import React from "react";
import { useState } from "react"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function InputField({ addToGuesses, numOfGuesses }) {
  const [inputText, setInputText] = useState('')

  function submitHandler(e) {
    e.preventDefault();
    addToGuesses(inputText)
    setInputText('')
  }

  return (
    <form className="guess-input-wrapper" onSubmit={submitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        maxLength={5}
        minLength={5}
        style={{ textTransform: 'uppercase' }}
        disabled={numOfGuesses >= NUM_OF_GUESSES_ALLOWED}
      />
      <span>Your guess must be 5 letters long.</span>
    </form>
  )
}

export default InputField