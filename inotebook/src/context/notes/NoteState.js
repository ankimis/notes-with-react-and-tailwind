import { useState } from "react";
import NoteContext from "./noteContexts";
const NoteState = (props) => {
  const host = "http://localhost:4000";
  const notesinitial = []  
// getallNotes Notes
const getallNotes = async () => {
    
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: "GET", // Get Post put delete
    headers: {
      "Content-Type": "application/json",
      "auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhM2ExOWQzNWE0ZWYxZWZjZTZjZDRkIn0sImlhdCI6MTcwNTcyNjQ1Nn0.pQqdvhPkDjzLtohudQQEDLlnDlEQCrEu2Pq5dfhR2xQ",
    }, // body data type must match "Content-Type" header 
  });
  const json =  await response.json()
  // console.log(json);
  setnotes(json)
};
  // Add Notes
  const addNote = async (title, description,tag) => {
    
    const response = await fetch(`${host}/api/notes/addnewnotes`, {
      method: "POST", // Get Post put delete
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhM2ExOWQzNWE0ZWYxZWZjZTZjZDRkIn0sImlhdCI6MTcwNTcyNjQ1Nn0.pQqdvhPkDjzLtohudQQEDLlnDlEQCrEu2Pq5dfhR2xQ",
      }, // body data type must match "Content-Type" header
      body: JSON.stringify({title,description,tag})
    });
    const json = response.json();
    console.log("yes add note is working");
  
  };

  //Delete Note

  const deleteNote = async (id) => {
    
    const response = await fetch(`${host}/api/notes/deletenoote/${id}`, {
      method: "delete", // Get Post put delete
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhM2ExOWQzNWE0ZWYxZWZjZTZjZDRkIn0sImlhdCI6MTcwNTcyNjQ1Nn0.pQqdvhPkDjzLtohudQQEDLlnDlEQCrEu2Pq5dfhR2xQ",
      }, // body data type must match "Content-Type" header
    });
    const json = response.json(); 
    console.log(json);
    console.log("Delte note" + id + " _id=. ");
    const newnotes = notes.filter((note) => note._id !== id);
    setnotes(newnotes);
  };

  // Edit Notes

  const editNote = async (id, title, description, tag) => {
    /// Api Call Logic edit to client

    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "POST", // Get Post put delete
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhM2ExOWQzNWE0ZWYxZWZjZTZjZDRkIn0sImlhdCI6MTcwNTcyNjQ1Nn0.pQqdvhPkDjzLtohudQQEDLlnDlEQCrEu2Pq5dfhR2xQ",
      }, // body data type must match "Content-Type" header
      body: JSON.stringify({title,description,tag})
    });
    const json = response.json();

    for (let i = 0; i < notes.length; i++) {
      const element = notes[i];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  const [notes, setnotes] = useState(notesinitial);

  return (
    <NoteContext.Provider
      value={{ notes, setnotes, addNote, deleteNote, editNote ,getallNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
