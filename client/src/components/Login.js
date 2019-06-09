import React, {useState} from 'react'
import '../index.css'
import axios from "axios"
import { withRouter } from "react-router-dom"
import {Form, Card, Button} from 'react-bootstrap'


const Login = props => {

  const [email, handleEmail] = useState('')
  const [password, handlePassword ] = useState('')
  
  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
    const data = await axios.post("http://localhost:5000/api/users/login", {email, password})
    console.log(data)
    console.log("my props ",props)
    props.auth(true)
    props.history.push("/events")
    } catch(err) {
      console.log(err)
    }
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

export default withRouter(Login)
