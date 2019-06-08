import React, {useState} from 'react'
import '../index.css'
import {Form, Card, Button} from 'react-bootstrap'


const Login = () => {

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

      <Card style = {{ width: '22rem'}} className ="LoginCard"> 
      <h1>Login</h1>
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

  )
}

export default Login
