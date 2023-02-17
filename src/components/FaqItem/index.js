// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachList, status, clickEvent, showId} = props
  const {id, questionText, answerText} = eachList

  const onStatus = () => clickEvent(id)

  const url =
    status && id === showId
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const text = status && id === showId ? 'minus' : 'plus'

  return (
    <li>
      <div className="flex-button">
        <h1>{questionText}</h1>
        <button type="button" onClick={onStatus}>
          <img src={url} alt={text} />
        </button>
      </div>

      {status && id === showId && <hr />}
      {status && id === showId && <p>{answerText}</p>}
    </li>
  )
}

export default FaqItem
