import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import QuestionComponent from "./QuestionComponent";
import AddTask from "./AddTask";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuestionComponent />} />
        <Route path="/add-task" element={<AddTask />} />
      </Routes>
    </Router>
  );
}

export default App;
