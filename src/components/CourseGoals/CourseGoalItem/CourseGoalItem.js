import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  const editHandler = () => {
    props.onEdit(props.id);
  };

  return (
    <li className="goal-item">
      <div className="text"> {props.text}</div>
      <div className="actions">
        <span onClick={editHandler}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </span>
        <span onClick={deleteHandler}>
          <FontAwesomeIcon icon={faTrashCan} />
        </span>
      </div>
    </li>
  );
};
export default CourseGoalItem;
