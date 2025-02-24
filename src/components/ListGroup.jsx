import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import ListItem from "./ListItem";

const ListGroup = () => {
  const { feedbacks } = useContext(FeedbackContext);

  return (
    <ul className="my-3 list-group">
      {feedbacks.map((feedback) => (
        <ListItem key={feedback.id} feedback={feedback} />
      ))}
    </ul>
  );
};

export default ListGroup;
