import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";
let x = 0;
const CourseInput = ({ isEditing, editingData, onUpdateGoal, onAddGoal }) => {
  const [enteredValue, setEnteredValue] = useState("");
  if (isEditing && x === 0) {
    setEnteredValue(editingData.editingGoalText);
    x = 1;
  }
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim() === "") {
      setIsValid(false);
      return;
    }
    if (isEditing) {
      onUpdateGoal(enteredValue, editingData.editingGoalID);
      setEnteredValue("");
    } else {
      onAddGoal(enteredValue);
      setEnteredValue("");
    }
    x = 0;
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>To Do Goals</label>
        <input
          value={enteredValue}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      {isEditing ? (
        <Button type="submit">Edit Goal</Button>
      ) : (
        <Button type="submit">Add Goal</Button>
      )}
    </form>
  );
};

export default CourseInput;
