function GameOver({ numOfGuesses, variant, children }) {
    const bannerClass = variant === 'win' ? "happy banner" : "sad banner"
    return (
        <div className={bannerClass}>
            {children}
        </div >
    )
}

export default GameOver