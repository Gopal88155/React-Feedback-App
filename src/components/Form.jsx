import React, { useContext, useEffect, useState } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const Form = () => {

    const {dispatch , edit} = useContext(FeedbackContext)

    const [rating , setRating] = useState(0)
    const [review , setReview] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

       !edit.isEdit ?  dispatch({
        type :"ADD_FEEDBACK" ,
        payload : {id : crypto.randomUUID() , rating , review} 
    }) : dispatch({
        type : "UPDATE_FEEDBACK" ,
        payload : {id : edit.feedback.id , rating , review}
    })

        setRating(1)
        setReview("")
    }

    useEffect(() => {
        setRating(edit.feedback.rating)
        setReview(edit.feedback.review)
    } , [edit])




    return (

        <div className="card p-3 my-3 shadow-sm" onSubmit={handleSubmit}>
            <form >
                <select value={rating} className="form-select" onChange={e => setRating(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <textarea value={review} className="form-control my-3" placeholder="Enter Review Here" onChange={e => setReview(e.target.value)} required></textarea>
                <button className="btn btn-success my-2 w-100">Submit Review</button>
            </form>
        </div>

    )
}

export default Form
