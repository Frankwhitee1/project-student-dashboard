export default function CohortList({cohorts, filterStudents}) {

    const cohortCodes = cohorts.map(cohort => cohort.cohortCode)
    const uniqueCohorts = cohorts.filter((value, index) => cohortCodes.indexOf(value.cohortCode) === index)
    
    return(
        <div id="cohort-list">
            <p>Choose a Class by Start Date</p>
            <button>All Students</button>
            <ul>
            {uniqueCohorts.map((cohort) => (<li key={cohort.cohortCode} onClick={() => filterStudents(cohort.cohortCode)}>{cohort.cohortCode}</li> ))}

            </ul>
            </div>
    );
}