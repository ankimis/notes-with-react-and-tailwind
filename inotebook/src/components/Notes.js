import React, { useContext, useEffect, useRef ,useState} from "react";
import noteContexts from "../context/notes/noteContexts";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";


function Notes() {
  const [note, setnote] = useState({title:"",description:"",tag:""});
  const context = useContext(noteContexts);
  const { notes, getallNotes,editNote } = context;
  useEffect(() => {
    getallNotes();
  }, []);
  const ref = useRef(null);
  const updatenote = (notes) => {
    ref.current.click();
  };
  const handleClick=(e)=>{
    e.preventDefault();
    editNote(note.title,note.description)
  }
  const onchange=(e)=>{
  // console.log(e.target.value);
    setnote({...note,[e.target.name]:e.target.value})
  }
  return (
    <>
      <button
      type="hidden"
      class="visually-hidden"
        data-bs-toggle="modal"
        ref={ref}
        data-bs-target="#exampleModal"
      ></button>
      <div
        className="modal fade"
        id="exampleModal"
        index="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Note 
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="etitle"
              name="etitle"
              aria-describedby="emailHelp"
              onChange={onchange}
            />              
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
            Description
            </label>
            <input
              type="text"
              className="form-control"
              name="edescription"
              id="edescription"              
              onChange={onchange}
            />
          </div>     <div className="mb-3">
            <label htmlFor="etag" className="form-label">
            Tag
            </label>
            <input
              type="text"
              className="form-control"
              name="etag"
              id="etag"              
              onChange={onchange}
            />
          </div>   
        </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <AddNote />
      <h2>Your Notes</h2>
      <div className="row my-3 ">
        {notes.map((note) => {
          return (
            <NoteItem
              note={note}
              updatenote={()=>updatenote(note)}
              key={note}
            ></NoteItem>
          );
        })}
      </div>
    </>
  );
}

export default Notes;
