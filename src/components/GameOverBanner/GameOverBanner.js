import React from "react";

function GameOverBanner({ numOfGuesses, variant, children }) {
  const bannerClass = variant === 'win' ? "happy banner" : "sad banner"
  return (
    <div className={bannerClass}>
      {children}
    </div >
  )
}

export default GameOverBanner;
