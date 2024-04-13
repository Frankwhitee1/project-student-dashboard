import ShowMore from "../ShowMore.jsx";


export default function Student({student}) {
    return (
    <div>
        <ul>
        <img src={student.profilePhoto} alt="student-photo"/>
        <p>{student.names.preferredName} {student.names.middleName[0]}. {student.names.surname}  </p>
        <p>{student.username}</p>
        <p>{new Date(student.dob).toLocaleDateString()}</p>
        </ul>
        <ShowMore/>
    </div>)
}