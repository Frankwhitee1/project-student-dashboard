export default function CohortList({cohorts}) {

    const cohortCodes = cohorts.map(cohort => cohort.cohortCode)
    const uniqueCohorts = cohorts.filter((value, index) => cohortCodes.indexOf(value.cohortCode) === index)
    console.log(uniqueCohorts)
    return(
        <div>
            <p>Choose a Class by Start Date</p>
            <ul>
            {uniqueCohorts.map((cohort) => (<li key={cohort.cohortCode}>{cohort.cohortCode}</li>))}

            </ul>
            </div>
    );
}