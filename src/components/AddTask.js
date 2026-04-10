import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'; 

function AddTask() {
  const [task, setTask] = useState({
    title: "",
        description: "",
            status: "pending"

  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {     
    e.preventDefault();
    fetch("http://bvrithcloud.com/api/tasks", {
      method: "POST",   
      headers: {    
        "Content-Type": "application/json",
        "x-student-id":"23WH1A0511"
      },
      body: JSON.stringify(task)
    })
    .then((res) => res.json())
    .then(() => {
      alert("Task added successfully!");
      navigate('/'); // Navigate back to the task list after adding ");
    })
    .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
          <input
            name="title"    
            placeholder="Title"
            onChange={handleChange}
            required
          />
          <input
            name="description"
            placeholder="Description"
            onChange={handleChange}
            required
          />
          <input
            name="status"
            value="pending"
            readOnly
        />
        <button type ="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
