import React, {useState} from 'react'
import {Form, Card, Button} from 'react-bootstrap'
// import {Map, GoogleApiWrapper} from 'google-maps-react'

const CreateTopic = (props) => {

  let currentDate = new Date();
  let postDate = currentDate.getDate();

  const [ThreadName, ThreadNameHandler] = useState('')
  const [ description, descriptionHandler] = useState('')
  const [ location, locationHandler] = useState('')
  const [datePosted] = useState(postDate)
  // const [image, imageHandler] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log( ` Title ${ThreadName} Descrip: ${description} posted on: ${datePosted} `)
  }

  const onChangeThreadName = (e) => {
    ThreadNameHandler(
      e.target.value
    )
  }

  const onChangeDescritpion = (e) => {
    descriptionHandler(
      e.target.value
    )
  }
  
  // const fileChangedHandler = (e) => {
  //   imageHandler(
  //     e.target.value
  //   )
  // }

  const onChangeLocation = (e) => {
    locationHandler(
      e.target.value
    )
  }

  return (
    <div>
    
    <Card style = {{ width: '30rem'}} className = 'createEventCard'> 

      <h1>New Thread</h1>
      <Form onSubmit={(e) => handleSubmit(e)}> 

      <Form.Group controlId="formGridName">
          <Form.Label> Post Title </Form.Label>
          <Form.Control
                type="EventName"
                placeholder="Enter Post Title"
                name= "EventName"
                value={ThreadName} 
                onChange={ (e) => onChangeThreadName(e)}
                required
              />
         </Form.Group>
         <Form.Group controlId="formGridName">
          <Form.Label> Location </Form.Label>
          <Form.Control
                type="text"
                placeholder="Enter Event Location"
                value={location}
                onChange={ (e) => onChangeLocation(e)}
                required
              />
         </Form.Group>
         <Form.Group controlId="formGridName">
          <Form.Label> Description </Form.Label>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control value = {description} onChange = { (e) => onChangeDescritpion(e)} as="textarea" rows="3" />
          </Form.Group>
         </Form.Group>
      {/* <Form.Group controlId="formGridName">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control
                type="file"
                placeholder="Enter an Image"
                value={image}
                onChange={ (e) => fileChangedHandler(e)}
              />
         </Form.Group> */}
         <Button variate = 'primary' type ='submit'> Create Thread </Button>
         </Form>
    </Card>

    </div>
  )
}

export default CreateTopic