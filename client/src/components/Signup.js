import React, {useState }from 'react';
import {Form, Card, Button} from 'react-bootstrap'
import '../index.css'

function Signup() {

const [email, handleEmail] = useState('')
const [password, handlePassword ] = useState('')

const handleSumbit = (e) => {
  e.preventDefault();
  console.log(email, password)
}

const handleEmailChange = (e) => {
  handleEmail(
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

      <Form onSubmit = {(e) => handleSumbit(e)}   >
      <Card style = {{ width: '18rem'}} className ="signUpCard"> 
      <Card.Body>
      <h1>Sign Up</h1>
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
         </Card.Body>
         </Card>
      </Form>
    </div>
  )
  }

export default Signup
