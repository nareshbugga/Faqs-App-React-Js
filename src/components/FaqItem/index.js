// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {status: false}

  onStatus = () => {
    const {status} = this.state
    this.setState({status: !status})
  }

  render() {
    const {status} = this.state
    const {eachList} = this.props
    const {questionText, answerText} = eachList
    const url = status
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const text = status ? 'minus' : 'plus'
    return (
      <li>
        <div className="flex-button">
          <h1>{questionText}</h1>
          <button type="button" onClick={this.onStatus}>
            <img src={url} alt={text} />
          </button>
        </div>

        {status && <hr />}
        {status && <p>{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
