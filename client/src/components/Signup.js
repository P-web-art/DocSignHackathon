import React, {useState }from 'react';
import {Form, Card, Button} from 'react-bootstrap'
import '../index.css'

function Signup() {

const [email, handleEmail] = useState('')
const [password, handlePassword ] = useState('')
const [name, handleName ] = useState('')

const handleSumbit = (e) => {
  e.preventDefault();
  console.log(email, password)
}

const handleEmailChange = (e) => {
  handleEmail(
    e.target.value
  )
}

const handleNameChange = (e) => {
  handleName(
    e.target.value
  )
}

  const handlePasswordChange = (e) => {
    handlePassword(
      e.target.value
    )
}

  return (
    <div>
      <Card style = {{ width: '22rem'}} className ="signUpCard"> 
      <h1>Sign Up</h1>
      <Card.Body>
      <Form onSubmit = {(e) => handleSumbit(e)}   >
          <Form.Group controlId="formGridName">
          <Form.Label> Email </Form.Label>
          <Form.Control
                type="email"
                placeholder="Enter Email"
                name= "email"
                value={email}
                onChange={ (e) => handleEmailChange(e)}
                required
              />
         </Form.Group>
          <Form.Group controlId="formGridName">
          <Form.Label> Name </Form.Label>
          <Form.Control
                type="text"
                placeholder="Enter Name"
                name= "name"
                value={name}
                onChange={ (e) => handleNameChange(e)}
                required
              />
         </Form.Group>
         
         <Form.Group controlId="formGridPassword">
          <Form.Label> Password </Form.Label>
          <Form.Control
                type="password"
                placeholder="password"
                name="password"
                value={password}
                onChange={ (e) => handlePasswordChange(e)}
                required
              />
         </Form.Group>
          <Button variate = 'primary' type ='submit'> Create Account </Button>
          </Form>   
         </Card.Body>
         </Card>

    </div>
  )
  }

export default Signup
