import { createContext, useReducer } from "react";
import FeedbackReducer  from "./FeedbackReducer";

const FeedbackContext = createContext()

// provider
export const FeedbackProvider = ({ children }) => {

    const initialState = {

        feedbacks : [{id : 1 , rating : 5 , review : "Good Product From Reducer"}] ,
        edit : {feedback : {} , isEdit : false}
    }



    const [state , dispatch] = useReducer(FeedbackReducer ,initialState )




    return (
        <FeedbackContext.Provider value={{...state , dispatch}} >
            {children}
        </FeedbackContext.Provider>
    )



}





export default FeedbackContext