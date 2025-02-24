import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const ListItem = ({ feedback }) => {
  const { dispatch } = useContext(FeedbackContext);

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_FEEDBACK",
      payload: id,
    });
  };

  const handleEdit = (feedback) => {
    dispatch({
      type: "EDIT_FEEDBACK",
      payload: feedback,
    });
  };

  return (
    <li className="list-group-item shadow-lg">
      <h1>Rating : {feedback.rating} </h1>
      <p> Review : {feedback.review} </p>
      <span className="float-end">
        <button
          className="btn btn-warning btn-sm"
          onClick={() => handleEdit(feedback)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm mx-2"
          onClick={() => handleDelete(feedback.id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;


