import { useState } from "react"

function InputField({ addToGuesses }) {
    const [inputText, setInputText] = useState('')

    function submitHandler(e) {
        e.preventDefault();
        console.log({ guess: inputText.toUpperCase() })
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
            />
            <span>Your guess must be 5 letters long.</span>
        </form>
    )
}

export default InputField