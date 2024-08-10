// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import {useEffect,useState} from 'react';


export default function CardItem({parentsentdata,indexi}) {
    // const {item}=props.row;
    const [people, setstoredPeople] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null); 
    const [editFormData, setEditFormData] = useState({ firstName: '', lastName: '' });
    // console.log("ppp",people);
    useEffect(() => {
        const storedPeople = JSON.parse(localStorage.getItem('options')) || [];
        // console.log(people);
        setstoredPeople(storedPeople)
      }, []);
      const deleteItem=(index)=>{
        // console.log(e.target.value);
        const updatedata = people.filter((v,i)=>i !==index)
        setstoredPeople(updatedata)
        localStorage.setItem("options",JSON.stringify(updatedata));

      }
      const edititem=(i)=>{
                 const finddata=people[i];
                 console.log("finddata",finddata);
                 setEditingIndex(i)
                 setEditFormData(finddata)
                 parentsentdata(editFormData)
                 indexi(editingIndex)
      }
  return (
    <>
       <ul>
        {people.length<0? people.map((person, index) => (
          <li key={index}>{`${person.firstName} ${person.lastName}`}    <button onClick={()=>deleteItem(index)} value={person.id}>delete</button>
          <button onClick={()=>edititem(index)} value={person.id}>Edit</button>
          </li>
        )):"NO Record Found"}
      </ul>
      
    </>
  );
}
