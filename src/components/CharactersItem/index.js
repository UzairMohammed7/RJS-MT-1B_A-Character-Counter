import './index.css'

const CharactersItem = props => {
  const {charDetails} = props
  const {characterInput} = charDetails
  const charLength = characterInput.length

  return (
    <li className="list">
      <p className="character-and-count">
        {characterInput}: {charLength}
      </p>
    </li>
  )
}

export default CharactersItem
