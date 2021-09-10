import "./CourseList.css";

const CourseList = (props) => {
  return (
    <div className="course-list">
      <p>{props.title}</p>
    </div>
  );
};

export default CourseList;
