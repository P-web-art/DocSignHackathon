import React from 'react'
import {Form, Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import NavBar from './NavBar'
import GoogleMapsContainer from './Google-Maps.js'

const test = {name: "Billy joe", title: "Camping at Area 51?", id: 1, threads: [{name: "Bob", post: "This looks fun!"}, {name: "Billy", post: "I like turtles"}, {name: "Joe", post: "jello shots"}]}

const Thread = () => {


    return (
        <> 
        <NavBar />
        <Card className = 'threadContainer'> 
        <GoogleMapsContainer />
        <div className = 'PostTitle'> 
            <div> 
             <h3>{test.title} </h3>
            </div>
            <div className = 'OP'> 
             <p> Posted by: {test.name}</p>
            </div>
        </div>
         {test.threads.map( commentors => {
             return (
                 <Card className = 'commentBody'> 
                <div className = 'individComments'> 
                <div className = 'commentorName'> 
                    <p>{commentors.name}</p>
                </div>
                <div className = 'comment'> 
                    <p>{commentors.post}</p> 
                </div>
                </div>   
                </Card>
             )
            })
         }
         <div className = 'threadbuttonContainer'>
        <Button className ='threadButton' href = '/events'> Let's do something 'bout it!  </Button>
        </div>
        </Card>
       </>
    )
}

export default Thread