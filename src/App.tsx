import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LiquidEther from "./LiquidEther";
import SideBar from "./SideBar";
import TodoPage from "./pages/TodoPage";
import type { Todo } from "./types/Todo";

const todoItems: Todo[] = [
    { id: 1, title: 'Buy groceries', dueDate: new Date().toISOString().split('T')[0], completed: false, priority: 'low' },
    { id: 2, title: 'Walk the dog', dueDate: '2024-06-11', completed: true, priority: 'medium' },
    { id: 3, title: 'Read a book', dueDate: '2024-06-15', completed: true, priority: 'high' },
    { id: 4, title: 'testing', dueDate: '2026-01-14', completed: false, priority: 'low' },
    { id: 5, title: 'Read a book nnn', dueDate: '2026-06-19', completed: true, priority: 'high' },
    { id: 6, title: 'testin nmm', dueDate: '2026-01-13', completed: false, priority: 'low' },
    { id: 7, title: 'Buy groceries', dueDate: new Date().toISOString().split('T')[0], completed: false, priority: 'low' },
];


function App() {
  const [todos, setTodos] = useState<Todo[]>(todoItems);

  return (
    <div className="app">
      {/* Background */}
      <div className="background">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Foreground */}
    <div style={{ display: "flex", minHeight: "100vh", margin: 0}}>
      <Router>
        <SideBar />
        
        <main>
          <Routes>
            <Route path="/" element={<TodoPage filter="all" todoItems={todos} />} />
            <Route path="/today" element={<TodoPage filter="today" todoItems={todos} />} />
            <Route path="/week" element={<TodoPage filter="week" todoItems={todos} />} /> 
          </Routes>
        </main>

      </Router>
    </div>
  </div>
  );
}

export default App;
