import './index.css'

const SuggestionItem = props => {
  const {details, suggestionClick} = props
  const {suggestion} = details
  return (
    <div className="list-item-container">
      <li className="list-component">{suggestion}</li>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow-component"
        alt="arrow"
        onClick={() => suggestionClick(suggestion)}
      />
    </div>
  )
}

export default SuggestionItem
