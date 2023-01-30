import { range } from "../../utils"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import Guess from "./Guess"

function GuessList({ guesses, answer }) {

    return (
        <div className="guess-results">
            {
                guesses.map(({ guess, id }, i) => {
                    return (
                        <Guess guess={guess} answer={answer} key={id} />
                    )
                })
            }
            {
                guesses.length < NUM_OF_GUESSES_ALLOWED &&
                range(0, NUM_OF_GUESSES_ALLOWED - guesses.length).map((_, i) => (
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

export default GuessList