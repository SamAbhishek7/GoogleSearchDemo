// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    search: '',
  }

  changedSearch = event => {
    this.setState({search: event.target.value})
  }

  getSuggestion = suggestion => {
    this.setState({search: suggestion})
  }

  render() {
    const {search} = this.state
    const {suggestionsList} = this.props
    const searchlist = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-logo"
        />
        <div>
          <div className="main-search">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                value={search}
                onChange={this.changedSearch}
                className="search-ele"
              />
            </div>
            <ul>
              {searchlist.map(each => (
                <SuggestionItem
                  details={each}
                  key={each.id}
                  suggestionClick={this.getSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
