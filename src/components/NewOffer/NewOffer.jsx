// npm modules
import { useState } from "react"

// CSS
import styles from './NewOffer.module.css'

const NewOffer = (props) => {
  const [ formData, setFormData] = useState({
    comment: '',
    value: '',
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleInputChange = (evt) => {
    setFormData({...formData, [evt.target.name]:  evt.target.value.replace(/\D/g, "")})
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddOffer(formData)
    setFormData({ 
      comment: '',
      value: '',
    })
  }

  return (  
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2>Make New Offer</h2>
      <label htmlFor="value-input">Value:</label>
      <input 
        type="text" 
        name="value"
        id='value-input'
        pattern="^[0-9\b]+$"
        placeholder="offer amount"
        value={formData.value}
        onChange={handleInputChange}
      />
      <label htmlFor="comment-text">Comment:</label>
      <textarea 
        required
        id="comment-text"
        name="comment"
        value={formData.comment}
        placeholder='comment offer'
        onChange={handleChange}
      />
      <button type="submit">SUBMIT</button>
    </form>
  )
}

export default NewOffer