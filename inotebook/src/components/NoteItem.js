import React, {  useContext } from "react";
import noteContexts from '../context/notes/noteContexts';


function NoteItem(props) {
  const { note,updatenote } = props;
const context = useContext(noteContexts);
const {deleteNote}=context;

  return (
    <div className="col-md-4 mt-2" >
      <div className="card " style={{ width: "18rem" }}>
        {/* <im   g src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{note.title}
          <i className="fa-solid fa-trash-can mx-2"  onClick={()=>deleteNote(note._id)}></i>
          <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>updatenote(note)}></i>  
          </h5>
          <p className="card-text">{note.description}</p>
          
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
