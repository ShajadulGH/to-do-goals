import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item">
      {props.children}
      <div className="actions">
        <span>
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
