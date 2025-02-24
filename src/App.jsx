import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import ListGroup from './components/ListGroup'
import { FeedbackProvider } from './context/FeedbackContext'


const App = () => {



  return (
    <FeedbackProvider>

      <Navbar />
      <div className="container p-5">
        <h1 className="text-center">Feedback APP</h1>
        <Form />
        <ListGroup />
      </div>

    </FeedbackProvider>
  )
}

export default App
