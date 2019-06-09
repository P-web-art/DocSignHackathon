import React from 'react'
import sunset from '../imgs/sunset.jpg'
import '../index.css'
import {Button} from 'react-bootstrap'
import logo from '../imgs/treeLogo.png'

const Landing = () => {
  return (
    <div>
      <nav className = 'navLanding'>
        <h2> PlaceHolding Inc.</h2>
        <img src = {logo} alt = 'tree logo' className = 'treeLogo'/>
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
