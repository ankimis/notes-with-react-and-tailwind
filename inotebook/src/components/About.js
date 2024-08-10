import React,{useContext} from 'react'
import noteContexts from '../context/notes/noteContexts';

function About() {

  const a = useContext(noteContexts);
  // console.log(a);
  return (
    <div>About</div>
  )
}

export default About