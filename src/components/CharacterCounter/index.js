import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'

import CharactersItem from '../CharactersItem'

import './index.css'

class CharacterCounter extends Component {
  state = {
    charactersList: [],
    characterInput: '',
  }

  onEnterCharacter = event => {
    this.setState({characterInput: event.target.value})
  }

  onAddCharacter = event => {
    event.preventDefault()
    const {characterInput} = this.state
    const charId = {id: uuidV4(), characterInput}

    this.setState(prev => ({
      charactersList: [...prev.charactersList, charId],
      characterInput: '',
    }))
  }

  render() {
    const {charactersList, characterInput} = this.state

    return (
      <div className="main-container">
        <div className="count-container">
          <div className="heading-container">
            <h1 className="counter-heading">
              Count the characters like a Boss...
            </h1>
          </div>
          <div className="image-and-count-container">
            {charactersList.length > 0 ? (
              <ul>
                {charactersList.map(eachChar => (
                  <CharactersItem key={eachChar.id} charDetails={eachChar} />
                ))}
              </ul>
            ) : (
              <div className="img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="img"
                />
              </div>
            )}
          </div>
        </div>
        <div className="input-container">
          <h1 className="input-heading">Character Counter</h1>
          <form
            onSubmit={this.onAddCharacter}
            className="input-and-btn-container"
          >
            <div className="input-and-btn-container">
              <input
                className="input"
                type="text"
                placeholder="Enter the Characters here"
                onChange={this.onEnterCharacter}
                value={characterInput}
              />
              <button className="add-btn" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
