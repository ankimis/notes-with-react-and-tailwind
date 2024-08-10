import React from "react";
import NewTask from "./NewTask";

function Tasks({ tasksss, onAddTask, onDelete }) {
  console.log('tt'+tasksss);
  return (
    <section>
      <h2 className="text-2xl text-stone-700  text-bold mb-4">Tasks</h2>
      <NewTask onAdd={onAddTask} />
      {tasksss.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any task yet ..
        </p>
      )}
      {tasksss.length !== 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasksss.map((task) => (
            //  console.log(task)
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button className="text-stone-700 hover:text-red-500">Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
