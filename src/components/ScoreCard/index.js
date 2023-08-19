import './index.css'

const ScoreCard = props => {
  const {score} = props

  return (
    <div className="scorecard-container">
      <h1 className="heading">
        Rock
        <br className="br" /> Paper <br className="br" />
        Scissors
      </h1>
      <div className="scorecard-bar">
        <p className="score-text">Score</p>
        <p className="score-text score-digit ">{score}</p>
      </div>
    </div>
  )
}

export default ScoreCard
