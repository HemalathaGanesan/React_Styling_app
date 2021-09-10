import CourseList from "./CourseList";
import "./Course.css";

const Course = (props) => {
  console.log(props.courseGoals);
  return (
    <div className="courses">
      {props.courseGoals.length === 0 ? (
        <p>no</p>
      ) : (
        props.courseGoals.map((course) => (
          <CourseList key={course.id} title={course.title} />
        ))
      )}
    </div>
  );
};

export default Course;
