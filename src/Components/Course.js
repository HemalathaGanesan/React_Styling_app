import CourseList from "./CourseList";
import "./Course.css";

const Course = (props) => {
  console.log(props.courseGoals);

  const deletecourseItem=(id)=>{
    props.courseDelete(id);
  }
  return (
    <div className="courses">
      {props.courseGoals.length === 0 ? (
        <p style={{fontSize:"20px",fontWeight:"bold"}}>No data found</p>
      ) : (
        props.courseGoals.map((course) => (
          <CourseList 
          key={course.id} 
          title={course.title} 
          id={course.id}
          onDelete={deletecourseItem}
          />
        ))
      )}
    </div>
  );
};

export default Course;
