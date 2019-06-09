  import sunset from '../imgs/sunset.jpg'
import '../index.css'
import {Button} from 'react-bootstrap'
import logo from '../imgs/treeLogo.png'
import React, { useEffect, useState} from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom"

const Landing = (props) => {

  // const [test, changetest] = useState("fdsfs")

  // useEffect(() => {
  //  async function test() {
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/test")
  //       changetest(response.data.test)
  //       } catch(err) {
  //         console.log(err)
  //       }
        
  //     }
  //     test()
  //   }, [])
  if(props.auth) {
    return <Redirect to="/create-topic" />
  }

  return (
    <div>
      <nav className = 'navLanding'>
        <h2> PlaceHolding Inc.</h2>
        <img src = {logo} alt = 'tree logo' className = 'landingtreeLogo'/>
      </nav>
    <div className = 'landingContainer'>
      <img src = {sunset} className = 'landingImg' alt ='picnic on mountain'/>
      <div className = 'landingText'>
      <div className = 'textContainer'> 
        <div className = 'innertext'>
          <h1> Be apart of our wonderful community</h1>
        
        <div>
          <p> Create memorable experiences, enjoy nature while telling us what you would like to see more of.</p>
        </div>
        <Button  className = 'loginButton'  href = '/login'>Login</Button>
        <Button  className = 'signupButton' href = '/signup'>Sign Up</Button>   
        </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Landing
