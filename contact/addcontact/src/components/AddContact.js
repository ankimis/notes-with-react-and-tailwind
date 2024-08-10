import { useForm } from "react-hook-form";
import React, { useState } from 'react'
import CardItem from "./CardItem";

export default function App() {
    const [row, setRow] = useState([]);
    const [firstnamew,setfirstname]=useState("sf");
    const [lastName,setlastname]=useState("sd");
    const [index,setindex]=useState(null);
  const { register, handleSubmit } = useForm();
  const parentsentdata=(data)=>{
    console.log('OUTPUT : ',data);
    if(data !==''){
    setfirstname(data.firstName)
    setlastname(data.lastName)
    }
  }
  const indexi=(i)=>{
    setindex(i)

  }
  const editdata=(data)=>{
        const updatedPeople = [...row];
        updatedPeople[index] = data;
        setRow(updatedPeople);
        localStorage.setItem('options', JSON.stringify(updatedPeople));
        setindex(null);
  }


  const onSubmit = (data) =>{
     console.log(firstnamew);
        // if (!option) {
        //   return setErrorhandler("Enter valid value to add item");
        // } else if (listItems.options.indexOf(option) > -1) {
        //   return setErrorhandler("This option already exists!");
        // }
        // const array = localStorage.getItem("Options");
        // let items = [];
        // if (array) {
        //   items = JSON.parse(array);
        // }
        const items = [...row,data]
        // console.log(items);
        setRow(items)
        // const storedArray = ;
    // console.log(storedArray);
        localStorage.setItem("options", JSON.stringify(items));
    
        // setListItems({ options: items });
  } 
  

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
           Add Your Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  {...register("firstName", { required: true, maxLength: 20 })}
                  style={{padding:"10px"}}
                  value={firstnamew}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last Password
                </label>
                <div className="text-sm">
                  {/* <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500"> */}

                  {/* </a> */}
                </div>
              </div>
              <div className="mt-2">
                <input
                  {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
                  style={{padding:"10px"}}
                  value={lastName}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <input vlaue={index}/>
            </div>

            <div>
              {index !==null ? (<button
                type="submit"
                onClick={()=>editdata()}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Edit
              </button>):
                (<button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>)
              }
            </div>
          </form>
          <CardItem row={row} parentsentdata={parentsentdata} indexi={indexi}/>
        </div>
      </div>
    </>
  );
}
