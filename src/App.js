import React, { useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingData, setEditingData] = useState();

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };
  const updateHandler = (enteredText, goalId) => {
    console.log(enteredText, goalId);
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      const index = courseGoals.findIndex((goal) => goal.id === goalId);
      console.log(index);
      updatedGoals[index] = { text: enteredText, id: goalId };
      return updatedGoals;
    });
    setIsEditing(false);
  };
  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };
  const editHandler = (goalId) => {
    setIsEditing(true);
    console.log(goalId);
    const editingGoal = courseGoals.filter((goal) => goal.id === goalId);
    setEditingData({
      editingGoalID: editingGoal[0].id,
      editingGoalText: editingGoal[0].text,
    });
    console.log(editingData);
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList
        items={courseGoals}
        onEditItem={editHandler}
        onDeleteItem={deleteItemHandler}
      />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput
          editingData={editingData}
          isEditing={isEditing}
          onAddGoal={addGoalHandler}
          onUpdateGoal={updateHandler}
        />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
