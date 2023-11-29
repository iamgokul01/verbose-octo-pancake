// Write your code here
import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggesstions extends Component {
  state = {
    currArr: [],
  }

  constructor(props) {
    super(props)
    const initialData = props.suggestionsList
    this.setState({
      currArr: initialData,
    })
  }

  executeSearch = event => {
    const textVal = event.target.value
    const {suggestionsList} = this.props

    const filtered = suggestionsList.filter(each => {
      const title = each.suggestion.toLowerCase()
      return title.includes(textVal)
    })

    this.setState({
      currArr: filtered,
    })
  }

  selectedSearch = text => {
    const searchEl = document.getElementById('inputEl')
    searchEl.value = text
    console.log(searchEl)
    console.log(text)
  }

  render() {
    const {currArr} = this.state
    console.log(this.state)

    return (
      <div className="bg">
        <div className="search-engine-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="logo"
          />
          <div className="shadow-container">
            <div className="search-bar">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-logo"
                id="search-el"
              />
              <input
                type="search"
                onKeyUp={this.executeSearch}
                className="search-el"
                id="inputEl"
              />
            </div>
            <div className="suggestion-container">
              <ul className="searches">
                {currArr.map(each => {
                  console.log(each)
                  return (
                    <SuggestionItem
                      key={each.id}
                      data={each}
                      selectedSearch={this.selectedSearch}
                    />
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggesstions
