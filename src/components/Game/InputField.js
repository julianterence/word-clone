import { useState } from "react"

function InputField() {
    const [inputText, setInputText] = useState('')

    function submitHandler(e) {
        e.preventDefault();
        console.log({ guess: inputText })
        setInputText('')
    }

    return (
        <form className="guess-input-wrapper" onSubmit={submitHandler}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value.toUpperCase())}
                maxLength={5}
                minLength={5}
                pattern="[A-Za-z]{5}"
            />
            <span>Your guess must be 5 letters long.</span>
        </form>
    )
}

export default InputField