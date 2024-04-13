import { useState } from "react";
import CohortList from "./Cohortlist.jsx";
import Studentlist from "./StudentList.jsx";
import data from "./data/data.json";




function App() {
  const [students, setStudents] = useState(data)
  return (
    <div>
      <h1>Student Dashboard</h1>
      <CohortList cohorts={students.map(student => student.cohort)} />
      <Studentlist students={students}/>
    </div>
  );
}

export default App;
