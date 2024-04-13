import Student from "./data/student";

export default function StudentList({ students }) {
    return (
      <div>
        <h1>All Students</h1>
        <p>Total Students: {students.length}</p>
        <ul>
        {students.map((student) => {
            // console.log(student);
             return <Student key={student.id} student={student}/>}
        )}
        </ul>
      </div>
    );
  }