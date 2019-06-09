import React, {useState} from 'react'
import {Form, Card, Button} from 'react-bootstrap'
import {Map, GoogleApiWrapper} from 'google-maps-react'


const Events = (props) => {

  let currentDate = new Date();
  let postDate = currentDate.getDate();

  const [eventName, eventNameHandler] = useState('')
  const [ date, dateHandler] = useState('')
  const [datePosted] = useState(postDate)
  const [description, descriptionHandler] = useState('')

  const handleSubmit = (e) => {
    axios.post 
    e.preventDefault()
    console.log( ` Your event is ${eventName} on ${date} posted on ${datePosted} and is about ${description}`)
  }

  const onChangeEventName = (e) => {
    eventNameHandler(
      e.target.value
    )
  }

  const onChangeDate = (e) => {
    dateHandler(
      e.target.value
    )
  }

  const onChangeDescription = (e) => {
    descriptionHandler(
      e.target.value
    )
  }
  
  

  return (
    <div>
    
    <Card style = {{ width: '30rem'}} className = 'createEventCard'> 


      <h1>Create Event</h1>
      <Form onSubmit={(e) => handleSubmit(e)}> 
      <Form.Group controlId="formGridName">
          <Form.Label> Event Name </Form.Label>
          <Form.Control
                type="EventName"
                placeholder="Enter Event Name"
                name= "EventName"
                value={eventName} 
                onChange={ (e) => onChangeEventName(e)}
                required
              />
         </Form.Group>
         <Form.Group controlId="formGridName">
          <Form.Label> Date of Event </Form.Label>
          <Form.Control
                type="date"
                placeholder="Enter Event Date"
                value={date}
                onChange={ (e) => onChangeDate(e)}
                required
              />
         </Form.Group>
         <Form.Group controlId="formGridName">
          <Form.Label> Description </Form.Label>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control value = {description} onChange = { (e) => onChangeDescription(e)} as="textarea" rows="3" />
          </Form.Group>
         </Form.Group>
         <Button variate = 'primary' type ='submit'> Create Account </Button>
      </Form>
    </Card>

    </div>
  )
}

export default GoogleApiWrapper( {
  apiKey:'AIzaSyBlEoNanUayf0fOkwj0qeRs-q6woFZtAoI'
}) (Events);