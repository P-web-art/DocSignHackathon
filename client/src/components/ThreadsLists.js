import React from 'react'
import {Form, Card, Button} from 'react-bootstrap'


const fake = [
    {name: "test1", title: "thread 1", id: 1},
    {name: "test2", title: "thread 2", id: 2},
    {name: "test3", title: "thread 3", id: 3},
    {name: "test4", title: "thread 4", id: 4},
    {name: "test5", title: "thread 5", id: 5}
  ]

const ThreadsLists = (props) => {

    const handleClick = (id) => {
        props.history.push(`/thread/${id}`)
    }

    return (
        <div> 
        <Card> 
        <h1> Threads</h1>
        {fake.map((thread, i) => {
            return ( 
            <div key = {i}>
                <h1>{ thread.name}</h1>
                <p>{thread.title }</p>
                <button onClick = { () => handleClick(thread.id)}> Go to Thread   </button>
            </div>)}
        )}
        </Card>
        </div>
    )
}

export default ThreadsLists