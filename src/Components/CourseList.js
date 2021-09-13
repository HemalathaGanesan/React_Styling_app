import "./CourseList.css";

const CourseList = (props) => {
const deleteHandler=()=>{
  props.onDelete(props.id)
}

  return (
    <div className="course-list">
      <p onClick={deleteHandler}>{props.title}</p>
    </div>
  );
};

export default CourseList;
