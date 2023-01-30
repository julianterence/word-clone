import { checkGuess } from "../../game-helpers"

function Guess({ guess, answer }) {
    return (
        <p className="guess">
            {checkGuess(guess, answer).map(({ letter, status }, i) => (
                <span className={`cell ${status}`} key={i}>
                    {letter}
                </span>
            ))}
        </p>
    )
}

export default Guess