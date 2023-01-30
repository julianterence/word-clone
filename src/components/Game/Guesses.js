function Guesses({ userGuesses }) {
    return (
        <div className="guess-results">
            {
                userGuesses.map(({ guess, id }) => (
                    <p className="guess" key={id}>{guess}</p>
                ))
            }
        </div>
    )
}

export default Guesses