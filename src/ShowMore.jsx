import OneOnOne from "./OneonOne"


export default function ShowMore({student}) {
    
   return (
    <div>
        <p>Codewars:</p>
       <ul>
        <li>Current Total: {student.codewars.current.total}</li>
        <li>Last Week: {student.codewars.current.lastWeek}</li>
        <li>Goal: {student.codewars.goal.total}</li>
        <li>Percent of goal Achieved: {Math.round((student.codewars.current.total /student.codewars.goal.total) * 100 )} %</li>
       </ul>
       <p>Scores</p>
       <ul>
        <li>Assignments: {student.cohort.scores.assignments} %</li>
        <li>Projects: {student.cohort.scores.projects} %</li>
        <li>Assessments: {student.cohort.scores.assessments} %</li>
       </ul>
       <p>Certifications</p>
       <ul>
        <li>Resume: {student.certifications.resume ? "✅" : "❌"}</li>
        <li>LinkedIn: {student.certifications.linkedin ? "✅" : "❌"}</li>
        <li>Mock Interview: {student.certifications.mockInterview ? "✅" : "❌"}</li>
        <li>GitHub: {student.certifications.github ? "✅" : "❌"}</li>
       </ul>
       <OneOnOne student={student}/>
    </div>
   )
}