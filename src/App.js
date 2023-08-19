import {Component} from 'react'

import ScoreCard from './components/ScoreCard'

import RulesPopup from './components/RulesPopup'

import {StyledBtn} from './components/Styling/StyledComponents'

import './App.css'

import ChoiceImage from './components/ChoiceImage'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    isImageSelected: false,
    result: '',
    myImage: '',
    opponentImg: '',
  }

  selected = id => {
    const OpponentItem = Math.floor(Math.random() * 3)

    console.log(OpponentItem)

    const OpponentSelectedImage = choicesList[OpponentItem]
    console.log(OpponentSelectedImage)

    const YouSelected = choicesList.find(each => each.id === id)

    console.log(YouSelected)

    this.setState({
      myImage: YouSelected.imageUrl,
      opponentImg: OpponentSelectedImage.imageUrl,
    })

    if (YouSelected === OpponentSelectedImage) {
      return this.setState({isImageSelected: true, result: 'DRAW'})
    }
    const MySelection = YouSelected.id

    switch (MySelection) {
      case 'ROCK':
        return OpponentSelectedImage.id === 'SCISSORS'
          ? this.setState(prev => ({
              isImageSelected: true,
              result: 'WON',
              score: prev.score + 1,
            }))
          : this.setState(prev => ({
              isImageSelected: true,
              result: 'LOSE',
              score: prev.score - 1,
            }))

      case 'SCISSORS':
        return OpponentSelectedImage.id === 'PAPER'
          ? this.setState(prev => ({
              isImageSelected: true,
              result: 'WON',
              score: prev.score + 1,
            }))
          : this.setState(prev => ({
              isImageSelected: true,
              result: 'LOSE',
              score: prev.score - 1,
            }))
      case 'PAPER':
        return OpponentSelectedImage.id === 'ROCK'
          ? this.setState(prev => ({
              isImageSelected: true,
              result: 'WON',
              score: prev.score + 1,
            }))
          : this.setState(prev => ({
              isImageSelected: true,
              result: 'LOSE',
              score: prev.score - 1,
            }))
      default:
        return null
    }
  }

  PlayAgain = () => {
    this.setState({isImageSelected: false})
  }

  resultIem = () => {
    const {result, myImage, opponentImg} = this.state
    return (
      <div className="result-container">
        {' '}
        <div className="images-container">
          <div className="img-container">
            <p className="choice-text">Your Choice</p>
            <img className="image-item" src={myImage} alt="your choice" />{' '}
          </div>
          <div className="img-container">
            <p className="choice-text">Opponent Choice</p>
            <img
              className="image-item"
              src={opponentImg}
              alt="opponent choice "
            />
          </div>
        </div>
        {result === 'DRAW' ? (
          <p className="result-text"> IT IS DRAW </p>
        ) : (
          <p className="result-text">YOU {result}</p>
        )}
        <StyledBtn type="button" onClick={this.PlayAgain}>
          Play Again
        </StyledBtn>{' '}
      </div>
    )
  }

  selectItem = () => (
    <ul className="choice-images-container">
      {choicesList.map(each => (
        <ChoiceImage key={each.id} item={each} selected={this.selected} />
      ))}
    </ul>
  )

  displayItem = () => {
    const {isImageSelected} = this.state

    return <>{isImageSelected ? this.resultIem() : this.selectItem()}</>
  }

  render() {
    const {score} = this.state
    return (
      <>
        <ScoreCard score={score} />
        <div className="body-container">{this.displayItem()} </div>

        <RulesPopup />
      </>
    )
  }
}

export default App
