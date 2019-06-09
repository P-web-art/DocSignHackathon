import React from 'react'
import {Form, Card, Button} from 'react-bootstrap'
import NavBar from './NavBar'
import CarouselThreads from './Carousel'
import '../index.css'


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
        <> 
        <NavBar />
        <div className = 'title'> 
        <h1> Forest Happenings</h1>
        </div>
        <CarouselThreads />

        {fake.map((thread, i) => {
            return ( 
                <Card className = 'ThreadsListCard'> 
            <div key = {i} className = 'threadBlock'>
                <div className = 'threadsName'>
                <h1>{ thread.name}</h1>
                </div>
                <div className = 'threadsTitle'> 
                <h4>{thread.title }</h4>
                </div>
                <div className = 'threadsButton'> 
                <button onClick = { () => handleClick(thread.id)}> Go to Thread   </button>
                </div>
            </div>
            </Card>
            )}
           
        )}

        </>
    )
}

export default ThreadsLists