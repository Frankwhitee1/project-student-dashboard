import { useState } from "react";
import Student from "./data/student";

export default function OneOnOne({student}) {
    // console.log(student)
    const [notes, setNotes]= useState(student.notes);
    const [currentNote, setCurrentNote] = useState({
        commenter : "",
        comment : "",
    })

    // const handleAddNote = (noteObj) => setNotes([...notes, noteObj])

    const handleTextChange = (event) => {
        setCurrentNote({...currentNote,
            [event.target.id]: event.target.value})
    } 


    const handleSubmit = (event)=> {
        event.preventDefault();
        setNotes([...notes, currentNote])

    }



    return (
        <div>
            <p>1-on-1 Notes</p>
            <form action="">
                <label htmlFor=""> Commenter Name
                    <input type="text" id="commenter" onChange={handleTextChange}/>
                </label>

                <label htmlFor=""> Comment 
                    <input type="text" id="comment" onChange={handleTextChange}/>
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </form>
            <ul>
                {notes.map((note) => <li key={note.comment}>
                    {` ${note.commenter} says "${note.comment}"`}
                </li>)}
            </ul>
            

        </div>
        
    )
}