import React, { use } from 'react';
import { useState, useEffect } from 'react';  
import {useNavigate} from 'react-router-dom';

function QuestionComponent() {
  const [tasks, setTasks] = useState(null); 
  const navigate = useNavigate(); 
  useEffect(() => { 
    fetch("http://bvrithcloud.com/api/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-student-id":"23WH1A0511"
      }
    })
    .then(response => response.json())
    .then(data => setTasks(data))
    .catch(error => console.error("Error fetching tasks:", error));
  }, []); 
  return (
    <div>
      <h2> Task List</h2>
      <button onClick={() => navigate('/add-task')}>Add Task</button>
      {tasks.map((task) => (
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
