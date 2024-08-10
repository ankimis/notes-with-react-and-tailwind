import React,{useContext,useState} from 'react'
import noteContexts from '../context/notes/noteContexts';

function AddNote() {
    const [note, setnote] = useState({title:"",description:"",tag});
    const context = useContext(noteContexts);
  const { addNote}=context;
  const handleClick=(e)=>{
    e.preventDefault();
    addNote(note.title,note.description)
  }
  const onchange=(e)=>{
  // console.log(e.target.valu\et.name]:e.target.value})
  }
  return (
    <div>
      <div className="container my-3">
        <h3>Add a Note</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
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
              name="description"
              id="description"              
              onChange={onchange}
            />
          </div>     <div className="mb-3">
            <label htmlFor="tag" className="form-label">
            Tag
            </label>
            <input
              type="text"
              className="form-control"
              name="tag"
              id="tag"              
              onChange={onchange}
            />
          </div>         
          <button type="submit" className="btn btn-primary" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div> 
    </div>
  );
}

export default AddNote;
