import React from 'react'
import {Form, Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const test = {name: "Billy joe", title: "Camping at Area 51?", id: 1, threads: [{name: "Bob", post: "This looks fun!"}, {name: "Billy", post: "I like turtles"}, {name: "Joe", post: "jello shots"}]}

const Thread = () => {


    return (
        <div className = 'Thread'> 
        <Card> 
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
         } )}
        </Card>
        <Link to = '/events'> <button> Create Event </button> </Link>
        </div>
    )
}

export default Thread