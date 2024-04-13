export default function CohortList({cohorts}) {

    const cohortCodes = cohorts.map(cohort => cohort.cohortCode)
    const uniqueCohorts = cohorts.filter((value, index) => cohortCodes.indexOf(value.cohortCode) === index)
    console.log(uniqueCohorts)
    return(
        <div>
            <p>Choose a Class by Start Date</p>
            {uniqueCohorts.map((cohort) =>  
            (<ul>{cohort.cohortCode}</ul>))}
            </div>
    );
}