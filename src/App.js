import "./App.css";
import CourseInput from "./Components/CourseInput";
import Course from "./Components/Course";
import { useState } from "react";

function App() {
  const dummyGoal = [
    { id: 1, title: "first step of course" },
    { id: 2, title: "hemalathaganesan react course" },
    { id: 3, title: "work hard pays lot" },
  ];

  const [topic, setTopic] = useState(dummyGoal);

  const getCourseGoalsHandler = (goal) => {
    setTopic((previousState) => {
      return [goal, ...previousState];
    });
  };

  const deleteCourseGoalItem = (courseId) => {
    setTopic((previousState) => {
      const updatedGoals = previousState.filter((goal)=>
        goal.id !== courseId);
        return updatedGoals;
    });
  };
  return (
    <div className="course-main">
      <CourseInput getAddedCourse={getCourseGoalsHandler} />
      <Course courseGoals={topic} courseDelete={deleteCourseGoalItem} />
    </div>
  );
}

export default App;
