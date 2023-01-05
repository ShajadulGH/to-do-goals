import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

const CourseGoalList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          text={goal.text}
          onDelete={props.onDeleteItem}
          onEdit={props.onEditItem}
        />
      ))}
    </ul>
  );
};

export default CourseGoalList;
