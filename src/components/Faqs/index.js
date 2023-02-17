// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {status: false, showId: null}

  clickEvent = id => {
    const {status, showId} = this.state
    this.setState({status: !status})
    this.setState({showId: id})
  }

  render() {
    const {faqsList} = this.props
    const {status, showId} = this.state
    return (
      <div className="bg">
        <div className="sub-container">
          <h1 className="heading">FAQs</h1>
          <ul>
            {faqsList.map(eachList => (
              <FaqItem
                eachList={eachList}
                key={eachList.id}
                status={status}
                showId={showId}
                clickEvent={this.clickEvent}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
