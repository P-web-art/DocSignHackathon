import React, {useState }from 'react';
import {Form, Button} from 'react-bootstrap'


function Signup() {
const [email, handleEmail, password, handlePassword ] = useState('')

const handleSumbit = (e) => {
  e.preventDefault();
  console.log(email)
}

const handleChange = (e) => {
  handleEmail(
    e.target.value
  )
}

  return (
    <div>
      <Form onSubmit = {(e) => handleSumbit(e)}   >
          <Form.Group controlId="formGridName">
          <Form.Label> Email </Form.Label>
          <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={ (e) => handleChange(e)}
                required
              />
         </Form.Group>
         {/* <Form.Group controlId="formGridName">
          <Form.Label> Password </Form.Label>
          <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={ (e) => handleChange(e)}
                required
              />
         </Form.Group> */}
         <Button variate = 'primary' type ='submit'> Create Account </Button>
      </Form>
    </div>
  )
  }

export default Signup
