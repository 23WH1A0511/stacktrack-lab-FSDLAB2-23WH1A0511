import React, { use } from 'react';
import { useState, useEffect } from 'react';  
import {useNavigate} from 'react-router-dom';

function QuestionComponent() {
  const [tasks, setTasks] = useState([]); 
  const navigate = useNavigate(); 
  useEffect(() => { 
    fetch("http://bvrithcloud.com/api/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-student-id":"23WH1A0511"
      }
    })
    .then((res) => res.json())
    .then(data => {
      console.log("API DATA:", data);
      if (Array.isArray(data)) {
        setTasks(data);   
      }else if(data.tasks) {
        setTasks(data.tasks); 
      }else if (data.data) {
        setTasks(data.data); 
      }else{
        setTasks([]);
      }
    })
    .catch(error => console.error("Error fetching tasks:", error));
  }, []); 
  return (
    <div>
      <h2> Task List</h2>
      <button onClick={() => navigate('/add-task')}>Add Task</button>
      {Array.isArray(tasks) &&
       tasks.map((task) => (
        <div key={task._id}>
          <h3>{task.title}</h3> 
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
  
export default QuestionComponent;
