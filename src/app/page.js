
import Header from "./components/Header";
import Footer from "./components/Footer";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";
export default function Home() {
  const tasks= [
    {id : 1,title :'Read a book',isDone: true},
    {id : 2,title :'Take a shower',isDone: false},
    {id : 3,title :'Sleep',isDone: false},
  ]
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header/> 

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput/> 
        {/* task */}
        <Task task={tasks[0]} /> 
        {/* task */}
        <Task task={tasks[1]} /> 
        {/* task */}
        <Task task={tasks[2]} /> 
      </div>

      {/* //footer section */}
      <Footer year='2024' name='Natdanai'studentId='660610755'/>
    </div>
  );
}
