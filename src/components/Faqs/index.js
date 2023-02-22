// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg">
        <div className="sub-container">
          <h1 className="heading">FAQs</h1>
          <ul>
            {faqsList.map(eachList => (
              <FaqItem eachList={eachList} key={eachList.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
