import { useState } from "react";
import CohortList from "./Cohortlist.jsx";
import Studentlist from "./StudentList.jsx";
import data from "./data/data.json";
import "./index.css";



function App() {
  const [students, setStudents] = useState(data)
  const [fileterdStudent, setFilteredStudents] = useState(data)
  const [allStudents, setAllStudents] = useState(data)

  function filterStudents(cohortCode) {

    const newStudents = students.filter(student => student.cohort.cohortCode === cohortCode );

    setFilteredStudents(newStudents);

  }


  return (
    <div>
      <h1>Student Dashboard</h1>
      <CohortList cohorts={students.map(student => student.cohort)} filterStudents={filterStudents} />
      <Studentlist students={fileterdStudent}/>
    </div>
  );
}

export default App;
