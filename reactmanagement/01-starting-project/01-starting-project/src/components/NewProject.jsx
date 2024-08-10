import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ onAdd, onCancelAddProject }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const duedDate = useRef();
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = duedDate.current.value;

    //Validation ...
    if (
      enteredTitle.trim() === "" ||
      enteredDueDate.trim() === "" ||
      enteredDescription.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    modal.current.close();

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-600 my-4 ">
          {" "}
          Invailid Input
        </h2>
        <p className="text-stone-600 mb-4">
          Ooops ... Somthing Went Wrong to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end  gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancelAddProject}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50  hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={duedDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}

export default NewProject;
