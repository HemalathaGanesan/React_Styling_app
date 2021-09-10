import { useState } from "react";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [courseGoal, setCourseGoal] = useState("");
  const [isVaild, setIsVaild] = useState(true);

  const addCourseHandler = (event) => {
    if (event.target.value.trim().length > 1) {
      setIsVaild(true);
    }
    setCourseGoal(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const courseGoalData = {
      title: courseGoal,
      id: Math.random().toString(),
    };
    if (courseGoalData.title.trim().length === 0) {
      setIsVaild(false);
      return;
    }
    props.getAddedCourse(courseGoalData);
    setCourseGoal("");
  };

  return (
    <div className="course">
      <div className={`course-inner ${!isVaild ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={addCourseHandler}
          value={courseGoal}          
        ></input>
      </div>
      <div className="course-action">
        <button type="submit" onClick={submitHandler}>
          Add Goal
        </button>
      </div>
    </div>
  );
};

export default CourseInput;
