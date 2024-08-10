import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import {useState} from 'react';
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId :undefined,
    projects: [],
    tasks: []
  });
  function handleAddTask(text){
    // console.log('newtaskadded',text);
    const taskId=Math.random()
    setProjectsState(preState=>{
      const newTask ={
       text:text,
       projectId:preState.selectedProjectId,
       id:taskId
      }
      return{
        ...preState,
        tasks:[...preState.tasks, newTask]
      }
    })

  }
  function handleDeleteTask(){

  }
  function handleStartedProject(){
    setProjectsState(preState=>{
      return {
        ...preState,
        selectedProjectId:null,
      }
    })
  } function handleCancelProject(){
    setProjectsState(preState=>{
      return {
        ...preState,
        selectedProjectId:undefined,
      }
    })
  }
  function handleSelectProject(id){
    setProjectsState((prevState)=>
    {
      return {
        ...prevState,
        selectedProjectId:id,
      }
    })
  }
  function handleAddProject(projectData){
    setProjectsState(preState=>{
      const newProject ={
       ...projectData,
       id:Math.random()
      }
      return{
        ...preState,
        selectedProjectId: undefined,
        projects:[...preState.projects, newProject]
      }
    })
  }
  function handleDeleteProject(){
    setProjectsState((preState)=>{      
      return{
        ...preState,
        selectedProjectId: undefined,
        projects: preState.projects.filter((project)=>project.id !== preState.selectedProjectId)
      }
    })
  }
  const selectedProject=projectsState.projects.find(project=>project.id === projectsState.selectedProjectId)
  // console.log('tasksss'+);
  const taskss=JSON.stringify(projectsState.tasks);
  let content =<SelectedProject project={selectedProject} onDelete={handleDeleteProject}
   onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}
   tasks={projectsState.tasks}/>


  if(projectsState.selectedProjectId === null){
    content =<NewProject onAdd={handleAddProject} onCancelAddProject={handleCancelProject}/>
  }else if(projectsState.selectedProjectId === undefined){
    content =  <NoProjectSelected  onStartAddProject={handleStartedProject}/>
  }
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar  onStartAddProject={handleStartedProject} projects={projectsState.projects} onSelectProject={handleSelectProject}/>
         {content}
      </main>
    </>
  );
}

export default App;
