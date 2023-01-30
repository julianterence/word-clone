import { range } from "../../utils"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import { checkGuess } from "../../game-helpers"

function Guesses({ userGuesses, answer }) {

    return (
        <div className="guess-results">
            {
                userGuesses.map(({ guess, id }, i) => {
                    return (
                        <p className="guess" key={id}>
                            {checkGuess(guess, answer).map(({ letter, status }, i) => (
                                <span className={`cell ${status}`} key={i}>
                                    {letter}
                                </span>
                            ))}
                        </p>
                    )
                })
            }
            {
                userGuesses.length < NUM_OF_GUESSES_ALLOWED &&
                range(0, NUM_OF_GUESSES_ALLOWED - userGuesses.length).map((_, i) => (
                    <p className="guess" key={i}>
                        {range(5).map((_, i) => (
                            <span className="cell" key={i} />
                        ))}
                    </p>
                ))
            }
        </div>
    )
}

export default Guesses