// Write your code here
import './index.css'
import {Component} from 'react'

class SuggestionItem extends Component {
  selected = () => {
    const {data, selectedSearch} = this.props
    const res = data.suggestion
    selectedSearch(res)
  }

  render() {
    const {data} = this.props
    const res = data.suggestion
    console.log(this.props)
    return (
      <li className="results">
        <p>{res}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          onClick={this.selected}
          className="up-arrow"
        />
      </li>
    )
  }
}

export default SuggestionItem
